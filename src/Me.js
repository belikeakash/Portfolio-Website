import React from "react";
import "./Me.css";

function Me() {
  return (
    <div className="me">
      <div className="me_header">
        <div className="me_header1">
          <h1>Wow I whole page just for me</h1>
          <div className="me_header3">Me talking about Myself</div>
          <div className="me_header4">
            My name is Akash Sirohi and most of my friends call me{" "}
            <span>AKASHVANI</span> . I'm a Frontend Developer and currently
            persuing my Batchelor degree in Computer Science major. I'm a person
            who has high passion in programming and developing web apps.
          </div>
        </div>
        <div className="me_header2">
          <img className="me_img" src="./images/akash.jpeg" alt="idk" />
        </div>
      </div>
    </div>
  );
}

export default Me;
