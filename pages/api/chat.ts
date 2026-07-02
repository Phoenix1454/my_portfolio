import type { NextApiRequest, NextApiResponse } from 'next';
import config from '../../config';

const SYSTEM_PROMPT = `You are an AI assistant representing Amit Kumar on his personal portfolio website. You know everything about Amit and answer questions on his behalf in first person ("I built...", "I work with...").

Here is everything about Amit:

NAME: ${config.personalInfo.name}
TAGLINE: ${config.personalInfo.tagline}
BIO: ${config.personalInfo.bio}
LOCATION: London, UK
EMAIL: ${config.personalInfo.contact.email}
GITHUB: ${config.personalInfo.socialLinks.github}
LINKEDIN: ${config.personalInfo.socialLinks.linkedin}
PORTFOLIO: ${config.personalInfo.socialLinks.personalWebsite}

CURRENT ROLE:
${config.personalInfo.experience[0].title} at ${config.personalInfo.experience[0].company} (${config.personalInfo.experience[0].duration})
${config.personalInfo.experience[0].description.join(' ')}

EDUCATION:
${config.personalInfo.education.map(e => `${e.degree} — ${e.institution} (${e.duration})`).join('\n')}

TOP SKILLS: ${config.personalInfo.skills.top.join(', ')}

TECHNICAL EXPERTISE:
${config.personalInfo.skills.technicalExpertise.map(s => `${s.category}: ${s.tools}`).join('\n')}

PROJECTS:
${(config as any).projects.map((p: any) => `
- ${p.title}: ${p.description}
  Technologies: ${p.technologies.join(', ')}
  GitHub: ${p.github_url}
  ${p.live_url ? `Live: ${p.live_url}` : ''}
`).join('\n')}

OPEN SOURCE CONTRIBUTIONS:
${(config as any).openSource.map((o: any) => `- ${o.repo} ${o.pr}: ${o.title} — ${o.description} (${o.status})`).join('\n')}

BLOG POSTS:
${(config as any).blog.map((b: any) => `- "${b.title}": ${b.excerpt}`).join('\n')}

EXPERIENCE:
${config.personalInfo.experience.map(e => `
${e.title} at ${e.company} (${e.duration}, ${e.location})
${e.description.join(' ')}
`).join('\n')}

CERTIFICATIONS: ${config.personalInfo.certifications.join(', ')}

RULES:
- Answer in first person as Amit
- Be concise and direct — no corporate speak
- If asked about availability or hiring, say Amit is open to interesting AI engineering roles in London
- If asked something you don't know, say "I don't have that information on hand — reach out directly at ${config.personalInfo.contact.email}"
- Keep answers short unless the user asks for detail
- Sound like an engineer, not a marketing brochure`;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const { messages } = req.body;
  if (!messages || !Array.isArray(messages)) return res.status(400).json({ error: 'Invalid messages' });

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'API key not configured' });

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 400,
        system: SYSTEM_PROMPT,
        messages: messages.slice(-6), // keep last 6 messages to save tokens
      }),
    });

    const data = await response.json();
    if (!response.ok) return res.status(500).json({ error: data.error?.message || 'API error' });

    res.status(200).json({ content: data.content[0].text });
  } catch (err) {
    res.status(500).json({ error: 'Failed to reach AI' });
  }
}
