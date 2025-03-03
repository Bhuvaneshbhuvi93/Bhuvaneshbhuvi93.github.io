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
    email: 'bhuvaneshwargomathi@gmail.com',
    phone: '+91 9900425184',
    linkedin: 'bhuvaneshwar--data-scientist',
    medium: '@bhuvaneshwargomathi',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1V9gB6eVUUGl9MAmZ3dOkBrI1EZtu9ZD4/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
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
        'This project includes interative visualization of PhonePe pulse data in the streamlit GUI. Technologies used are Github Cloning, Python, Pandas, MySQL, mysql-connector-python, Streamlit, and Plotly.',
      imageUrl:'https://raw.githubusercontent.com/Bhuvaneshbhuvi93/Bhuvaneshbhuvi93.github.io/main/images/pay.png',
    },
    {
      title: 'Twitter Scrapping',
      description:
        "This project allows you to collect tweets for a specific keyword or hashtag, within a given date range and a limit of tweets to be scraped. The project is built using Python and the popular libraries 'streamlit', 'pandas', and 'pymongo'.",
      imageUrl:'https://raw.githubusercontent.com/Bhuvaneshbhuvi93/Bhuvaneshbhuvi93.github.io/main/images/social.png',
      link:'https://bhuvaneshwar-tool-tweetssentimentprediction.streamlit.app/'
    },
    {
      title: 'Calorie Counting Using Smartwatch Data',
      description:
        "For this project, I have worked on developing a machine learning model that predicts the number of calories burned by a person based on their steps taken, active minutes, and distance travelled. The model has been trained on real-life fitness data, giving us impressive results in terms of accuracy. This project has been a great learning experience.",
      imageUrl:'https://raw.githubusercontent.com/Bhuvaneshbhuvi93/Bhuvaneshbhuvi93.github.io/main/images/calories.png',
    },
    {
      title: 'Extracting Business Card Data with OCR',
      description:
        "This project allows you to collect informaion from any image or document uploded into the tool the tool was build using the technologies OCR,streamlit GUI, SQL,Data Extraction",
      imageUrl:'https://raw.githubusercontent.com/Bhuvaneshbhuvi93/Bhuvaneshbhuvi93.github.io/main/images/ocr.png',
    },
    {
      title: 'Real Time Sentiment Analysis',
      description:
        "This project allows you to determine the customers satisfaction towards our product. Using NLKT I created a tool which would ask user the rating and the review of the product and will determine the satisfaction level of the customer.",
      imageUrl:'https://raw.githubusercontent.com/Bhuvaneshbhuvi93/Bhuvaneshbhuvi93.github.io/main/images/sentiment-analysis.png',
      link:'https://bhuvaneshwar-tool-realtimesentimentprediction.streamlit.app/'
    },
    {
      title: 'Tweet Sentiment Analysis',
      description:
        "This project allows you to determine the people's reaction towards a particular event, news or product. This tweet alloes you to collect multiple tweets of a particular event, news or product and the collective reaction of the masses towards that item is determined.",
      imageUrl:'https://raw.githubusercontent.com/Bhuvaneshbhuvi93/Bhuvaneshbhuvi93.github.io/main/images/twitter.png',
      link:'https://bhuvaneshwar-tool-tweetssentimentprediction.streamlit.app/'
    },
    
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source:'',// medium | dev
    username:'', // to hide blog section, keep it empty
    limit:'', // How many posts to display. Max is 10.
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
    defaultTheme: 'garden',

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
      'corporate',
      'retro',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
    ],

    // Custom theme
    customTheme: {
      primary: '#0077B6',
      secondary: '#FFC764',
      accent: '#F94144',
      neutral: '#F5F5F5',
      'base-100': '#FFFFFF',
      '--rounded-box': '1rem',
      '--rounded-btn': '1rem',
//       primary: '#fc055b',
//       secondary: '#219aaf',
//       accent: '#e8d03a',
//       neutral: '#2A2730',
//       'base-100': '#E3E3ED',
//       '--rounded-box': '3rem',
//       '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/Bhuvaneshbhuvi93"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a>and ❤️`,
};

export default config;
