// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-team",
          title: "Team",
          description: "Members of the group",
          section: "Navigation",
          handler: () => {
            window.location.href = "/team/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Our ongoing research projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Publications from the Claringbould Lab.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-news",
          title: "News",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Teaching activities and resources.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-annique-started-her-work-at-erasmus-mc",
          title: 'Annique started her work at Erasmus MC',
          description: "",
          section: "News",},{id: "news-may-krause-joined-erasmus-mc-as-the-first-phd-student-in-the-group",
          title: 'May Krause joined Erasmus MC as the first PhD student in the group!...',
          description: "",
          section: "News",},{id: "news-sumseq-article-published-in-nature-methods",
          title: 'SUMseq article published in Nature Methods',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-05-26_sumseq/";
            },},{id: "news-eric-and-annique-are-interviewed-in-de-cardioloog",
          title: 'Eric and Annique are interviewed in De Cardioloog',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-06-23_cardioloog/";
            },},{id: "news-annique-is-interviewed-in-dialoog",
          title: 'Annique is interviewed in Dialoog',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-09-01_dialoog/";
            },},{id: "news-caiwei-tan-joined-erasmus-mc-as-the-second-phd-student-in-the-group",
          title: 'Caiwei Tan joined Erasmus MC as the second PhD student in the group!...',
          description: "",
          section: "News",},{id: "news-sumseq-protocol-published-in-nature-protocols",
          title: 'SUMseq protocol published in Nature Protocols',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-02-26_sumseq_prot/";
            },},{id: "news-new-paper-on-biorxiv",
          title: 'New paper on bioRxiv',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-03-12_CD4_biorxiv/";
            },},{id: "news-science-days-2026",
          title: 'Science Days 2026',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-03-23/";
            },},{id: "projects-type-2-diabetes",
          title: 'Type 2 Diabetes',
          description: "Molecular mechanisms of genetic risk for type 2 diabetes",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_t2d/";
            },},{id: "projects-familial-hypercholesterolaemia",
          title: 'Familial Hypercholesterolaemia',
          description: "Integrative scoring for familial hypercholesterolaemia",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_fh/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61.%63%6C%61%72%69%6E%67%62%6F%75%6C%64@%65%72%61%73%6D%75%73%6D%63.%6E%6C", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=Bb-a4TwAAAAJ", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/annique-claringbould-2189b262", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/anniqueclaringbould", "_blank");
        },
      },{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/anniquec.bsky.social", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
