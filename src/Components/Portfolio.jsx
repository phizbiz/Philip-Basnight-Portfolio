import React from "react";

const projectList = [
  {
    title: "Music Rights Data Pipeline",
    category: "Data Analysis",
    description:
      "Production Oracle PL/SQL package automating the matching of publisher catalogs against the MLC unclaimed mechanical royalty dataset (~168M recordings, ~33M works). Classifies share registration gaps — missing, underrepresented, and overclaimed — across multiple collection society sources. Scheduled monthly via DBMS_SCHEDULER.",
    tools: "Oracle PL/SQL · Dynamic SQL · CTEs · DBMS_SCHEDULER · DBMS_STATS",
    git: "https://github.com/phizbiz/music-rights-pipeline",
  },
  {
    title: "U.S. Bank Financial Health Analysis",
    category: "Data Analysis",
    description:
      "SQL analysis of FDIC call report data across thousands of U.S. commercial banks. Identifies financial indicators — capital ratios, net interest margins, loan performance — that distinguish high-performing institutions by size tier.",
    tools: "SQL · Python · pandas · FDIC Public Dataset",
    git: "https://github.com/phizbiz/bank-financial-analysis",
    status: "In Development",
  },
  {
    title: "Music Catalog & Rights Database",
    category: "Full Stack",
    description:
      "Full-stack catalog application modeling structured music data: works, artists, composers, and curated film pairings. Demonstrates relational data modeling, REST API design, and CRUD operations on a rights-adjacent dataset.",
    tools: "MongoDB · Express · React · Node.js",
    url: "https://royal-music-library.onrender.com/",
    git: "https://github.com/phizbiz/Capstone-Project",
  },
  {
    title: "Chord Progression Generator",
    category: "Full Stack",
    description:
      "React application for generating, playing back, and exporting MIDI chord progressions using a custom music theory engine and Web Audio synthesis.",
    tools: "React · Tone.js · MIDI · Vercel",
    url: "https://new-chord-generator.vercel.app/",
    git: "https://github.com/phizbiz/new-chord-generator",
  },
];

const Portfolio = () => {
  return (
    <section className="light" id="portfolio">
      <h2>Portfolio</h2>
      <div className="container">
        {projectList.map((project) => (
          <div className="box" key={project.title}>
            <span className={`category-badge ${project.category === "Data Analysis" ? "badge-data" : "badge-eng"}`}>
              {project.category}
            </span>
            <h3 style={{ marginBottom: "0.6rem" }}>{project.title}</h3>
            <p className="small project-desc">{project.description}</p>
            {project.tools && <p className="tools-line">{project.tools}</p>}
            <div className="project-links">
              {project.status ? (
                <span className="in-dev">{project.status}</span>
              ) : (
                <>
                  {project.url && (
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      View Site
                    </a>
                  )}
                  {project.git && (
                    <a href={project.git} target="_blank" rel="noopener noreferrer">
                      View GitHub
                    </a>
                  )}
                </>
              )}
              {project.status && project.git && (
                <a href={project.git} target="_blank" rel="noopener noreferrer">
                  View GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
