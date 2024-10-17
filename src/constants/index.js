import {
    mobile,
    backend,
    creator,
    web,
    typescript,
    html,
    threejs,
    reactjs,
    redux,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    cat,
    planets,
    quiz,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Concept Artist and Character Designer",
      icon: web,
    },
    {
      title: "Graphic Designer",
      icon: mobile,
    },
    {
      title: "3D Modeller and Rigging Artist",
      icon: backend,
    },
    {
      title: "2D and 3D Animator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "threejs",
      icon: threejs,
    },
  ];
  
  const experiences = [
    {
      title: "Primary Education",
      company_name: "JSS Private School, Dubai",
      icon: starbucks,
      iconBg: "#383E56",
      date: "April 2012 - March 2022",
      points: [
        "Participated and won awards in sports events and competitions - Throwball, Shot Put, Long Jump, 4x100m Relay",
        "Was the topper in English",
        "Affiliated with the drama club",
        "Receieved Distinction in the International Benchmark Test and High Distinction for English in the same",
      ],
    },
    {
      title: "Higher Education",
      company_name: "GEMS Our Own English High School",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "April 2020 - March 2022",
      points: [
        "Was one of the overall toppers for the Board Examination",
        "Learnt skills in Fashion Studies and Home Science",
      ],
    },
    {
      title: "UnderGraduate Program",
      company_name: "St. Joseph's University",
      icon: shopify,
      iconBg: "#383E56",
      date: "August 2022 - currently pursuing",
      points: [
        "Participated in Art Exhibitions and events",
        "Was a part of the volnteer team for events",
        "Actively pursuing interest in Concept Art and Illustration, 3D modelling and Editing",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Very active student and participated in all the activities pertaining to AR/VR and their performance was excellent.",
      name: "Sudheendra SG ",
      designation: "Technical Director",
      company: "Sathvick Infotech",
      image: "./testimonials/sudhi.png",
    },
    {
      testimonial:
        "Always eager to learn and is efficient in their work.",
      name: "Dr. Nevil D'Souza",
      designation: "Department Co-ordinator",
      company: "St. Joseph's University",
      image: "./testimonials/nevil.png",
    },
  ];
  
  const projects = [
    {
      name: "Blender and Augmented Reality",
      description:
        "Web-based platform that allows users to use Augmented Reality to overlay a figure made on Blender onto their physical space.",
      tags: [
        {
          name: "AR",
          color: "blue-text-gradient",
        },
        {
          name: "Verge3D",
          color: "green-text-gradient",
        },
        {
          name: "Simple Web Server",
          color: "pink-text-gradient",
        },
        {
          name: "Node.js",
          color: "orange-text-gradient",
        },
        {
          name: "Mixamo",
          color: "blue-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/AnsticeBeth/Blender-AR.git",
    },
    {
      name: "Blinking Game",
      description:
        "Filter made for Instagram utilising Augmented Reality elements which enables the user to play the game by blinking their eyes.",
      tags: [
        {
          name: "AR",
          color: "blue-text-gradient",
        },
        {
          name: "Meta",
          color: "green-text-gradient",
        },
        {
          name: "Spark AR Studio",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/AnsticeBeth/Skater-Girl---Blinking-Game.git",
    },
    {
      name: "Learning the Parts of a Cycle Using AR",
      description:
        "Creating an application in order to visually view all parts of a bicycle along with the names of the parts.",
      tags: [
        {
          name: "AR",
          color: "blue-text-gradient",
        },
        {
          name: "Unity",
          color: "green-text-gradient",
        },
        {
          name: "Application",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/AnsticeBeth/Bicycle.git",
    },
    {
      name: "AR Flashcards",
      description:
        "Using Augmented Reality to allow the user to scan a flashcard and see the object on the flashcard appear in augmented form accompanied by audio.",
      tags: [
        {
          name: "AR",
          color: "blue-text-gradient",
        },
        {
          name: "Java",
          color: "green-text-gradient",
        },
        {
          name: "Sketchfab",
          color: "pink-text-gradient",
        },
      ],
      image: cat,
      source_code_link: "https://github.com/AnsticeBeth/AR_Flashcards.git",
    },
    {
      name: "Planets in AR",
      description:
        "Using Augmented Reality to allow the user to view the planets in the solar system and interact with them by their rotation in a physical space. Made for a Japanese audience (or those who know the language).",
      tags: [
        {
          name: "AR",
          color: "blue-text-gradient",
        },
        {
          name: "Unity",
          color: "green-text-gradient",
        },
        {
          name: "Application",
          color: "pink-text-gradient",
        },
      ],
      image: planets,
      source_code_link: "https://github.com/AnsticeBeth/Planet-AR-Application.git",
    },
    {
      name: "Collective Nouns Quiz",
      description:
        "Filter made for Instagram utilising Augmented Reality elements which enables the user to play the game by choosing the right answer by tilting their heads.",
      tags: [
        {
          name: "AR",
          color: "blue-text-gradient",
        },
        {
          name: "Meta",
          color: "green-text-gradient",
        },
        {
          name: "Spark AR Studio",
          color: "pink-text-gradient",
        },
      ],
      image: quiz,
      source_code_link: "https://github.com/AnsticeBeth/Planet-AR-Application.git",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };