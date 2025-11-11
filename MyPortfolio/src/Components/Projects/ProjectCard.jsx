import React from 'react'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react';
import { userData } from '../../Constent/user.data';
import CodeIcon from "@mui/icons-material/Code";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import LanguageIcon from "@mui/icons-material/Language";
import "./card.css"

const ProjectCard = ({projects}) => {
  const [isTouchScreen, setIsTouchScreen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [filterWork, setFilterWork] = useState([]);
  const [works, setWorks] = useState([]);

  useEffect(() => {
    const projectData = projects || userData.projectsData.projects || [];
    setWorks(projectData);
    setFilterWork(projectData);

    // Check if device supports touch
    const hasTouchSupport = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchScreen(hasTouchSupport);

  }, [projects]);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.techStack.includes(item)));
      }
    }, 500);
  };

  return (
    <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className={`app__work-portfolio ${isTouchScreen ? "onMobile" : ""}`}
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img">
              <img src={work.image} alt={work.name} />

              <motion.div
                whileHover={!isTouchScreen ? { opacity: [0, 1] } : { opacity: [ 1, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a href={work.website} target="_blank" rel="noreferrer">
                  <motion.div
                    whileHover={{ scale: 0.8 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut",
                    }}
                    className="app__flex"
                    style={{ cursor: 'pointer' }}
                  >
                    <AiFillEye style={{ color: 'white', fontSize: '24px' }} />
                  </motion.div>
                </a>
                <a href={work.github} target="_blank" rel="noreferrer">
                  <motion.div
                    whileHover={{ scale: 0.8 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut",
                    }}
                    className="app__flex"
                    style={{ cursor: 'pointer' }}
                  >
                    <AiFillGithub style={{ color: 'white', fontSize: '24px' }} />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.name}</h4>
              <p className="project-description" style={{ marginTop: 10 }}>
                {work.description}
              </p>
              
              {/* Tech Stack Section */}
              <div className="tech-stack-container">
                <h5 className="tech-stack-title">Tech Stack:</h5>
                <div className="tech-stack-box">
                  {work.techStack.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-item">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
  )
}

export default ProjectCard;