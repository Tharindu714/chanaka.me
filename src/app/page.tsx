"use client";

export default function Home() {
  const skills = [
    { name: "Java", icon: "♨️" },
    { name: "React", icon: "⚛" },
    { name: "Android", icon: "👾" },
    { name: "Next.js", icon: "🚀" },
    { name: "Node.js", icon: "🌐" },
    { name: "SQL", icon: "⛃" },
    { name: "NoSQL", icon: "📑" },
    { name: "TypeScript", icon: "⸆⸉📜" },
    { name: "JavaScript", icon: "｡🇯‌🇸‌" },
    { name: "HTML5", icon: "</>‌" },
    { name: "Tailwind", icon: "🎨" },
    { name: "Bootstrap", icon: "🅱" },
    { name: "CSS3", icon: "🖌️3" },
    { name: "Python", icon: "🐍" },
    { name: "PHP", icon: "🐘" },
    { name: "C++", icon: "💻" },
    { name: "Arduino", icon: "♾" },
  ];

  const projects = [
    {
      name: "AgroLink 🍃",
      description:
        "AgroLink is an IoT-based research project that was developed for a traditional system-driven tea factory.",
      technologies: [
        "C++",
        "Java",
        "JavaScript",
        "React",
        "CSS3",
        "Arduino",
        "NetBeans",
      ],
      image: "/images/agrolink.jpg",
      link: "https://github.com/Tharindu714/AgroLink.git",
    },
    {
      name: "E-Commerce Application",
      description:
        "This platform provides all kind of electronics & electrical equipments for local customers",
      technologies: ["HTML5", "Bootstrap", "CSS3", "JavaScript", "PHP"],
      image: "/images/chanakaelectronics.JPG",
      link: "https://chanakaelectronics.com/",
    },
    {
      name: "Tranquil Terrace",
      description:
        "Tranquil Terrace is a hotel system management desktop application which allows handling customer service in one place.",
      technologies: ["Java", "Apache NetBeans"],
      image: "/images/tter.png",
      link: "https://github.com/Tharindu714/Tranquil_terrace.git",
    },
    {
      name: "Green Garden Bungalow",
      description:
        "greengardenbungalow.com is an online platform that allows tourists to reserve bookings & get well-acquainted with the bungalow.",
      technologies: ["HTML5", "Bootstrap", "CSS3", "JavaScript", "PHP"],
      image: "/images/green.jpg",
      link: "https://www.greengardenbungalow.com/",
    },
    {
      name: "EventPulse Android App",
      description:
        "Event Pulse is a fan-centralized Android App that allows fans to track the latest movies, TV Tvseries & games.",
      technologies: ["Java", "Kotlin", "Android", "Firebase", "SQLite"],
      image: "/images/eventpulse.png",
      link: "https://github.com/Tharindu714/EventPulse-Android-Full-Project.git",
    },
    {
      name: "Travelling Agency Site",
      description:
        "bluedotstravelsandtours.com is an online platform that allows tourists to reserve bookings, aware more about the county & get a detail-wise description about the tours and hotels",
      technologies: ["HTML5", "Tailwind", "CSS3", "JavaScript", "PHP"],
      image: "/images/bluedots.jpg",
      link: "https://bluedotstravelsandtours.com/",
    },

    {
      name: "EPAdmins Android App",
      description:
        "EPAdmins is the Central Processing Unit of the Event Pulse Application that handles all the activities on the user side.",
      technologies: ["Java", "Kotlin", "Android", "Firebase", "SQLite"],
      image: "/images/epadmins.png",
      link: "https://github.com/Tharindu714/EPAdmins-Android-Full-Project.git",
    },

    {
      name: "Delta Codex Graphics",
      description:
        "deltacodexgraphics.site is a graphic designer site which shows the company portfolio and their best designs for the purpose of enhancing the potential customer base.",
      technologies: ["HTML5", "Bootstrap", "CSS3", "JavaScript", "PHP"],
      image: "/images/deltacodex.JPG",
      link: "https://deltacodexgraphics.site/",
    },

    {
      name: "CineSync Android App",
      description: "Online Movies & Tvseries Large Database for Fans",
      technologies: ["Java", "Kotlin", "Android", "Firebase", "SQLite"],
      image: "/images/cinesync.png",
      link: "https://github.com/Tharindu714/CineSync_movie-Database-Android-App.git",
    },

    {
      name: "BattleHell Weapons",
      description:
        "Weapon selling Ecommerce plaform for categorized target customer base",
      technologies: [
        "Java",
        "HTML5",
        "Bootstrap",
        "CSS3",
        "JavaScript",
        "TypeScript",
      ],
      image: "/images/battleHell.jpeg",
      link: "https://github.com/Tharindu714/Battle-Hell-Gun-Shop.git",
    },

    {
      name: "Notebook Android App",
      description: "Notebook android Application - Mini Android Project",
      technologies: ["Java", "Kotlin", "Android", "SQLite"],
      image: "/images/notebook.jpg",
      link: "https://github.com/Tharindu714/Notebook-android-app.git",
    },

    {
      name: "Futuristic Electronic Template",
      description: "Customizable Futuristic web template",
      technologies: ["HTML5", "Bootstrap", "CSS3"],
      image: "/images/etemplate.png",
      link: "https://github.com/Tharindu714/Mini_Eshop_Web-Template.git",
    },

    {
      name: "Fresh E Commerce",
      description: "Fresh is a Agriculture foods selling Platform",
      technologies: ["HTML5", "Bootstrap", "CSS3", "JavaScript", "PHP"],
      image: "/images/fresh.jpeg",
      link: "https://github.com/Tharindu714/Green-Food_store.git",
    },

    {
      name: "TeamUp TMS",
      description: "Real-Time Collaborative Task Management System",
      technologies: ["PHP", "Hack/HHVM", "CSS3", "JavaScript"],
      image: "/images/teamup.png",
      link: "https://github.com/Tharindu714/Team-up.git",
    },

    {
      name: "SmartTrade",
      description: "SmartTrade is a mobie Phone selling Platform",
      technologies: [
        "Java",
        "HTML5",
        "Bootstrap",
        "CSS3",
        "JavaScript",
        "TypeScript",
      ],
      image: "/images/smartChat.jpeg",
      link: "https://github.com/Tharindu714/SmartTrade-API-Full.git",
    },

    {
      name: "X Platform Mobile App",
      description:
        "This project is based on a fun concept - Imagine DC & Marvel Superheros are chatting with each other using some kind of messenger App; This is it",
      technologies: [
        "React",
        "JavaScript",
        "TypeScript",
        "Java",
        "ngrok",
        "HTML5",
      ],
      image: "/images/ract.jpg",
      link: "https://github.com/Tharindu714/ReactApp_FrontEnd.git",
    },

    {
      name: "Cowboy Escape",
      description:
        "This is a fun game developed for Learn JavaScript event handling",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      image: "/images/cowboy.jpg",
      link: "https://github.com/Tharindu714/JavaScript-Fun-Game.git",
    },

    {
      name: "Red Hat Boy",
      description:
        "This is a fun game developed for Learn JavaScript event handling",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      image: "/images/redhat.jpg",
      link: "https://github.com/Tharindu714/Red-Hat-Boy--JS-fun-game.git",
    },

    {
      name: "Robot Vs. Zombies",
      description:
        "This is a fun game developed for Learn JavaScript event handling",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      image: "/images/rvz.jpg",
      link: "https://github.com/Tharindu714/Robot.Vs.Zombie-Game.git",
    },

    {
      name: "Sole Proprietor Portfolio Website",
      description: "Sole Proprietor - Electronic Portfolio Website",
      technologies: ["HTML5", "CSS3", "JavaScript", "Hack/HHVM"],
      image: "/images/etemp2.jpeg",
      link: "https://github.com/Tharindu714/Electronic_Futuristic_portfolio_site.git",
    },

    {
      name: "Blog website - DCRC",
      description:
        "Blog website about future business plan for Robotics Research Center",
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP"],
      image: "/images/dcrc.png",
      link: "https://tharindu714.github.io/deltacodexrobotics/",
    },

    {
      name: "Single Person Portfolio website",
      description: "Software Developer & Graphic designer portfolio website",
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "SCSS", "Hack/HHVM"],
      image: "/images/portfolio.jpg",
      link: "https://github.com/Tharindu714/personal-portfolio-web.git",
    },

    {
      name: "Adyapanaya Student Management System",
      description:
        "Adyapanaya Student Management System is a standalone desktop application developed for managing students in educational institution.",
      technologies: ["Java", "intellJ IDE", "MySQL"],
      image: "/images/adyapanaya.png",
      link: "https://github.com/Tharindu714/Adayapanaya_STU-Mgt-System.git",
    },

    {
      name: "Calculator - AWT",
      description:
        "This calculator is developed using outdated technology for learning purpose",
      technologies: ["Java", "Netbeans IDE", "AWT"],
      image: "/images/cal.jpg",
      link: "https://github.com/Tharindu714/Mycalculator-Java-AWT.git",
    },

    {
      name: "Invoice Generating System",
      description:
        "This POS System is develop to handle billing system in electronic repair center",
      technologies: ["Java", "MySQL", "Jsper Report"],
      image: "/images/pos.jpg",
      link: "https://github.com/Tharindu714/POS-System.git",
    },

    {
      name: "E-Sewana Student Portal",
      description:
        "E-Sewana is a student Portal, Where eligible students can download & upload Assignment, Mark Attendance, Pay Lecture fees and all the academic stuff can handle student activities in this portal",
      technologies: ["PHP", "MySQL", "JavaScript", "JSON", "CSS", "Hack/HHVM"],
      image: "/images/esewana.jpg",
      link: "https://github.com/Tharindu714/E-sewana-SMS-API.git",
    },

    {
      name: "Company Portfolio WebSite",
      description:
        "This project is a business portfolio Web site, developed on the idea of enhancing target customer base",
      technologies: ["PHP", "MySQL", "JavaScript", "JSON", "CSS", "HTML5", "Hack/HHVM"],
      image: "/images/deltaC.jpeg",
      link: "https://github.com/Tharindu714/deltacodex.git",
    },
  ];
  return (
    <div>
      {/* Hero Section */}
      <section
        style={{ position: "relative", height: "500px", overflow: "hidden" }}
      >
        <video
          autoPlay
          muted
          loop
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
          }}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 0,
          }}
        ></div>
        <div
          style={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            paddingTop: "200px",
            color: "white",
          }}
        >
          <h1 style={{ fontWeight: "bold" }}>Hi, I'm Tharindu 🎯</h1>
          <span
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "#64FFDA",
            }}
          >
            A passionate full-stack developer, developing cool innovations.
          </span>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-5 position-relative"
        style={{
          backgroundColor: "rgb(1, 12, 32)",
          color: "#FFFFFF",
          paddingTop: "100px",
        }}
      >
        {/* Profile Picture */}
        <div className="text-center position-absolute top-0 start-50 translate-middle">
          <img
            src="/profile-pic.jpg" // Update with your profile picture path
            alt="Tharindu"
            className="img-fluid rounded-circle"
            style={{
              width: "150px",
              height: "150px",
              border: "4px solid #112240",
            }}
          />
        </div>
        {/* Text Content */}
        <div className="container" style={{ marginTop: "30px" }}>
          {" "}
          {/* Add marginTop */}
          <h2
            className="text-center"
            style={{
              color: "#64FFDA",
              textTransform: "uppercase",
              fontWeight: "bold",
            }}
          >
            About Me
          </h2>
          <div className="row">
            <div className="col-md-10 mx-auto">
              <p
                className="text-center"
                style={{ fontSize: "1.1rem", lineHeight: "1.8" }}
              >
                Hi, I'm Tharindu 💬 A passionate Full–Stack Software Developer.
              </p>
              <p
                className="text-center"
                style={{ fontSize: "1.1rem", lineHeight: "1.8" }}
              >
                I have over 4 years of experience in frontend development,
                including 2 years of backend development, focusing on creating
                intuitive and user-centric web applications.
              </p>
              <p
                className="text-center"
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                }}
              >
                {" "}
                I excel at developing state-of-the-art web applications.
                reusable component libraries, design systems, and robust
                backends. With expertise in Java, PHP, React Native, and C++ for
                IoT projects, I deliver secure, responsive, and scalable
                solutions. Dedicated to creating user-centric applications and
                desktop systems like POS, I ensure exceptional user experiences.
                and business success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      {/* Skills Section */}
      {/* Skills Section */}
      <section style={{ backgroundColor: "#000", padding: "3rem 0" }}>
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 15px" }}
        >
          {/* Heading */}
          <h2
            style={{
              color: "#64FFDA",
              textTransform: "uppercase",
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "2rem",
            }}
          >
            Skills & Technologies
          </h2>

          {/* Skills Container */}
          <div
            style={{
              display: "flex",
              overflowX: "auto",
              paddingBottom: "1rem",
              scrollbarWidth: "thin",
              scrollbarColor: "#64FFDA rgba(255, 255, 255, 0.1)",
            }}
            id="skills-container"
          >
            {/* Skills Cards */}
            <div style={{ display: "flex", flexWrap: "nowrap" }}>
              {skills.map((skill, index) => (
                <div
                  key={index}
                  style={{
                    flexShrink: 0,
                    width: "160px",
                    marginRight: "1rem",
                  }}
                >
                  {/* Card */}
                  <div
                    style={{
                      textAlign: "center",
                      height: "100%",
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      backdropFilter: "blur(10px)",
                      color: "#FFF",
                      borderRadius: "8px",
                      padding: "1rem",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                    }}
                  >
                    {/* Icon */}
                    <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
                      {skill.icon}
                    </div>

                    {/* Skill Name */}
                    <h5
                      style={{
                        margin: 0,
                        fontSize: "1rem",
                        fontWeight: "bold",
                      }}
                    >
                      {skill.name}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section style={{ backgroundColor: "rgb(1, 12, 32)", padding: "3rem 0" }}>
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 15px" }}
        >
          {/* Heading */}
          <h2
            style={{
              color: "#64FFDA",
              textTransform: "uppercase",
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "2rem",
              fontSize: "2rem",
            }}
          >
            Projects & Freelancer Works
          </h2>

          {/* Projects Grid */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1.5rem",
              justifyContent: "center",
            }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                style={{
                  flex: "1 1 300px",
                  maxWidth: "350px",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "8px",
                  overflow: "hidden",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 20px rgba(0, 0, 0, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Project Image */}
                <div
                  style={{
                    width: "100%",
                    height: "200px",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <img
                    src={project.image} // Path to the image
                    alt={project.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>

                {/* Project Content */}
                <div style={{ padding: "1.5rem" }}>
                  {/* Project Name */}
                  <h3
                    style={{
                      color: "#64FFDA",
                      marginBottom: "1rem",
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                    }}
                  >
                    {project.name}
                  </h3>

                  {/* Project Description */}
                  <p
                    style={{
                      color: "#FFF",
                      marginBottom: "1.5rem",
                      fontSize: "1rem",
                      lineHeight: "1.6",
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.5rem",
                      marginBottom: "1.5rem",
                    }}
                  >
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        style={{
                          backgroundColor: "rgba(100, 255, 218, 0.1)",
                          color: "#64FFDA",
                          padding: "0.25rem 0.75rem",
                          borderRadius: "4px",
                          fontSize: "0.875rem",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Project Button */}
                  <a
                    href={project.link}
                    style={{
                      display: "inline-block",
                      color: "#64FFDA", // Teal text color
                      padding: "0.5rem 1rem",
                      borderRadius: "4px",
                      textDecoration: "none",
                      fontWeight: "bold",
                      transition: "all 0.3s ease",
                      border: "2px solid #64FFDA", // Teal border
                      boxShadow: "none",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow =
                        "0 0 10px #64FFDA, 0 0 20px #64FFDA"; // Glow effect
                      e.currentTarget.style.backgroundColor =
                        "rgba(100, 255, 218, 0.1)"; // Light teal background on hover
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = "none"; // Remove glow effect
                      e.currentTarget.style.backgroundColor = "transparent"; // Reset background
                    }}
                  >
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
