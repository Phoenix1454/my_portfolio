// config.ts

export default {
  // My all personal and professional information
  personalInfo: {
    name: 'Amit Kumar',
    tagline: 'I build multi-agent AI systems that research, reason, and revise their own output.',
    title: 'AI Engineer — LangGraph · RAG · Python',
    bio: 'I build agentic AI systems — things that plan, use tools, and improve their own outputs without hand-holding. Currently shipping multi-agent pipelines at Cyber Scallywags. MSc Data Science @ University of Westminster, London.',
    profilePicture: '/images/blog/seven-sisters.jpeg',
    contact: {
      email: 'ak1454789@gmail.com',
      phone: '+44 7778217377',
    },
    socialLinks: {
      github: 'https://github.com/phoenix1454',
      linkedin: 'https://www.linkedin.com/in/amitkumar1454',
      twitter: 'https://twitter.com/your-twitter-username', // Placeholder - fill this in
      personalWebsite: 'https://www.amit-kumar.tech/',
    },
    currentFocus: {
      headline: 'Current Focus',
      items: [
        {
          title: 'MSc Data Science & Analytics',
          description: 'Advancing expertise in machine learning, statistical modeling, and big data technologies at the University of Westminster (graduating Jan 2026).',
          icon: '🎓',
        },
        {
          title: 'Agentic AI Systems',
          description: 'Building multi-agent reasoning pipelines with LangGraph and LangChain — shipping production RAG and tool-use systems at Cyber Scallywags.',
          icon: '🤖',
        },
      ],
    },
    skills: {
      top: ['Python', 'LangGraph', 'LangChain', 'RAG', 'FastAPI', 'Neo4j'],
      technicalExpertise: [
        {
          category: 'AI & LLMs',
          tools: 'LangGraph, LangChain, LlamaIndex, PydanticAI, RAG Pipelines, Prompt Engineering, Agentic AI, Hugging Face Transformers',
        },
        {
          category: 'Programming',
          tools: 'Python (Pandas, NumPy, Scikit-learn), SQL, JavaScript, TypeScript, Angular/Ionic, FastAPI',
        },
        {
          category: 'Data & Databases',
          tools: 'Neo4j (Graph DB), FAISS, Pinecone (vector DBs), PostgreSQL, A/B Testing, ETL/EDA, Tableau, Power BI',
        },
        {
          category: 'Infrastructure & Tools',
          tools: 'Docker, GitHub Actions, AWS/GCP basics, Git/GitHub, Google Analytics, MLFlow',
        },
      ],
    },
    languages: [
      { name: 'English', level: 'Full Professional' },
      { name: 'Hindi', level: 'Native or Bilingual' },
      { name: 'Punjabi', level: 'Professional Working' },
      { name: 'Sindhi', level: 'Native or Bilingual' },
      { name: 'Japanese', level: 'Elementary' },
    ],
    certifications: [
      'Neo4j & GenerativeAI Fundamentals',
      'AuraDB Fundamentals (Neo4j)',
      'Cypher Fundamentals (Neo4j)',
      'Selling with Authenticity',
      'JavaScript: Patterns',
      'Social Media Marketing for Small Business',
      'Leading in Government',
      'Entrepreneurship: Finding and Testing Your Business Idea',
    ],
    experience: [
      {
        title: 'AI Software Developer',
        company: 'Cyber Scallywags',
        duration: 'July 2025 - Present',
        location: 'London Area, UK · Remote',
        description: [
          'Built the AI components of the DSF Companion App — a multi-agent event recommendation system for the Data Science Festival, presented live to hundreds of attendees.',
          'Architected a RAG pipeline using Neo4j as a graph database and LlamaIndex for document retrieval, enabling intelligent context-aware event discovery.',
          'Used PydanticAI as the agent framework to enforce type-safe LLM outputs and structured tool-use pipelines, improving reliability across the AI stack.',
          'Built the full-stack application with Angular (Ionic) frontend and FastAPI backend, integrating RESTful APIs with RxJS Observables and robust error handling.',
          'Debugged complex runtime failures across Docker-orchestrated microservices including JSON parsing errors from LLM responses and API contract mismatches between frontend and backend.',
        ],
      },
      {
        title: 'Operations Manager',
        company: 'The Future University',
        duration: 'June 2023 – June 2024 (1 year 1 month)',
        location: 'Sahibzada Ajit Singh Nagar, Punjab, India',
        description: [
          'Identified key engagement trends by segmenting the 500,000+ user interaction dataset using SQL queries and Python (Pandas) to isolate high-value user behaviors across the live-streaming platform.',
          'Designed and executed 10+ A/B tests on marketing campaigns using statistical hypothesis testing (SciPy), achieving a 12% lift in conversion rates by validating winning variants through rigorous p-value analysis.',
          'Built automated KPI dashboards in Tableau connecting to PostgreSQL databases, tracking 25+ performance metrics in real-time and driving a 20% improvement in content engagement through data-informed optimizations.',
          'Engineered a Python ETL pipeline utilizing Pandas and Matplotlib to automate weekly reporting workflows, reducing manual data processing effort by 30% and enabling stakeholders to access insights within hours instead of days.',
        ],
      },
      {
        title: 'Assistant Operation Manager / Intern',
        company: 'The Future University',
        duration: 'Dec 2022 – Jun 2023 (7 months)',
        location: 'Mohali district, India',
        description: [
          'Architected an automated messaging system by integrating WhatsApp Business API with a custom CRM platform, implementing webhook handlers and message queuing to improve delivery rates by 20%.',
          'Streamlined customer communication workflows by developing Python scripts to automate response routing and prioritization logic, cutting average response time by 30% through intelligent message triage.',
          'Implemented targeted segmentation strategies using customer behavior data and SQL analytics, creating personalized messaging campaigns that increased engagement metrics by 25%.',
          'Diagnosed and resolved 50+ technical issues across the CRM stack by systematically debugging API integrations, database queries, and automation scripts to ensure 99.5% system uptime.',
          'Coached 5 team members on CRM best practices and automation tools, creating documentation and training materials that improved team productivity by 15%.',
        ],
      },
      {
        title: 'Social Media Analytics Research Assistant',
        company: 'Chandigarh University',
        duration: 'Nov 2022 – Dec 2022 (2 months)',
        location: 'Gurugram, Haryana, India',
        description: [
          'Extracted and analyzed 100,000+ social media posts from TikTok and Twitter using Python NLP pipelines (VADER, TextBlob) to surface sentiment trends and engagement patterns.',
          'Developed a real-time Tableau dashboard to track livestream engagement, sentiment trends, and audience retention rates.',
          'Conducted SEO analysis and TikTok ranking optimization, leading to a 15% improvement in content discoverability.',
          'Benchmarked 50+ top-performing TikTok influencers, identifying best-performing content strategies that informed creator monetization recommendations.',
        ],
      },
    ],
    education: [
      {
        degree: 'Msc Data Science and Analytics, Computer Science',
        institution: 'University of Westminster',
        duration: 'Jan 2025 - Jan 2026',
      },
      {
        degree: 'BCA, Computer Science',
        institution: 'CHANDIGARH UNIVERSITY',
        duration: 'Aug 2020 - Jun 2023',
      },
      {
        degree: 'High School, Business/Commerce',
        institution: "St. Anselm's, Ajmer",
        duration: 'Aug 2005 - Jul 2020',
      },
    ],
  },
  projects: [
    {
      id: 1,
      title: 'Multi-Agent Research Assistant',
      description: 'An autonomous research pipeline built with LangGraph where four specialized AI agents — Supervisor, Researcher, Writer, and Critiquer — collaborate to research any topic and produce a structured, high-quality report. The system implements iterative quality revision loops where the Critiquer agent evaluates output and triggers rewrites until a quality threshold is met. Explore the codebase to see the LangGraph state machine, inter-agent messaging patterns, and how Together AI and Tavily are integrated for real-time web research and synthesis.',
      image: '/images/projects/multi-agent-research.png',
      technologies: ['LangGraph', 'LangChain', 'Together AI', 'Tavily', 'Streamlit', 'Python'],
      github_url: 'https://github.com/Phoenix1454/Multi-Agent-Research-Assistant-Langgraph',
      live_url: null,
    },
    {
      id: 2,
      title: 'Palette | AI-Powered Health Monitoring App',
      description: 'Identified an opportunity to make at-home health monitoring more accessible. Led the end-to-end product development of Palette, a mobile health app, from initial concept to MVP. Conducted user research to define the core value proposition and designed a simple UI to translate complex biomarker data into actionable insights for users. The live demo showcases the precision timer interface, real-time image processing pipeline, and classification model output rendered in an intuitive, clinically-accurate format—all built on Ionic/Angular with Python backend services.',
      image: '/images/palette-app-screenshot.jpeg',
      technologies: ['Image Processing', 'Classification Model', 'iOS/Ionic', 'Product Management'],
      github_url: 'https://github.com/Phoenix1454/Palette-App',
      live_url: 'https://palette.engineer',
    },
    {
      id: 3,
      title: 'Zaro - Unified AI Marketing Platform',
      description: 'Defined the product vision and strategy for Zaro, an AI platform designed to solve the problem of fragmented marketing data for small businesses. Built scalable ETL pipelines to ingest and normalize semi-structured data from disparate sources, including Google Ads, Meta, and CSV uploads, using Python and Pandas. Implemented a recommendation engine to provide AI-based insights on campaign performance, budget allocation, and A/B testing strategies to optimize marketing ROI. Review the codebase to see the modular ETL architecture, API integration patterns, and the machine learning recommendation logic powering data-driven marketing decisions.',
      image: '/images/projects/zaro-marketing-ai.png',
      technologies: ['ETL Pipeline', 'Python/Pandas', 'Google Ads API', 'Recommendation Engine', 'A/B Testing'],
      github_url: 'https://github.com/Phoenix1454/Zaro-AI-Platform',
      live_url: null,
    },
    {
      id: 4,
      title: 'Prompt-Based FinTech Investment Platform',
      description: 'Developed an AI-native financial platform for novice investors, leveraging Large Language Models (LLMs) to simplify portfolio creation. Implemented an NLP front-end using prompt engineering techniques to translate natural language user goals (e.g., "invest in green tech with medium risk") into a structured, diversified investment profile. Integrated with real-time financial data APIs to track portfolio performance and execute trades. Explore the code to examine the prompt engineering framework, LLM response parsing logic, and the portfolio optimization algorithms that balance user intent with market data.',
      image: '/images/projects/fintech-llm-platform.png',
      technologies: ['NLP/LLMs', 'Prompt Engineering', 'Financial Data APIs', 'Investment Modeling'],
      github_url: 'https://github.com/Phoenix1454/Fintech-LLM-Platform',
      live_url: null,
    },
    {
      id: 5,
      title: 'Cyber Scallywags | Data Science Community Hub',
      description: 'Designed and built a full-stack web application to serve as a central learning and networking hub for the Data Science Festival community. Developed a content recommendation system to personalize learning paths for members. Implemented a mentorship-matching feature using a skills-based algorithm to connect junior data scientists with experienced mentors within the community. The repository demonstrates full-stack architecture with React/Next.js frontend, Node.js backend, and the collaborative filtering algorithm powering personalized content recommendations.',
      image: '/images/projects/cyber-scallywags-hub.png',
      technologies: ['Full-Stack', 'Content Recommendation', 'Mentorship Algorithm', 'Data Science Community'],
      github_url: 'https://github.com/Phoenix1454/DSF-Community-Hub',
      live_url: null,
    },
    {
      id: 6,
      title: 'MLOps Automation Pipeline',
      description: 'Built a robust MLOps pipeline for a classification model, automating model retraining, testing, and deployment to a production environment using GitHub Actions and Docker. Achieved continuous delivery with zero-downtime updates. The codebase showcases production-grade MLOps best practices including automated model versioning with MLFlow, containerized deployment workflows, CI/CD pipeline configuration, and monitoring hooks for model performance drift detection.',
      image: '/images/projects/mlops-pipeline-screenshot.png',
      technologies: ['Docker', 'FastAPI', 'GitHub Actions', 'MLFlow', 'Scikit-learn'],
      github_url: 'https://github.com/Phoenix1454/MLOps-Pipeline',
      live_url: null,
    }
  ],
  techLife: [
    {
      id: 1,
      date: 'February 14, 2025',
      location: 'London, UK',
      caption: 'Friday night cook-up with the crew. Someone had to make the biryani and it wasn\'t going to be anyone else. Good food, better company.',
      image: '/images/blog/dinner-night.jpeg',
      tags: ['London Life', 'Friends'],
    },
    {
      id: 2,
      date: 'March 29, 2025',
      location: 'Islington, London',
      caption: 'Spring walks around London. Cherry blossoms hit different when you\'re procrastinating on your dissertation.',
      image: '/images/blog/london-spring.jpeg',
      tags: ['London', 'Spring'],
    },
    {
      id: 3,
      date: 'June 15, 2025',
      location: 'Seven Sisters, East Sussex',
      caption: 'Day trip to the Seven Sisters cliffs. This is why you survive a British winter — days like this.',
      image: '/images/blog/seven-sisters.jpeg',
      tags: ['Adventure', 'UK'],
    },
    {
      id: 4,
      date: 'November 8, 2025',
      location: 'London, UK',
      caption: 'Rooftop sunset with the squad. Sometimes you need to step away from the code and remember why you\'re building things.',
      image: '/images/blog/rooftop-crew.jpeg',
      tags: ['London Life', 'Friends'],
    },
    {
      id: 5,
      date: 'May 21, 2026',
      location: 'ExCeL London',
      caption: 'We shipped it. Presenting the DSF Companion at the Data Science Festival — over a year of work, live in front of hundreds of people. Lead Engineer badge and everything.',
      image: '/images/blog/dsf-event.jpeg',
      tags: ['Cyber Scallywags', 'DSF', 'Tech Event'],
    },
  ],
  blog: [
    {
      slug: 'self-critiquing-agents-langgraph',
      title: 'How I built a multi-agent system that critiques its own output',
      excerpt: 'Most AI pipelines run once and return whatever the model produces. I wanted something different — a system that reviews its own work and rewrites until it\'s good enough. Here\'s how I built it with LangGraph.',
      date: 'July 1, 2026',
      readTime: '6 min read',
      tags: ['LangGraph', 'Multi-Agent', 'Python'],
      content: `Most AI pipelines work like this: you send a prompt, you get a response, you're done. That works fine for simple tasks. But if you want a researched, structured report on a complex topic — the first draft is rarely good enough.

I wanted to build something that knew that. A system that would write a report, read it back critically, and decide whether to revise or ship it.

## The architecture

Four agents, one state machine:

- **Supervisor** — reads the current state and decides which agent runs next
- **Researcher** — pulls live web data via Tavily Search
- **Writer** — synthesises research into a structured 900–1400 word report
- **Critiquer** — scores the draft across five dimensions and returns structured feedback

The loop runs until the Critiquer approves the output or three revision cycles complete — whichever comes first.

## Why LangGraph

The key insight is that this isn't a chain — it's a graph with cycles. The Writer can run multiple times. The Supervisor can route back to the Researcher if the draft reveals gaps in the research.

LangGraph models this as a \`StateGraph\` where each agent is a node and routing is handled by conditional edges off the Supervisor. There's no hardcoded sequencing anywhere. The Supervisor just reads the state and decides.

\`\`\`python
def supervisor_node(state: ResearchState) -> dict:
    if not state.get("research"):
        return {"next": "researcher"}
    if not state.get("draft"):
        return {"next": "writer"}
    if state.get("critique") and state["critique"]["approved"]:
        return {"next": END}
    if state.get("revision_count", 0) >= 3:
        return {"next": END}
    return {"next": "writer"}
\`\`\`

Simple. The complexity lives in the agents, not the routing.

## The critique loop

The Critiquer scores the draft across five dimensions: coverage, evidence quality, structure, clarity, and actionability. Each gets a score out of 10. If the average is below 7, it returns specific feedback and the Writer gets another pass.

This is where it gets interesting. The Writer receives not just the original research but the full critique — what was weak, why, and what a better version would do differently. The rewrites are genuinely better.

## What I'd do differently

The Researcher runs once. In a better version, the Critiquer's feedback would trigger targeted follow-up research — "the evidence for this claim is thin, go find more." That's the next thing I'm building.

The code is on [GitHub](https://github.com/Phoenix1454/Multi-Agent-Research-Assistant-Langgraph) if you want to dig in.`,
    },
  ],
  openSource: [
    {
      repo: 'langchain-ai/langgraph',
      pr: '#8238',
      prUrl: 'https://github.com/langchain-ai/langgraph/pull/8238',
      title: 'Fix typo GraphRecursionError in create_react_agent docstring',
      description: 'Fixed a typo in the create_react_agent docstring that had been in the codebase unnoticed.',
      status: 'open',
      type: 'Bug Fix',
    },
    {
      repo: 'langchain-ai/langgraph',
      pr: '#8239',
      prUrl: 'https://github.com/langchain-ai/langgraph/pull/8239',
      title: 'Add unit tests for NamedBarrierValue and NamedBarrierValueAfterFinish',
      description: 'Added 13 unit tests covering both channel classes that had zero test coverage — barrier semantics, checkpoint round-trips, consume/reset behaviour, and copy independence.',
      status: 'open',
      type: 'Tests',
    },
  ],
  nav: {
    sections: [
      { id: 'aboutSection', name: 'About' },
      { id: 'WhereIhaveWorkedSection', name: 'Experience' },
      { id: 'SomethingIveBuiltSection', name: 'Work' },
      { id: 'blogSection', name: 'Tech Life' },
      { id: 'GetInTouchSection', name: 'Contact' },
    ],
    resumeUrl: '/resume.pdf',
  },
};