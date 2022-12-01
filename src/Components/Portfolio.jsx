/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/desk-with-various-gadgets-and-office-supplies-computer-smart-phone-and-stationery-arou-SBI-305198813.jpg"


const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Rollercoaster Encyclopedia",
    description:
      "MERN stack rollercoaster website",
    url: "https://github.com/phizbiz/rollercoaster-project",
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
      "Music review blog built with React.",
    url: "https://github.com/phizbiz/album_reviews",
  },
  {
    title: "Music Blog",
    description:
      "Frontend website built with Vue, Vue Router, and the RAWG API",
    url: "https://github.com/phizbiz/u4_lab_vue_RAWG",
  },
  
];

const Portfolio = () => {
  return (
    <section className="light" id="portfolio">
      <h2>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
