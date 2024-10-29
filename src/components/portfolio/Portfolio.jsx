import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import "./portfolio.scss";

export default function Portfolio() {
  return (
    <motion.div className="portfolio">
      <motion.div className="container">
        <motion.h1>Projects</motion.h1>
        <motion.div className="work-container">
          <motion.div className="work project1">
            <motion.div className="layer">
              <h3>Food Delivery App</h3>
              <p>
                <span>Tools used: ReactJs</span>
                <br />A responsive food delivery app built with React.js,
                allowing users to browse food categories, view item details, and
                manage a cart. This project demonstrates dynamic filtering,
                state management, and adaptive design for a seamless user
                experience.
              </p>
              <motion.a
                href="https://megha-yadavv.github.io/food-delivery-app/"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8, delay: 0.5 }}
              >
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </motion.a>
            </motion.div>
          </motion.div>
          <motion.div className="work project2">
            <motion.div className="layer">
              <h3>To-Do-List</h3>
              <p>
                <span>Tools used: ReactJS </span>
                <br />A responsive to-do list application built with React.js,
                featuring dynamic task management, real-time updates, and
                seamless adaptability across all devices.
              </p>
              <motion.a
                href="https://megha-yadavv.github.io/react-project/"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8, delay: 0.5 }}
              >
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </motion.a>
            </motion.div>
          </motion.div>
          <motion.div className="work project3">
            <motion.div className="layer">
              <h3>Tic-Tac-Toe</h3>
              <p>
                <span>Tools used: ReactJS </span>
                <br />A lively Tic-Tac-Toe game built with React.js, featuring
                real-time gameplay, and a responsive design that adapts to any
                device. Enjoy classic matches with a quirky, colorful interface
                that's perfect for any occasion!
              </p>
              <motion.a
                href="https://megha-yadavv.github.io/tic-tac-toe/"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8, delay: 0.5 }}
              >
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
