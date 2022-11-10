import React from "react";
import "../styles/Me.css";
import timeline from "../data/timeline";

function Me() {
  console.log(timeline);
  return (
    <div className="me">
      <div className="about-me">
        <div className="about">About Me</div>

        <div className="information">
          <img src="/images/snap2-re.png" alt="" />
          <div className="">
            Hi there my Name is Akash, I am an Engineering undergraduate from
            Institute of Engineering & Technoloy, Lucknow specialized in
            Information Technology with an avergae CGPA of 8.5 (GPA - 3.5).
            Along with my degree I have good hands upon frontend development and
            Data Structures and Algorithms. My goal is to built a successful
            career as a Software Developer/Software Engineer apart from that I
            love to do gardening and cooking
          </div>
        </div>
      </div>
      <div className="work">Work Experience</div>
      <div className="work-flex">
      <div className="work-1">
      <div className="company">Tiket.com</div>
      <div className="role">SDE Intern (Frontend) <span>Nov 2022 - Continue </span></div>
      <ul className="work-ul">
        <li>Working in co-ordination with the <span style={{ color: "green", fontWeight: "700" }}>Payments, Refund & Order</span></li>
        <li>Wrote quality code for migration of website from <span style={{ color: "green", fontWeight: "700" }}>ReactJs</span> to <span style={{ color: "green", fontWeight: "700" }}>NextJs</span>.</li>
        <li>Created as well as documented various features such as <span style={{ color: "green", fontWeight: "700" }}>payment timeout</span> and <span style={{ color: "green", fontWeight: "700" }}>filter</span> </li>
        <li className="tech">Tech Stack - NextJs, Typescript, Javascript, Scss</li>
      </ul>
      <div className="company">Tiket.com</div>
      <div className="role">SDE Intern (Frontend) <span>Sep 2022 - Nov 2022</span></div>
      <ul className="work-ul">
        <li>Worked with the <span style={{ color: "green", fontWeight: "700" }}>Hotel and Restaurent</span></li>
        <li>Implemented filter functionality to <span style={{ color: "green", fontWeight: "700" }}>search</span> hotels on basis of preference and wrote tests for the same.</li>
        <li>Implemented <span style={{ color: "green", fontWeight: "700" }}>Lazy loading</span> and done <span style={{ color: "green", fontWeight: "700" }}>code splitting</span> to reduce the load on the website </li>
        <li  className="tech">Tech Stack - ReactJs, Javascript, Scss, Css</li>
      </ul>
      
      </div>
      <div className="work-2">
        <img src="/images/snap1-removebg.png" alt="" />
      </div>
      </div>
      
            <div className="achivements">Few Achivements</div>
      <ul className="achivements-ul">
        <li>Smart India Hackathon Finalist</li>
        <li>
          {" "}
          Solved more than 570 questions on{" "}
          <a href="https://leetcode.com/belikeakash/">Leetcode</a> , and 125+
          questions on{" "}
          <a href="https://auth.geeksforgeeks.org/user/sirohiakash396/practice//">
            GeeksForGeeks
          </a>{" "}
        </li>
        <li>
          {" "}
          Max rating{" "}
          <span style={{ color: "green", fontWeight: "700" }}>1646</span> at
          Leetcode
        </li>
        <li>
          {" "}
          Ranked <span style={{ color: "green", fontWeight: "700" }}>
            252
          </span>{" "}
          in Codechef starters 61 among{" "}
          <span style={{ color: "green", fontWeight: "700" }}>19000+</span>{" "}
          candidates
        </li>
        <li>
          {" "}
          Ranked <span style={{ color: "green", fontWeight: "700" }}>
            1883
          </span>{" "}
          in Leetcode Weekly contest 311 among{" "}
          <span style={{ color: "green", fontWeight: "700" }}>28000+</span>{" "}
          candidates.
        </li>
        <li>
          {" "}
          Ranked <span style={{ color: "green", fontWeight: "700" }}>
            208
          </span>{" "}
          in Job-a-thon by GFG among{" "}
          <span style={{ color: "green", fontWeight: "700" }}>4000+</span>{" "}
          candidates
        </li>
        <li>
          Have one of the biggest Github repository containing solutions of{" "}
          <span style={{ color: "green", fontWeight: "700" }}>600+</span> DSA
          questions <a href="https://github.com/belikeakash/Leetcode/">Link</a>{" "}
        </li>
      </ul>

      <div className="achivements">Gallery</div>
      <div className="me_timeline">
        {timeline.map((x) => {
          return (
            <div className="me1">
              <img src={x.url} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Me;
