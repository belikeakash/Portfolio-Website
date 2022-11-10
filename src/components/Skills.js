import React from "react";
import "../styles/Skills.css";
import { SiReact, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { CgCPlusPlus } from "react-icons/cg";
import { IoLogoJavascript } from "react-icons/io";
import { FaNodeJs } from "react-icons/fa";

function Skills() {
  const classonHover = {};
  return (
    <>
      <h2 className="skills-text">Skills</h2>
      <div className="skills_icons">
        <div className="icon" >
          <SiReact style={{color:'#61dbfb'}} />
        </div>
        <div className="icon" style={{color:'#7b809a'}}>
          <TbBrandNextjs />
        </div>
        <div className="icon" style={{color:'#5E97D0'}}>
          <CgCPlusPlus />
        </div>
        <div className="icon" style={{color:'#F0DB4F'}}>
          <IoLogoJavascript />
        </div>
        <div className="icon" style={{color:'#007acc'}}>
          <SiTypescript />
        </div>
        <div className="icon" style={{color:'#68A063'}}>
          <FaNodeJs />
        </div>
        
      </div>
    </>
  );
}
export default Skills;
