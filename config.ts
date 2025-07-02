const config = {
  // My all personal and professional information
  personalInfo: {
    name: 'Amit Kumar',
    tagline: 'Data Analyst | Python, SQL, Excel | Turning Data into Insights',
    title: 'Data Analyst | Transforming Data into Actionable Insights',
    bio: 'As a Data Science and Analytics student at the University of Westminster, I specialize in leveraging data-driven strategies to solve business challenges. My background spans operations management, marketing, and customer service, allowing me to approach analytics with a strategic mindset.\n\nI’m passionate about turning raw data into business insights and continuously expanding my knowledge in data science, analytics, and machine learning. I’m actively seeking opportunities in data analysis, business intelligence, and data-driven decision-making. Let’s connect! If you’re looking for a data-driven problem solver who can blend analytics with strategy, feel free to reach out for full-time, internship, or project-based opportunities.',
    profilePicture: '/images/Portfolio-portrait.jpg', 
    contact: {
      email: 'amit.kumar.analytics@gmail.com',
      phone: '+44 7778217377',
    },
    socialLinks: {
      github: 'https://github.com/phoenix1454',
      linkedin: 'https://www.linkedin.com/in/amitkumar1454',
      twitter: 'https://twitter.com/your-twitter-username',
      personalWebsite: 'https://phoenix1454.github.io/DevAmit/',
    },
    skills: {
      top: ['Pandas', 'Scikit-Learn', 'Matplotlib'],
      technicalExpertise: [
        {
          category: 'Programming',
          tools: 'Python (Pandas, NumPy, Matplotlib, Seaborn), SQL',
        },
        {
          category: 'Data Analytics',
          tools: 'A/B testing, data visualization (Power BI, Tableau), data cleaning, statistical analysis',
        },
        {
          category: 'Machine Learning',
          tools: 'Basic algorithms, model building, and predictive analytics',
        },
        {
          category: 'Web & Social Media Analytics',
          tools: 'Google Analytics, SEO optimization, social media sentiment analysis',
        },
      ],
    },
    languages: [
      {
        name: 'English',
        level: 'Full Professional',
      },
      {
        name: 'Hindi',
        level: 'Native or Bilingual',
      },
      {
        name: 'Japanese',
        level: 'Elementary',
      },
    ],
    certifications: [
      'Selling with Authenticity',
      'JavaScript: Patterns',
      'Social Media Marketing for Small Business',
      'Leading in Government',
      'Entrepreneurship: Finding and Testing Your Business Idea',
    ],
    experience: [
      {
        title: 'Head of Data Analytics | Python, SQL, A/B Testing, BI Tools',
        company: 'The Future University',
        duration: 'June 2023 - June 2024 (1 year 1 month)',
        location: 'Sahibzada Ajit Singh Nagar, Punjab, India',
        description: [
          'Analyzed 500,000+ user interactions on a live-streaming platform, identifying key engagement patterns and trends.',
          'Conducted A/B testing on 10+ marketing campaigns, leading to a 12% increase in conversion rates through data-driven insights.',
          'Tracked and optimized 25+ KPIs, resulting in a 20% boost in content engagement rates.',
          'Automated weekly reports using Python (Pandas, Matplotlib), reducing manual data processing time by 30%.',
        ],
      },
      {
        title: 'Assistant Operations Intern | CRM Automation & Customer Engagement',
        company: 'The Future University',
        duration: 'December 2022 - June 2023 (7 months)',
        location: 'Mohali district, India',
        description: [
          'Optimized a WhatsApp CRM tool for automated messaging, improving message delivery rate by 20%.',
          'Streamlined workflows, reducing response time by 30% through automation.',
          'Implemented targeted messaging strategies, increasing customer engagement by 25%.',
          'Analyzed and resolved 50+ technical issues, ensuring smooth CRM operation.',
          'Trained 5 team members, improving overall productivity by 15%.',
        ],
      },
      {
        title: 'Social Media Analytics Research Assistant | Python, NLP, SEO Optimization, Data Visualization',
        company: 'CHANDIGARH UNIVERSITY',
        duration: 'November 2022 - December 2022 (2 months)',
        location: 'Gurugram, Haryana, India',
        description: [
          'Extracted and analyzed 100,000+ social media posts from TikTok and Twitter using Python NLP (VADER, TextBlob).',
          'Developed a real-time Tableau dashboard to track livestream engagement, sentiment trends, and audience retention rates.',
          'Conducted SEO analysis & TikTok ranking optimization, leading to 15% improvement in content discoverability.',
          'Benchmarked 50+ top-performing TikTok influencers, identifying best-performing content strategies for follower growth.',
          'Provided data-driven insights that influenced creator monetization strategies and feature adoption.',
        ],
      },
    ],
    education: [
      {
        degree: 'Msc Data Science and Analytics',
        institution: 'University of Westminster',
        duration: 'January 2025 - May 2026',
      },
      {
        degree: 'BCA, Computer Science',
        institution: 'CHANDIGARH UNIVERSITY',
        duration: 'August 2020 - June 2023',
      },
      {
        degree: 'High School, Business/Commerce',
        institution: "St. Anselm's, Ajmer",
        duration: 'August 2005 - July 2020',
      },
    ],
  },
  projects: [
    {
      id: 1,
      title: 'VR Dashboard',
      description: 'A virtual reality dashboard project. This project showcases my skills in VR development and dashboard design. It allows users to interact with data in a virtual environment, providing an immersive experience for data visualization and analysis. It demonstrates my understanding of VR technologies and user interface design in a 3D space.',
      image: '/images/projects/vr-dashboard-screenshot.png',
      technologies: ['VR', 'Dashboard', 'Unity'],
      github_url: 'https://github.com/Phoenix1454/vr-dashboard.git',
      live_url: null,
    },
    {
      id: 2,
      title: 'Data Warehousing Coursework',
      description: 'A project involving data warehousing principles. This project demonstrates my understanding of data warehousing concepts and practices.',
      image: '/images/projects/data-warehousing-screenshot.jpg', 
      technologies: ['Python', 'SQL', 'Data Warehousing'], // Add the technologies used
      github_url: 'https://github.com/Phoenix1454/Data_warehousing_coursework_2.git',
      live_url: null, // No hosted link, so set to null
    },
    {
      id: 3,
      title: 'React To-Do App',
      description: 'A simple to-do application built with React. This project showcases my skills in React and front-end development. It allows users to add, delete, and mark tasks as completed. It also demonstrates my understanding of state management and component-based architecture in React.',
      image: '/images/projects/react-todo-app-screenshot.png',
      technologies: ['React', 'JavaScript', 'CSS'],
      github_url: 'https://github.com/Phoenix1454/react-todo-app.git',
      live_url: null,
    },
    
    {
      id: 4,
      title: 'RPTS1 Project',
      description: 'A project from RPTS1. This project showcases my skills in data analysis and reporting. It involves analyzing data from various sources and generating reports to provide insights into business performance. It demonstrates my ability to work with large datasets, perform data cleaning and transformation, and create meaningful visualizations to communicate findings effectively.',
      image: '/images/projects/rpts1-screenshot.jpeg',
      technologies: ['Python', 'SQL', 'Data Analysis'],
      github_url: 'https://github.com/Phoenix1454/RPTS1.git',
      live_url: null,
    },
  ],
    
  nav: {
    sections: [
      { id: 'aboutSection', name: 'About' },
      { id: 'WhereIhaveWorkedSection', name: 'Experience' },
      { id: 'SomethingIveBuiltSection', name: 'Work' },
      { id: 'GetInTouchSection', name: 'Contact' },
    ],
    resumeUrl: '/resume.pdf', // You can change the resume file name here if needed
  },
    // Other development-specific configuration options
  };
// Export the config object
export default config;