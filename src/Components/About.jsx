import React from "react";

import image from "../images/abstract-dark-blue-broken-tiles-background-SBI-300875744.jpg";

const imageAltText = "dark blue abstract background";

const description =
  "Data Analyst at SoundExchange, where I work with royalties, metadata, and rights data for major publishing clients. Previously a Royalties Coordinator at SiriusXM. My background in the music industry gives me firsthand understanding of how complex data flows through rights and licensing ecosystems — the kind of domain expertise that turns raw numbers into decisions. I also hold a software engineering certificate from General Assembly, which means I can write the pipelines, query the databases, and collaborate directly with engineering teams.";

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
      <div
        style={{
          backgroundColor: "white",
          maxWidth: "700px",
          width: "90%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
          boxSizing: "border-box",
        }}
      >
        <h2>About Me</h2>
        <p className="large" style={{ textAlign: "left", marginTop: "1.5rem" }}>{description}</p>
        <hr />
        <div style={{ display: "flex", gap: "3rem", textAlign: "left", margin: "1.5rem 0" }}>
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
        <p style={{ padding: "1rem 3rem 0", fontStyle: "italic" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
