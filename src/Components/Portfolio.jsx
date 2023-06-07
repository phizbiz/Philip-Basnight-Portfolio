import React from "react";

import image from "../images/desk-with-various-gadgets-and-office-supplies-computer-smart-phone-and-stationery-arou-SBI-305198813.jpg"


const imageAltText = "desktop with books and laptop";


const projectList = [
  {
    title: "Music Library",
    description:
      "Pairing music and video. MERN stack",
    url: "https://royal-music-library.herokuapp.com/",
    git: "https://github.com/phizbiz/Capstone-Project",
  },
  {
    title: "Chord Progression Generator",
    description:
      "React App for dynamic generation, playback, and export of MIDI chords",
    url: "https://dailychords.herokuapp.com/",
    git: "https://github.com/phizbiz/new-chord-generator",
  },
  {
    title: "Rollercoaster Encyclopedia",
    description:
      "MERN stack rollercoaster website",
    url: "https://young-cliffs-64362.herokuapp.com/",
    git: "https://github.com/phizbiz/rollercoaster-project",
  },
  {
    title: "Connect Four",
    description:
      "The classic game re-created with HTML, CSS, and Javascript",
    url: "https://github.com/phizbiz/philip-connect-four",
  },
  {
    title: "Music Blog",
    description:
      "Music review blog built with React",
    url: "https://phizfork.herokuapp.com/",
    git: "https://github.com/phizbiz/album_reviews",
  },
  {
    title: "Gradebook Calculator",
    description:
      "Frontend website built with Vue, Vue Router, and the RAWG API",
    url: "https://github.com/jadlevine/gradebook-frontend",
    git: "https://github.com/jadlevine/gradebook-backend",
  },
  
];

const Portfolio = () => {
  return (
    <section className="light" id="portfolio">
      <h2>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "1rem" }}>
        <div style={{ maxWidth: "30%", alignSelf: "center" }}>
          {/* <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          /> */}
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title} >
              <h3 style={{ paddingBottom: "0rem" }}>{project.title}</h3>
              <div className="portfolio-box">
              <p>
                <a className="portfolio-box" href={project.url}>View Site</a>
                ||  
              <a className="portfolio-box" href={project.git}>View Github</a>
              </p>
              <p className="small">{project.description}</p>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
