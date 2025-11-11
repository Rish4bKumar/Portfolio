import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import React, { useRef, useState, } from 'react'
import "./Navbar.css"

const Navbar = () => {
    const [isHidden, setIsHidden] = useState(false);
    const { scrollY } = useScroll(0);
    const lastRef = useRef(0);

    useMotionValueEvent(scrollY, "change", (y) => {
        const difference = y - lastRef.current;
        if (Math.abs(difference) > 50) {
          setIsHidden(difference > 0);
          lastRef.current = y;
        }
      });
  return (
    <div className="navbar" >
      <motion.div
        className="navbar-content shimmer"
        initial={{ y: -150 }}
        animate={isHidden ? "hidden" : "visible"}
        variants={{
          hidden: {
            y: "-100%",
          },
          visible: {
            y: "125%",
          },
        }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
      >
        <ul className="navbar-items">
          <li className="navbar-item">
            <a href="#home">
              {/* <HomeIcon className="icon" /> */}
              <p>Home</p>
            </a>
          </li>
          <li className="navbar-item">
            <a href="#skills">
              {/* <PersonIcon className="icon" /> */}
              <p>About</p>
            </a>
          </li>
          <li className="navbar-item">
            <a href="#expedu">
              {/* <BusinessCenterIcon className="icon" /> */}
              <p>Experience</p>
            </a>
          </li>
          <li className="navbar-item">
            <a href="#projects">
              {/* <LaptopMacIcon className="icon" /> */}
              <p>Projects</p>
            </a>
          </li>
          <li className="navbar-item">
            <a href="#contact">
              {/* <PermPhoneMsgIcon className="icon" /> */}
              <p>Contact</p>
            </a>
          </li>
        </ul>
      </motion.div>
    </div>
  );
}

export default Navbar