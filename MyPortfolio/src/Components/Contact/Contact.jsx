import React from 'react'
import emailjs from "@emailjs/browser";
import SendIcon from "@mui/icons-material/Send";
import EmailIcon from "@mui/icons-material/Email";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { motion } from 'framer-motion';
import "./Contact.css"
import { userData } from '../../Constent/user.data';
import { useState, useEffect } from "react";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [emailSent, setEmailSent] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // Initialize EmailJS
    useEffect(() => {
        const userId = import.meta.env.VITE_APP_EMAILJS_USER_ID;
        if (userId) {
            emailjs.init(userId);
        }
    }, []);

  const submitForm = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    setIsLoading(true);

    try {
      const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

      // Check if environment variables are set
      if (!serviceId || !templateId || !publicKey) {
        alert("EmailJS configuration is missing. Please check your environment variables.");
        setIsLoading(false);
        return;
      }

      const templateParams = {
        name,
        email,
        message,
      };

      const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      if (response.status === 200) {
        setEmailSent(true);
        setName("");
        setEmail("");
        setMessage("");
        setTimeout(() => {
          setEmailSent(false);
        }, 10000);
        console.log("Email sent successfully:", response);
      } else {
        alert("Failed to send Email!");
        console.error("EmailJS response:", response);
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("Failed to send Email! Please try again.");
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <div className="contact" id="contact">
      <motion.div
        className="contact-content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, delay: 0.1, ease: "easeOut" }}
      >
        <div className="grid-mask"></div>
        <motion.div
          className="contact-content-left"
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
        >
          <div className="left-details">
            <h2>
              <WavingHandIcon className="hello-icon" />{" "}
              {userData.contactData.salutation},
            </h2>
            <h2>{userData.contactData.subTitle}</h2>
          </div>
          <div className="left-email">
            <EmailIcon sx={{ fontSize: "2.5em" }} className="email-icon" />
            <div className="email-text">
              <p>{userData.contactData.emailDesc}</p>
              <a href={"mailto:" + userData.socials.email}>
                {userData.socials.email}
              </a>
            </div>
          </div>
          <div className="left-socials">
            <p>Socials : </p>
            <a
              href={userData.socials.linkedin}
              aria-label="github profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              {userData.contactData.linkedin}
            </a>
            <a
              href={userData.socials.github}
              aria-label="github profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              {userData.contactData.github}
            </a>
          </div>
        </motion.div>
        <motion.div
          className="contact-content-right"
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
        >
          <div className="title">
            <h2>{userData.contactData.title}</h2>
            <RocketLaunchIcon className="rocket-icon" />
          </div>
          <form onSubmit={submitForm}>
            <div className="name-group input-group">
              <label name="name" id="name">
                Full Name
              </label>
              <br />
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="email-group input-group">
              <label name="email" id="email">
                Email Address
              </label>
              <br />
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                required
              />
            </div>
            <div className="message-group input-group">
              <label name="message" id="message">
                Message
              </label>
              <br />
              <textarea
                name="message"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={emailSent || isLoading}
              className="primary-button send-btn"
            >
              {isLoading ? "Sending..." : emailSent ? "Sent!" : "Send"}{" "}
              {!isLoading && !emailSent && <SendIcon className="send-icon" />}
            </button>
          </form>
        </motion.div>
      </motion.div>
      {emailSent && (
        <motion.div
          className="notification"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          Email sent successfully!
        </motion.div>
      )}
      <span className="copyright">
        <i>&#169; 2024 | All rights reserved. Made by Rishab Kumar</i>
      </span>
    </div>
  )
}

export default Contact