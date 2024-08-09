import { easeInOut, stagger } from "framer-motion";
import React from "react"
import { motion } from "framer-motion";

const varients={
    open:{
        transition:{
            staggerChildren: 0.1
        }
    },
    closed:{
        transition:{
            staggerChildren: 0.1

        }
    }
}
const itemVarients={
    open:{
        y:0,
        opacity: 1
    },
    closed:{
        y:40,
        opacity: 0
    }
}
export default function Links() {

  const items = ["Home", "About", "Portfolio", "Contact"];

  return (
    <motion.div className="links" varients={varients}>
      {items.map((item) => (
        <motion.a href={`#${item}`} key={item} variants={itemVarients} whileHover={{scale: 1.5, transition:{ease: easeInOut}}} whileTap={{scale:1}}>
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
}
