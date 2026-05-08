import React from "react";

import image from "../images/abstract-dark-blue-broken-tiles-background-SBI-300875744.jpg";

const imageAltText = "dark blue abstract background";

const description =
  "I'm a Data Analyst at SoundExchange, where I work with royalties, metadata, and rights data for major publishing clients. Before that I was a Royalties Coordinator at SiriusXM. Years of working inside the music industry have given me a real feel for how rights and licensing data works, where it comes from, and what it means. I also completed a software engineering program at General Assembly, so I can write pipelines, query databases, and work directly with engineering teams alongside the analytical side of the job.";

const dataSkills = [
  "SQL",
  "Python (pandas, numpy)",
  "Data Visualization",
  "Excel / Google Sheets",
  "Metadata & Rights Management",
  "Data Cleaning & Transformation",
];

const engineeringSkills = [
  "JavaScript / React",
  "Node.js / Express",
  "MongoDB",
  "HTML & CSS",
  "Git / GitHub",
  "REST APIs",
];

const detailOrQuote =
  "Royalties and rights data professional with the engineering background to own the full analytical workflow.";

const About = () => {
  return (
    <section className="light" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div className="about-card">
        <h2>About Me</h2>
        <p className="large" style={{ textAlign: "left", marginTop: "1.5rem" }}>{description}</p>
        <hr />
        <div className="skills-grid">
          <div style={{ flex: 1 }}>
            <h3 style={{ marginBottom: "0.75rem", color: "#4E567E", fontSize: "1rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>
              Data &amp; Analytics
            </h3>
            <ul style={{ fontSize: "1rem", lineHeight: "1.9", paddingLeft: "1.2rem", margin: 0 }}>
              {dataSkills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{ marginBottom: "0.75rem", color: "#4E567E", fontSize: "1rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>
              Engineering &amp; Tools
            </h3>
            <ul style={{ fontSize: "1rem", lineHeight: "1.9", paddingLeft: "1.2rem", margin: 0 }}>
              {engineeringSkills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
        <hr />
        <p className="about-tagline">{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
