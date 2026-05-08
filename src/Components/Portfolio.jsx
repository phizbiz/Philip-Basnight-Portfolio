import React from "react";

const projectList = [
  {
    title: "Music Rights Data Pipeline",
    category: "Data Analysis",
    description:
      "Production Oracle PL/SQL package automating the matching of publisher catalogs against a central rights licensing database (~168M recordings, ~33M works). Classifies share registration gaps — missing, underrepresented, and overclaimed — across multiple rights partner sources. Scheduled monthly via DBMS_SCHEDULER.",
    tools: "Oracle PL/SQL · Dynamic SQL · CTEs · DBMS_SCHEDULER · DBMS_STATS",
    git: "https://github.com/phizbiz/music-rights-pipeline",
  },
  {
    title: "Music Streaming Royalty QA Pipeline",
    category: "Data Analysis",
    description:
      "SQL QA and reconciliation pipeline for a music streaming royalty distribution system. Validates statement totals against line-item sums using correlated subqueries, flags publisher- and work-level discrepancies, compares quarter-over-quarter amounts via CTE self-joins, and produces per-play-rate pool summaries with pro-rata licensor share calculations and multi-territory currency conversion.",
    tools: "Oracle SQL · CTEs · Correlated Subqueries · Window Functions · Multi-schema Joins · Currency Conversion",
    git: "https://github.com/phizbiz/music-royalty-qa-pipeline",
  },
  {
    title: "U.S. Bank Financial Health Analysis",
    category: "Data Analysis",
    description:
      "Python and SQL analysis of FDIC call report data across ~4,500 U.S. commercial banks (2019–2023). Covers tier-based performance benchmarking, NIM response to Fed rate hikes, state-level ROA rankings, stress signal detection, and within-tier ranking via SQL window functions.",
    tools: "Python · pandas · SQLite · SQL · matplotlib · seaborn · FDIC Public API",
    git: "https://github.com/phizbiz/bank-financial-analysis",
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
    title: "Album Review Blog",
    category: "Full Stack",
    description:
      "Full-stack music review platform with JWT authentication, dedicated album detail pages, and a 0.0–10.0 rating system. Reviews are tied to albums and gated behind login. Features a dark UI with a blurred hero, color-coded scores, and a real-time average rating display.",
    tools: "MongoDB · Express · React · Node.js · JWT · bcrypt",
    url: "https://music-blog-ztkx.onrender.com",
    git: "https://github.com/phizbiz/album_reviews",
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
