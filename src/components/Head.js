import React from "react";
import "../styles/Head.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

function Head() {
  return (
    <div className="App">
      <div className="headerd" style={{}}>
        <div className="header_name">
          <div className="header_name_h1">
            Hi, <span>I'm Akash</span>
          </div>
          <div className="header_name_info">
            Bring your idea to life with my help{" "}
          </div>
          <div className="header-more-info">
            Multidisciplinary developer who makes and occasionally breaks
            things.
          </div>
          <div className="header_icons">
            <div className="header_icons_icon">
              <a href="https://www.linkedin.com/in/akash-sirohi-676b30202/"><AiFillLinkedin style={{ color: "#0e76a8", transition: 'all 1 s' }} /></a>
              <a href="https://github.com/belikeakash"><AiFillGithub style={{ color: "#333", transition: 'all 1 s' }} /></a>
              {/* <button className="header_icons_button">Achivements</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Head;
