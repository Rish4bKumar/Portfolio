import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { userData } from '../../Constent/user.data'
import "./Home.css"
import EmailIcon from "@mui/icons-material/Email"
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import hackerEffect from '../../Constent/HackerEffect'

export const Home = () => {
  const letters = userData.role.split("");
  const name = useRef(null);
  const heading = useRef(null);
  const para1 = useRef(null);
  const para2 = useRef(null);
  const para3 = useRef(null);

  useEffect(() => {
    hackerEffect({ target: name?.current });
    hackerEffect({ target: heading?.current });
    hackerEffect({ target: para1?.current });
    hackerEffect({ target: para2?.current });
    hackerEffect({ target: para3?.current });
  }, []);

  return (
    <div className="home" id="home">
      <div className="grid-mask"></div>
      
      {/* Header Section */}
      <div className="header-section">
        <motion.div
          className="header-info"
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="header-greeting"style={{ marginLeft: -270,marginTop:250 }}>
            <span>👋</span>
            <div style={{ marginLeft: 1 }}>
              <p className="p-text" ref={heading} data-text="Hello, I am">
                Hello, I am
              </p>
              <h1
                className="head-text leading-none"
                ref={name}
                data-text="Rishab"
              >
                Rishab
              </h1>
            </div>
          </div>

          <div className="header-roles"style={{ marginLeft: -200, marginTop: 40 }}>
            <p ref={para1} className="p-text" data-text="Designer/UI-UX">
              Designer / UI-UX
            </p>
            <p ref={para2} className="p-text" data-text="Web Developer">
              Web Developer
            </p>
            <p ref={para3} className="p-text" data-text="FreeLancer">
              FreeLancer
            </p>
          </div>
        </motion.div>
      </div>

      {/* Main Home Content */}
      <div className="home-content">
        <div className="home-content-text">
          <div className="location">
            {/* <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 5, ease: "easeOut" }}
            >
              Based In {userData.location.toUpperCase()}
            </motion.p> */}
          </div>
          <div className="title">
          <h1>
        <motion.div
          whileInView={{ height: ["100%", "0%"] }}
          transition={{
            duration: 0.6,
            ease: "easeIn",
            delay: 0.5,
          }}
          className="absolute bottom-0 left-0 z-10 h-full w-full bg-[#edf2f8]"
          viewport={{ once: true, amount: "all" }}
        ></motion.div>

        {/* WEB DEVELOPER text moved to Header component */}
        <div className="overflowHider">WEB<span className="text-primary"> DEVELOPER</span></div>
      </h1>
          </div>
          {/* <div className="sub-title">
            <p>{userData.role_desc}</p>
          </div> */}
        </div>
        <div className="home-content-buttons">
          <a 
            href="#projects" 
            className="primary-button"
          >
            See My Projects 
            <ChevronRightIcon className="btn-icon" />
          </a>
          <a
            className="secondary-button"
            href={`${import.meta.env.BASE_URL}RishabKumarResume.pdf`}
            target="_blank"
            aria-label="Resume"
            rel="noopener noreferrer"
          >
            Download Resume <FileDownloadIcon className="btn-icon" />
          </a>
        </div>
        <div className="home-content-links">
          <motion.a
            className="gmail"
            href="mailto:yadavrishab0234@gmail.com"
            aria-label="Email"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 150 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <EmailIcon className="gmail-icon social-icon" />
          </motion.a>
          <motion.a
            className="github"
            href="https://github.com/Rish4b"
            aria-label="github profile"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 150 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <GitHubIcon className="github-icon social-icon" />
          </motion.a>
          <motion.a
            className="linkedin"
            href="https://www.linkedin.com/in/rish4b/"
            aria-label="github profile"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 150 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <LinkedInIcon className="linkedin-icon social-icon" />
          </motion.a>
        </div>
      </div>
    </div>
  )
}
export default Home;