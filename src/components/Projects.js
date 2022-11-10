import React, { useEffect, useState } from "react";
import "../styles/Project.css";
import data from "../data/projectData";

function Project() {
  // console.log(data);
  const [showData, setShowData] = useState(data);
  function contains(techStack, x) {
    for (let i = 0; i < techStack.length; i++) {
      if (techStack[i].category == x.category) return 1;
    }
    return 0;
  }
  let techStack = [{
    category: 'All'
  }];
  for (let i = 0; i < data.length; i++) {
    if (!contains(techStack, data[i])) {
      techStack.push(data[i]);
    }
  }

  function divideProjects(e) {
    console.log(e.target.innerHTML);
    const category = e.target.innerHTML;
    if(category==='All') {
      setShowData(data);
    }
    else {
      let project = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].category === category) {
        project.push(data[i]);
      }
    }
    setShowData(project);
    }
    
  }

  useEffect(() => {
    console.log("useEfferct Clicked");
  }, [showData]);

  return (
    <div className="project">
      <div className="project-tech">
        <h2 className="project-tech-head">Projects</h2>
        <div className="tech-head">
          {techStack.map((x) => {
            return (
              <>
                <div onClick={divideProjects} className="tech-values">
                  {x.category}
                </div>
              </>
            );
          })}
        </div>
        <div className="projects-info">
        {showData.map((x) => {
          return (
            <>
              <div className="project-card">
                    <img src={x.img} alt="" />
                    
                    <div className="project-card-title">
                    <h4>{x.title}</h4>
                    <p className="link-project"><a href={x.url}>Link</a></p>
                    </div>
                    {/* <div className="line"></div> */}
                    <p className="desc">{x.desc}</p>
              </div>
            </>
          );
        })}
        </div>
        
      </div>
    </div>
  );
}

export default Project;
