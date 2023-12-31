import { FaNodeJs } from "react-icons/fa";
import HomePage from "./HomePage";
// import { ref, get } from "firebase/database"
// import { database } from "@/firebase"

// async function getData() {

//   // return await (await get(ref(database))).val()

//   const DB_URL = process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL + '/.json'
//   const res = await fetch(DB_URL, { cache: 'no-store' })
//   const data = res.json()
//   return data
// }

export default function page() {
  // const data = await getData()
  const data = {
    main: {
      name: "Vasu Bhut",
      shortDesc:
        "Welcome to my digital hub! With expertise in software development, I specialize in crafting professional, tailored solutions to bring your digital ideas to life.",
      titles: [
        "Frontend Development",
        "Backend Development",
        "DevOps Development",
        "Playing Badminton",
      ],
      heroImage:
        "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg",
      techStackImages: [
        "https://img.icons8.com/color/144/000000/material-ui.png",
        "https://img.icons8.com/color/144/000000/html-5--v1.png",
        "https://img.icons8.com/color/144/000000/redux.png",
        "https://img.icons8.com/color/144/000000/chakra-ui.png",
      ],
    },
    about: {
      aboutImage:"",
      aboutImageCaption: "< I build stuff 🚀/>",
      title: "Full Stack Developer",
      about:
        "Hey, I'm Vasu Bhut, a Ahmedabad-based Full-Stack developer and IT student at L.D. College. My Software development journey started early in college, driven by a passion for creating both functional and visually appealing sites. I love taking on full-stack projects and side ventures, always pushing my boundaries. Beyond coding, you'll catch me on the badminton court, finding balance between the precision of code and the swift moves of the game. It's not just a hobby; it's my way of keeping life dynamic and engaging.",
      callUrl: "",
      resumeUrl: "",
    },
    socials: [
      {
        icon: "FaLinkedin",
        link: "https://www.linkedin.com/in/vasu-bhut-5b726a212",
      },
      {
        icon: "FaGithub",
        link: "https://github.com/bhut-vasu",
      },
      {
        icon: "FaInstagram",
        link: "https://www.instagram.com/vasubhut",
      },
      {
        icon: "FaTwitter",
        link: "https://x.com/vasubhut",
      },
    ],
    skills: [
      {
        name: "JavaScript",
        image: "https://img.icons8.com/color/144/null/javascript--v1.png",
        category: "Frontend",
      },
      {
        name: "Next Js",
        image: "https://img.icons8.com/?size=256&id=MWiBjkuHeMVq&format=png",
        category: "Frontend",
      },
      {
        name: "React Js",
        image: "https://img.icons8.com/?size=80&id=wPohyHO_qO1a&format=png",
        category: "Frontend",
      },
      {
        name: "Redux",
        image: "https://img.icons8.com/?size=48&id=jD-fJzVguBmw&format=png",
        category: "Frontend",
      },
      {
        name: "TypeScript",
        image: "https://img.icons8.com/?size=48&id=uJM6fQYqDaZK&format=png",
        category: "Frontend",
      },
      {
        name: "Tailwind",
        image: "https://img.icons8.com/?size=256&id=4PiNHtUJVbLs&format=png",
        category: "Frontend",
      },
      {
        name: "Material UI",
        image: "https://v4.mui.com/static/logo_raw.svg",
        category: "Frontend",
      },
      {
        name: "HTML 5",
        image: "https://img.icons8.com/?size=256&id=20909&format=png",
        category: "Frontend",
      },
      {
        name: "CSS 3",
        image: "https://img.icons8.com/?size=48&id=21278&format=png",
        category: "Frontend",
      },
      {
        name: "Bootstrap",
        image: "https://img.icons8.com/?size=48&id=84710&format=png",
        category: "Frontend",
      },
      {
        name: "Node Js",
        image: "https://img.icons8.com/?size=256&id=hsPbhkOH4FMe&format=png",
        category: "Backend",
      },
      {
        name: "Express Js",
        image: "https://img.icons8.com/?size=48&id=PZQVBAxaueDJ&format=png",
        category: "Backend",
      },
      {
        name: "DB Design",
        image: "https://img.icons8.com/?size=80&id=121179&format=png",
        category: "Backend",
      },
      {
        name: "Mongo Db",
        image: "https://img.icons8.com/?size=48&id=74402&format=png",
        category: "Backend",
      },
      {
        name: "AWS",
        image: "https://img.icons8.com/?size=48&id=33039&format=png",
        category: "Backend",
      },
      {
        name: "Googling",
        image: "https://img.icons8.com/?size=256&id=17949&format=png",
        category: "Tools",
      },
      {
        name: "C++",
        image:
          "https://e7.pngegg.com/pngimages/46/626/png-clipart-c-logo-the-c-programming-language-computer-icons-computer-programming-source-code-programming-miscellaneous-template.png",
        category: "Tools",
      },
      {
        name: "Java",
        image: "https://img.icons8.com/?size=48&id=13679&format=png",
        category: "Tools",
      },
      {
        name: "Git",
        image: "https://img.icons8.com/?size=256&id=20906&format=png",
        category: "Tools",
      },
      {
        name: "GitHub",
        image: "https://img.icons8.com/?size=50&id=12599&format=png",
        category: "Tools",
      },
      {
        name: "Godaddy",
        image:
          "https://expandedramblings.com/wp-content/uploads/2015/04/godaddy-statistics-user-count-facts-300x268.png?ezimgfmt=rs:300x268/rscb1/ngcb1/notWebP",
        category: "Tools",
      },
      {
        name: "Digital Ocean",
        image:
          "https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/89_Digital_Ocean-512.png",
        category: "Tools",
      },
    ],
    projects: [
      // Basic
      {
        name: "The Rich Mindset",
        techstack: "HTML5, CSS3, JavaScript, Bootstrap",
        category: "Basic Web",
        image:
          "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210114225740/10-Best-Web-Development-Project-Ideas-For-Beginners-in-2021.png",
        links: {
          code: "",
          video: "",
          visit: "",
        },
      },
      {
        name: "Snake Game",
        techstack: "HTML5, CSS3, JavaScript",
        category: "Basic Web",
        image:
          "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210114225740/10-Best-Web-Development-Project-Ideas-For-Beginners-in-2021.png",
        links: {
          code: "",
          video: "",
          visit: "",
        },
      },
      {
        name: "Wion News",
        techstack: "HTML5, CSS3, JavaScript",
        category: "Basic Web",
        image:
          "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210114225740/10-Best-Web-Development-Project-Ideas-For-Beginners-in-2021.png",
        links: {
          code: "",
          video: "",
          visit: "",
        },
      },
      {
        name: "Texty",
        techstack: "HTML5, CSS3, JavaScript",
        category: "Basic Web",
        image:
          "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210114225740/10-Best-Web-Development-Project-Ideas-For-Beginners-in-2021.png",
        links: {
          code: "",
          video: "",
          visit: "",
        },
      },

      // Mern Stack
      {
        name: "ArcFit",
        techstack: "Flutter, Dart, Firebase",
        category: "MERN Stack",
        image:
          "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210114225740/10-Best-Web-Development-Project-Ideas-For-Beginners-in-2021.png",
        links: {
          code: "",
          video: "",
          visit: "",
        },
      },
      {
        name: "E-Commerce",
        techstack: "PHP, MySQL, HTML5, CSS3, Bootstrap, JavaScript",
        category: "MERN Stack",
        image:
          "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210114225740/10-Best-Web-Development-Project-Ideas-For-Beginners-in-2021.png",
        links: {
          code: "",
          video: "",
          visit: "",
        },
      },
      {
        name: "Instagram",
        techstack: "PHP, MySQL, HTML5, CSS3, Bootstrap, JavaScript",
        category: "MERN Stack",
        image:
          "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210114225740/10-Best-Web-Development-Project-Ideas-For-Beginners-in-2021.png",
        links: {
          code: "",
          video: "",
          visit: "",
        },
      },
      {
        name: "Spotify",
        techstack: "PHP, MySQL, HTML5, CSS3, Bootstrap, JavaScript",
        category: "MERN Stack",
        image:
          "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210114225740/10-Best-Web-Development-Project-Ideas-For-Beginners-in-2021.png",
        links: {
          code: "",
          video: "",
          visit: "",
        },
      },

      // All
      {
        name: "E-Commerce",
        techstack: "PHP, MySQL, HTML5, CSS3, Bootstrap, JavaScript",
        category: "All Projects",
        image:
          "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210114225740/10-Best-Web-Development-Project-Ideas-For-Beginners-in-2021.png",
        links: {
          code: "",
          video: "",
          visit: "",
        },
      },
      {
        name: "E-Commerce",
        techstack: "PHP, MySQL, HTML5, CSS3, Bootstrap, JavaScript",
        category: "All Projects",
        image:
          "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210114225740/10-Best-Web-Development-Project-Ideas-For-Beginners-in-2021.png",
        links: {
          code: "",
          video: "",
          visit: "",
        },
      },
      {
        name: "E-Commerce",
        techstack: "PHP, MySQL, HTML5, CSS3, Bootstrap, JavaScript",
        category: "All Projects",
        image:
          "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210114225740/10-Best-Web-Development-Project-Ideas-For-Beginners-in-2021.png",
        links: {
          code: "",
          video: "",
          visit: "",
        },
      },
      {
        name: "E-Commerce",
        techstack: "PHP, MySQL, HTML5, CSS3, Bootstrap, JavaScript",
        category: "All Projects",
        image:
          "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210114225740/10-Best-Web-Development-Project-Ideas-For-Beginners-in-2021.png",
        links: {
          code: "",
          video: "",
          visit: "",
        },
      },
      {
        name: "E-Commerce",
        techstack: "PHP, MySQL, HTML5, CSS3, Bootstrap, JavaScript",
        category: "All Projects",
        image:
          "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210114225740/10-Best-Web-Development-Project-Ideas-For-Beginners-in-2021.png",
        links: {
          code: "",
          video: "",
          visit: "",
        },
      },
      {
        name: "E-Commerce",
        techstack: "PHP, MySQL, HTML5, CSS3, Bootstrap, JavaScript",
        category: "All Projects",
        image:
          "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210114225740/10-Best-Web-Development-Project-Ideas-For-Beginners-in-2021.png",
        links: {
          code: "",
          video: "",
          visit: "",
        },
      },
      {
        name: "E-Commerce",
        techstack: "PHP, MySQL, HTML5, CSS3, Bootstrap, JavaScript",
        category: "All Projects",
        image:
          "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210114225740/10-Best-Web-Development-Project-Ideas-For-Beginners-in-2021.png",
        links: {
          code: "",
          video: "",
          visit: "",
        },
      },
      {
        name: "E-Commerce",
        techstack: "PHP, MySQL, HTML5, CSS3, Bootstrap, JavaScript",
        category: "All Projects",
        image:
          "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210114225740/10-Best-Web-Development-Project-Ideas-For-Beginners-in-2021.png",
        links: {
          code: "",
          video: "",
          visit: "",
        },
      },
    ],
    educations: [
      {
        institute: "Saint Xaviers English School",
        degree: "SSC",
        duration: "2011 - 2018",
        Percentage: "Percentage : 87%",
      },
      {
        institute: "Sorath International School",
        degree: "HSC Sciece",
        duration: "2018 - 2020",
        Percentage: "Percentage : 78%",
        // desc: [
        //   "Pursuing IT Engineering course from ABC University",
        //   "Worked on web application development using HTML, CSS, and JavaScript, designing a database system using SQL",
        //   "Familiar with software development methodologies and project management practices, including Agile and Waterfall methodologies.",
        // ],
      },
      {
        institute: "L.D. College Of Engineering",
        degree: "Information Technology",
        duration: "2020 - 2024",
        Percentage: "CPI : 8.43/10",
        desc: [
          "Pursuing Information Technology from Gujarat Technological University(GTU)",
          "Worked on web application development using HTML, CSS, and JavaScript, designing a database system using MongoDB",
          "Familiar with software development methodologies and project management practices, including Agile and Scrum methodologies.",
        ],
      },
    ],
    experiences: [
      {
        company: "Bolt Iot",
        position: "Web Developer",
        duration: "January 2022 - March 2022",
        desc: [
          "A bangalore based company providing IoT products and services in a matter of hours.",
          "Worked on building the website 'Inventrom' from scratch and hosted on virtual server.",
          "Skills: HTML · CSS · JavaScript · DigitalOcean",
        ],
        webLink: "https://inventrom.com",
      },
      {
        company: "Techno IT Hub",
        position: "Software Developer",
        duration: "January 2022 - June 2022",
        desc: [
          "All kinds of online solutions at one stop. ",
          "Developer the frontend side of a construction-labor hiring platform named 'Contraweb'.",
          "Skills: HTML · CSS · JavaScript · Bootstrap · PhP · MySQL · REST APIs",
        ],
        webLink: "",
      },
      {
        company: "Maqure",
        position: "MERN Stack Developer",
        duration: "August 2022 - October 2022",
        desc: [
          "An online platform facilitating reverse-auctioning and procurement of various chemicals.",
          "Lead a team of 3 people to convert design to magical interfaces.",
          "Skills: HTML · CSS · JavaScript · TailwindCSS · ReactJS · NodeJS · MongoDB · REST APIs",
        ],
        webLink: "https://maqure.vasubhut.com",
      },
      {
        company: "Uberola",
        position: "Full Stack Developer",
        duration: "January 2023 - March 2023",
        desc: [
          "A car rental company provides temporary access to a fleet of vehicles for individuals and businesses.",
          "Designing, Developing, Testing of a portfolio website which can be used to book cars.",
          "Skills: HTML · CSS · JavaScript · TailwindCSS · ReactJS · NodeJS · REST APIs · SEO · MySQL",
        ],
        webLink: "https://uberola.vasubhut.com",
      },
      {
        company: "TYE Bangalore",
        position: "Team Leader",
        duration: "August 2023 - September 2023",
        desc: [
          "TiE is a non-profit, global community welcoming entrepreneurs from all over the world.",
          "Won the interstate business cohort competition by pitching a AgriRevolutionary idea.",
          "Skills: Leadership · Enterprenurship · Team Management · Communication Skills",
        ],
        webLink: "https://tye.vasubhut.com",
      },
      {
        company: "Xprime Hardwares",
        position: "Chief Technical Officer",
        duration: "October 2023 - present",
        desc: [
          "A leading Manufacturer, Supplier and Exporter of all kinds of Architectural Hardware Products based in Jamnagar.",
          "Developing a portfolio website by leading a team of 5 people",
          "Skills: HTML · CSS · JavaScript · TailwindCSS · ReactJS · NextJS · NodeJS · MongoDB · REST APIs · AWS · SEO",
        ],
        webLink: "https://xprimehardwares.com",
      },
    ],
  };

  return (
    <>
      {data && typeof data === "object" && <HomePage data={data} />}
      {!data && (
        <div className="h-screen w-screen flex flex-col items-center justify-center gap-5 text-violet-600 fixed z-30 bg-gray-100 dark:bg-grey-900">
          <FaNodeJs size={100} className="animate-pulse" />
          <p className="animate-pulse text-xl">Loading...</p>
        </div>
      )}
    </>
  );
}
