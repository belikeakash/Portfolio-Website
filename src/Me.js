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
            persuing my Bachelor degree in Information Technology major. Currently I'm working for Tiket International Private Limited 
          </div>
          <div className="me_header4">
          ACHIEVEMENTS
            <ul>
              <li>Smart India Hackathon 2022 Finalist.</li>
              <li>Solved more than 450+ questions on <a href="https://leetcode.com/belikeakash/">Leetcode</a> , and 125+ questions on <a href="https://auth.geeksforgeeks.org/user/sirohiakash396/practice/">GeeksForGeeks</a> .</li>
              <li>Max rating 1623 at Leetcode.</li>
              <li>Have one of the biggest Github repository containing solutions of 600+ DSA questions <a href="https://github.com/belikeakash/Leetcode/">Link</a> </li>
            </ul>
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
