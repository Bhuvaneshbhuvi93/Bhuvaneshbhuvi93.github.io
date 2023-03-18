// gitprofile.config.js

const config = {
  github: {
    username: 'Bhuvaneshbhuvi93', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 6, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'bhuvanesh--data-scientist',
    phone: '+91 9900425184',
    email: 'bhuvaneshwargomathi@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'MySQL',
    'Power BI',
    'Pandas',
    'Numpy',
    'Excel',
    'Machine Learning',
    'Tensor Flow',
  ],
  experiences: [
    {
      company: 'WIPRO – Chennai',
      position: 'Senior Officer',
      from: 'February 2021',
      to: 'November 2022',
      companyLink: 'https://www.linkedin.com/showcase/wipro-digital-operations-and-platforms/',
    },
    {
      company: 'Bruhat Logistics Pvt Ltd – Chennai',
      position: 'Procurement Specialist',
      from: ' December 2018',
      to: 'October 2020',
      companyLink: 'https://www.linkedin.com/company/bruhat-logistics/about/',
    },
     {
      company: 'Paati Agro Hub – Pudukkottai',
      position: 'Business Development Executive',
      from: 'August 2015',
      to: 'March 2017',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'Indian Institute of Technology, Madras',
      degree: "GUVI's IITM Certified Programming Professional & Master Data Science Program",
      from: 'November 2022',
      to: 'March 2023',
    },
    {
      institution: "St. Joseph's College Of Engineering",
      degree: 'MBA - Operations and Marketing',
      from: '2017',
      to: '2019',
    },
    {
      institution: "RMK ENGINEERING COLLEGE, CHENNAI",
      degree: 'BE - Electronics and Instrumentation',
      from: '2011',
      to: '2015',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'PhonePe Pulse Data Visualization',
      description:
        'This project included interative visualization of PhonePe pulse data in the streamlit GUI. Technologies used are Github Cloning, Python, Pandas, MySQL, mysql-connector-python, Streamlit, and Plotly.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
    {
      title: 'Twitter Scrapping',
      description:
        "This project allows you to collect tweets for a specific keyword or hashtag, within a given date range and a limit of tweets to be scraped. The project is built using Python and the popular libraries 'streamlit', 'pandas', and 'pymongo'.",
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
    {
      title: 'Calorie Counting Using LInear Regression',
      description:
        "For this project, I have worked on developing a machine learning model that predicts the number of calories burned by a person based on their steps taken, active minutes, and distance travelled. The model has been trained on real-life fitness data, giving us impressive results in terms of accuracy. This project has been a great learning experience.",
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
    {
      title: 'Extracting Business Card Data with OCR',
      description:
        "This project allows you to collect informaion from any image or document uploded into the tool the tool was build using the technologies OCR,streamlit GUI, SQL,Data Extraction",
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
    
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'winter',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'dark',
      'cupcake',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
