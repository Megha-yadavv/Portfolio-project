import React from 'react'
import "./home.scss"
import { motion } from 'framer-motion'

const textVarients={
  initial:{
    opacity:0,
    x: -200
  },
  animate:{
    x: 0,
    opacity:1,
    transition:{
      duration: 1,
      staggerchildren:0.1
    }
  }

}

export default function Home() {
  return (
    <div className='home'>
      <div className="wrapper">
        <motion.div className="text-container" variants={textVarients} initial="initial" animate="animate">
            <motion.h2 variants={textVarients} >Megha Yadav</motion.h2 >
            <motion.h1 variants={textVarients}>Frontend developer</motion.h1>
            <motion.div className="buttons" variants={textVarients} >
            <motion.a  href='https://drive.google.com/file/d/191Cy7rjPYkZN76gSX9SycgPPh6E1nz3Y/view?usp=drive_link' target="_blank" variants={textVarients}>View resume</motion.a>
            <motion.a  href="#Contact" variants={textVarients} style={{background: "white", color: "black"}}>Contact Me</motion.a>
            </motion.div>
        </motion.div>
       </div>
    </div>
  )
}
