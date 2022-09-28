import React from "react";
import sample from "./videos/bird.mp4";
import "./Head.css";

function Head() {
  return (
    <div className="App">
      <div className="header">
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
          
        </div>
        
        
        <video className="videoTag" autoPlay loop muted>
          <source src={sample} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default Head;
