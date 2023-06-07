import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";
import linkedInIcon from "../images/socials/linkedin.svg";
import envelopeIcon from "../images/socials/envelope.svg";
import gitHubIcon from "../images/socials/github.svg";


import image from "../images/PhilipBasnightCrop.png";

const imageAltText = "Philip Basnight";

const Home = ({ name, title }, props) => {
  const {
    linkedIn,
    email,
    gitHub,
  } = props;

  return (
    <section id="home" className="dark">
      <img className="background" src={image} alt="" />
      <div style={{ position: "absolute", top: "30%", left: "2rem" }}>
        <h1>{name}</h1>
        <h2>{title}
        <br></br>
        <div>
        <a href={`https://github.com/phizbiz`} target="_blank" rel="noopener noreferrer" className="homeSocials">
            <img src={gitHubIcon} alt="GitHub" className="socialIcon" />
          </a>
          <a
            href={`https://www.linkedin.com/in/philip-basnight`}
            target="_blank"
            rel="noopener noreferrer"
            className="homeSocials"
          >
            <img src={linkedInIcon} alt="LinkedIn" className="socialIcon" />
          </a>
          <a href={`mailto:philipbasnight@gmail.com`} className="homeSocials">
            <img src={envelopeIcon} alt="email" className="socialIcon"/>
          </a>
          </div>
          </h2>
        
      </div>
      <div></div>
      
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",

};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  linkedIn: PropTypes.string,
  email: PropTypes.string,
  gitHub: PropTypes.string,
};

export default Home;
