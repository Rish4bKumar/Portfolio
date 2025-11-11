import React from 'react'
import { userData } from '../../Constent/user.data';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';
import "./Project.css"

const Project = () => {
  return (
    <div className="projects" id="projects">
      <div className="projects-content">
        <motion.div
          className="projects-content-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          //   viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h1 className="section-title">{userData.projectsData.title}</h1>
        </motion.div>
        <motion.div
          className="projects-content-description"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          //   viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="section-desc">{userData.projectsData.desc}</p>
        </motion.div>
        <ProjectCard projects={userData?.projectsData?.projects} />
      </div>
    </div>
  )
}

export default Project