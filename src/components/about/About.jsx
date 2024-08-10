import React from "react";
import { color, motion } from "framer-motion";
import "./about.scss";
import { useState } from "react";

export default function About() {
    const [listActive, setListActive] = useState(true);
  
    const eduValues = [
      {
        year: "2019 - 2023",
        branch: "B.tech(ECE)",
        school: "NIET, Greater Noida",
        CGPA: "CGPA: 8.5",
      },
      {
        year: "2017 - 2018",
        branch: "12th",
        school: "Army public school, shankar vihar, Delhi ",
        CGPA: "CGPA: 7.0",
      },
      {
        year: "2015 - 2016",
        branch: "10th",
        school: "Army public school, Jodhpur ",
        CGPA: "CGPA: 9.2",
      },
    ];
  
    const image = [
      { logo: "./image/c-logo.png", type: "C" },
      { logo: "./image/python-logo.png", type: "Python" },
      { logo: "./image/html-logo.png", type: "HTML" },
      { logo: "./image/css-logo.png", type: "CSS" },
      { logo: "./image/js.png", type: "JavaScript" },
      { logo: "./image/react-logo.png", type: "ReactJS" },
      { logo: "./image/mysql-logo.png", type: "MySql" },
    ];
  
    const buttonVariants = {
      whileHover: {
        y: -5,
      },
      whileTap: {
        scale: 0.9,
      },
    };
  
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {

        opacity: 1,
       
        transition: {
           delay: 0.5,
          staggerChildren: -1.1,
        },
      },
    };
  
    const childVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    };
  
    return (
      <div className="about">
        <motion.div className="text-container" initial={{y:-100, opacity: 0}} animate={{y:0, opacity: 1, transition:{duration:0.5}}}>
          <motion.p>
            Aspiring software and web developer with a passion for innovation and
            continuous learning. Proficient in various programming languages,
            eager to contribute to cutting-edge projects in the field.
          </motion.p>
        </motion.div>
        <motion.div
          className="btn"
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition:{duration:0.6}}} >
          <motion.button
            variants={buttonVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            onClick={() => setListActive(true)}
            style={
              listActive
                ? { background: "white", color: "black" }
                : { background: "transparent", color: "white" }
            }
          >
            Education
          </motion.button>
          <motion.button
            variants={buttonVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            onClick={() => setListActive(false)}
            style={
              !listActive
                ? { background: "white", color: "black" }
                : { background: "transparent", color: "white" }
            }
          >
            Skills
          </motion.button>
        </motion.div>
        <motion.div
          className="info-container"
          initial="hidden"
          animate="visible"
          variants={containerVariants}


        >
          {listActive ? (
            <motion.div className="education" variants={containerVariants}>
              {eduValues.map((item, index) => (
                <motion.p key={index} variants={childVariants}>
                  <span>{item.year}</span> {item.branch}
                  <br /> {item.school}
                  <br />
                  <span>{item.CGPA}</span>
                </motion.p>
              ))}
            </motion.div>
          ) : (
            <motion.div className="skills" variants={containerVariants}>
              {image.map((item, i) => (
                <motion.div className="image-container" key={i} variants={childVariants}>
                  <motion.img src={item.logo} alt={`logo-of-${item.type}`} />
                  <motion.p>{item.type}</motion.p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    );
  }