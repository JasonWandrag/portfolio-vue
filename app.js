const app = Vue.createApp({
  data() {
    return {
      navbar: {
        active: false,
      },
      career: [
        {
          id: 0,
          modalActive: false,
          year: "2020 - Present",
          role: "Lecturer / Fullstack Developer",
          company: {
            name: "Life Choices",
            description:
              "An NPO focused on challenging inequality by investing in youth. My job was focused around training youth and helping them find sustainable jobs",
            reference: {
              name: "Godwin Dzvapatsva",
              position: "Head of Curriculum",
              number: "071 248 2443",
            },
          },
          accomplishments: [
            "I helped create and maintain the Fullstack Developer Course content",
            "Deliver course content in 6 month cycles",
            "Helped over 200 young and budding developers learn core programming skills and create online portfolios",
            "Assisted in the development of LC Studio, a company designed to give work experience to intern developers",
          ],
          techstack: [
            {
              language: "HTML",
              icon_element: "<i class='fab fa-html5'></i>",
            },
            {
              language: "CSS",
              icon_element: "<i class='fab fa-css3-alt'></i>",
            },
            {
              language: "JavaScript",
              icon_element: '<i class="fab fa-js"></i>',
            },
            {
              language: "Python",
              icon_element: '<i class="fab fa-python"></i>',
            },
            {
              language: "Python",
              icon_element: '<i class="fab fa-python"></i>',
            },
            {
              language: "Database SQL",
              icon_element: '<i class="fas fa-database"></i>',
            },
          ],
        },
        {
          id: 1,
          modalActive: false,
          year: "2019",
          role: "Frontend Developer",
          company: {
            name: "NuDynamics",
            description:
              "A small startup focused on creating the web applications for a large tourism company",
            reference: {
              name: "Elrico Heinen",
              position: "CEO",
              number: "083 256 1718",
            },
          },
          accomplishments: [
            "Learnt how to create applications in React",
            "Created the frontend UI for the MTO Group website",
          ],
          techstack: [
            {
              language: "HTML",
              icon_element: "<i class='fab fa-html5'></i>",
            },
            {
              language: "CSS",
              icon_element: "<i class='fab fa-css3-alt'></i>",
            },
            {
              language: "JavaScript",
              icon_element: '<i class="fab fa-js"></i>',
            },
            {
              language: "Python",
              icon_element: '<i class="fab fa-python"></i>',
            },
            {
              language: "Python",
              icon_element: '<i class="fab fa-python"></i>',
            },
            {
              language: "Database SQL",
              icon_element: '<i class="fas fa-database"></i>',
            },
          ],
        },
        {
          id: 2,
          modalActive: false,
          year: "2018",
          role: "Frontend Developer",
          company: {
            name: "Braxton",
            description:
              "A dedicated development house with a few in house products",
            reference: {
              name: "Andro Treurnicht",
              position: "Project Lead",
              number: "083 308 5234",
            },
          },
          accomplishments: [
            "Took the Angular Tour of Heroes",
            "Contributed to projects by creating reuseable components",
          ],
          techstack: [
            {
              language: "HTML",
              icon_element: "<i class='fab fa-html5'></i>",
            },
            {
              language: "CSS",
              icon_element: "<i class='fab fa-css3-alt'></i>",
            },
            {
              language: "JavaScript",
              icon_element: '<i class="fab fa-js"></i>',
            },
            {
              language: "Python",
              icon_element: '<i class="fab fa-python"></i>',
            },
            {
              language: "Python",
              icon_element: '<i class="fab fa-python"></i>',
            },
            {
              language: "Database SQL",
              icon_element: '<i class="fas fa-database"></i>',
            },
          ],
        },
        {
          id: 3,
          modalActive: false,
          year: "2016-2017",
          role: "Designer / Developer",
          company: {
            name: "JNZ Group",
            description: "An end-to-end business IT services provider",
            reference: {
              name: "Kim North",
              position: "Managing Director",
              number: "072 081 6226",
            },
          },
          accomplishments: [
            "Helped various local businesses with branding",
            "Created website mockups according to client needs",
            "Develop websites and ecommerce stores with the appropriate web tools",
            "Gathered resources that have since made my development career an absolute breeze",
          ],
          techstack: [
            {
              language: "HTML",
              icon_element: "<i class='fab fa-html5'></i>",
            },
            {
              language: "CSS",
              icon_element: "<i class='fab fa-css3-alt'></i>",
            },
            {
              language: "JavaScript",
              icon_element: '<i class="fab fa-js"></i>',
            },
            {
              language: "Python",
              icon_element: '<i class="fab fa-python"></i>',
            },
            {
              language: "Python",
              icon_element: '<i class="fab fa-python"></i>',
            },
            {
              language: "Database SQL",
              icon_element: '<i class="fas fa-database"></i>',
            },
          ],
        },
      ],
      projects: [
        {
          id: 0,
          modalActive: true,
          title: "LC Studio Website",
          desc: "I created this website for the launch of LC Studio, a company focused training and promoting new developers",
          stack: "HTML/CSS/JS",
          img: "./images/LC_Studio.png",
          img_alt: "LC Studio Website",
          github: "https://github.com/JasonWandrag/LC_Studio_front_end",
          live: "https://www.lcstudio.co.za/",
        },
        {
          id: 1,
          modalActive: false,
          title: "Splashify",
          desc: "This is a scrollable gallery using the Unsplash API",
          stack: "React/CSS",
          img: "./images/Splashify.png",
          img_alt: "Splashify - The Unsplash Viewer",
          github: "https://github.com/JasonWandrag/splashify",
          live: "https://jason-wandrag-splashify.netlify.app/",
        },
        {
          id: 2,
          modalActive: false,
          title: "Dynamic Theme Switcher",
          desc: "I created this to be able to switch between Neumorphism and Glassmorphism themes. I also ensured that the shadow colors for the Neumophic theme automatically generates with the color given, and that the text also changes according to its background",
          stack: "HTML/CSS/JS",
          img: "./images/Dynamic_Theme_Switcher.png",
          img_alt: "Dynamic Theme Switcher",
          github: "https://github.com/JasonWandrag/dynamic-theme-switcher",
          live: "https://dynamic-theme-switcher.netlify.app/",
        },
        {
          id: 3,
          modalActive: false,
          title: "Basic Platformer",
          desc: "My first 2D sidescroller game made with the Godot Engine",
          stack: "Godot Engine/GDScript",
          img: "./images/2D_Platformer.png",
          img_alt: "Basic Platformer Game",
          github: "https://github.com/JasonWandrag/basic-platformer",
          live: "https://chryptolite.itch.io/basic-platformer",
        },
        {
          id: 4,
          modalActive: false,
          title: "Full page timeline",
          desc: "Mobile responsive fullpage timeline",
          stack: "HTML/CSS",
          img: "./images/Fullpage_timeline.png",
          img_alt: "Fullpage Timeline",
          github: "https://github.com/JasonWandrag/fullpage-experience-resume",
          live: "https://fullpage-timeline.netlify.app/",
        },
        {
          id: 5,
          modalActive: false,
          title: "Bootstrap Point Of Sale",
          desc: "Simple POS using localStorage as the storage method",
          stack: "HTML/CSS/JS",
          img: "./images/Point_of_sale.JPG",
          img_alt: "Point Of Sale",
          github: "https://github.com/JasonWandrag/product-crud",
          live: "https://jason-wandrag-pos.netlify.app/",
        },
        {
          id: 6,
          modalActive: false,
          title: "Trivia Game",
          desc: "Trivia game created with the trivia API",
          stack: "HTML/CSS/JS",
          img: "./images/Trivia.JPG",
          img_alt: "Point Of Sale",
          github: "https://github.com/JasonWandrag/trivia",
          live: "https://jason-trivia-game.netlify.app/",
        },
        {
          id: 7,
          modalActive: false,
          title: "Rider Waite Digital Tarot",
          desc: "Digital Tarot generator with multiple spreads",
          stack: "HTML/CSS/JS",
          img: "./images/Digital_Tarot.JPG",
          img_alt: "Point Of Sale",
          github: "https://github.com/JasonWandrag/digital-tarot",
          live: "https://jason-digital-tarot.netlify.app/",
        },
      ],
    };
  },
  methods: {
    toggleNav() {
      this.navbar.active = !this.navbar.active;
    },
    toggleReferenceModal(id) {
      this.career[id].modalActive = !this.career[id].modalActive;
    },
    changeSlide(direction) {
      let activeProject = this.projects.find((project) => {
        return project.modalActive;
      }).id;

      this.projects.forEach((project) => (project.modalActive = false));

      if (activeProject + direction > this.projects.length - 1) {
        this.projects[0].modalActive = true;
      } else if (activeProject + direction < 0) {
        this.projects[this.projects.length - 1].modalActive = true;
      } else {
        this.projects[activeProject + direction].modalActive = true;
      }
    },
    bulletSlider(index) {
      this.projects.forEach((project) => (project.modalActive = false));
      this.projects[index].modalActive = true;
    },
  },
});

app.mount("#app");
