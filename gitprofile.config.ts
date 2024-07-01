// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'xaprier', 
  },
  about: 'I\'m an experienced software developer with a strong background in C++, Linux and it\'s distributed operating systems. I specialize in Qt Core/GUI/Concurrent and am passionate about creating user-friendly interfaces. Additionally, I excel in developing optimized, high-performance applications.',
  avatar: 'https://github.com/xaprier/portfolio/blob/build/avatar.jpeg', // use another avatar image instead of github avatar
  base: '/portfolio/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed.
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['xaprier/actions-semver', 'xaprier/XQProgressBar', 'xaprier/logger', 'xaprier/tester', 'xaprier/qt-nbc', 'xaprier/qt-notepad', 'xaprier/methods-smart', 'xaprier/hidamari', 'xaprier/nasm-calculator', 'xaprier/gaiacraft-discord-bot'  ], // List of repository names to display. 
      },
    },
    external: {
      header: 'External Projects',
      projects: [
        {
          title: 'Medical Imaging System',
          description:
            'Developed a Medical Imaging System by creating a GUI application using Qt and implementing 3D visualization with VTK to work on NVIDIA Jetson embedded systems. Additionally assisted handling simple computer vision scenarios using OpenCV.',
          imageUrl:
            'https://www.medpointr.com/Content/images/logo-white.png',
          link: 'https://www.medpointr.com/',
        },
        {
          title: 'IB Fullstack Web App',
          description:
            'This is a website project that introduces IB schools and their IB private tutoring services. The platform aims to collect applications, providing a seamless experience for teachers, students, and administrators. In the background, the website features functions for teachers, students, and administrators to facilitate smooth operations. Wrote with ReactJS and PHP.',
          imageUrl:
            'https://ibeviankara.com/assets/favicon.991d56e5.ico',
          link: 'https://ibeviankara.com/home',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Seymen Kalkan',
    description: 'This is the portfolio page of Seymen Kalkan. Developing C++, Qt projects and more.',
    imageURL: 'https://avatars.githubusercontent.com/u/69122856?v=4',
  },
  social: {
    linkedin: 'xaprier',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: 'xaprier.dev',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    skype: '',
    telegram: '',
    website: 'https://www.xaprier.dev',
    phone: '+90 542 624 7634',
    email: 'seymenkalkan@gmail.com',
  },
  resume: {
    fileUrl:
      'https://raw.githubusercontent.com/xaprier/xaprier.github.io/86aa24aa7fe2e6b146b4c04d1922d6a43ae2fbaf/uploads/my-cv.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C++',
    'CMake',
    'GNU/Linux',
    'Qt',
    'VTK',
    'OpenSSL',
    'JavaScript',
    'React.js',
    'Node.js',
    'Git',
    'Docker',
  ],
  experiences: [
    {
      company: 'MEDPOINTR',
      position: 'C++ Developer',
      from: 'May 2023',
      to: 'May 2024',
      companyLink: 'https://www.medpointr.com/',
      type: 'Full Time'
    },
  ],
  references: [
    {
      name: 'Ethem Bilgehan ÇİÇEK',
      companies: ['BITES', 'MEDPOINTR'],
      positions: ['Software Engineer', 'Founder'],
      linkedin: 'https://www.linkedin.com/in/ethem-bilgehan-cicek-570393157/',
      mail: 'ethem.cicek@medpointr.com',
      phone: '',
    },
    {
      name: 'Kaan Aykut KABAKÇI',
      companies: ['ASELSAN'],
      positions: ['Lead Engineer'],
      linkedin: 'https://www.linkedin.com/in/kaanaykutkabakci/',
      mail: 'kaanaykutkabakci@gmail.com',
      phone: '',
    },
    {
      name: 'Gökşin AKDENİZ',
      companies: ['Eskisehir Technical University'],
      positions: ['Lecturer'],
      linkedin: 'https://www.linkedin.com/in/g%C3%B6k%C5%9Fin-akdeniz-1a845950/',
      mail: 'goksina@eskisehir.edu.tr',
      phone: '',
    },
  ],
  certifications: [
    // {
    //   name: 'Lorem ipsum',
    //   body: 'Lorem ipsum dolor sit amet',
    //   year: 'March 2022',
    //   link: 'https://example.com',
    // },
  ],
  educations: [
    {
      institution: 'Eskisehir Technical University',
      degree: 'Computer Programming',
      from: '2021',
      to: '2023',
      gpa: '3.89'
    },
  ],
  publications: [
    // {
    //   title: 'Publication Title',
    //   conferenceName: '',
    //   journalName: 'Journal Name',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
    // {
    //   title: 'Publication Title',
    //   conferenceName: 'Conference Name',
    //   journalName: '',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
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
    defaultTheme: 'dracula',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
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
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
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

  enablePWA: true,
};

export default CONFIG;
