import React from 'react'
import "./navbar.scss"
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Sidebar from '../sidebar/Sidebar';


export default function Navbar() {
  return (
    <div className='navbar'>
        <Sidebar/>
        <div className="wrapper">
            <motion.span initial={{opacity:0, scale: 0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5}}>Megha Yadav</motion.span>
            <div className="social">
                <motion.a whileTap={{scale:0.5}}  href="https://github.com/Megha-yadavv" ><FontAwesomeIcon icon={faSquareGithub} className='icon'/></motion.a>
                <motion.a whileTap={{scale:0.5}} href="https://www.linkedin.com/in/megha-yadav-273937235/" ><FontAwesomeIcon icon={faLinkedin} className='icon' /></motion.a>

            </div>

        </div>
    </div>
  )
}
