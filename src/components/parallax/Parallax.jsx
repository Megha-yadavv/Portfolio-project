import React ,{ useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform} from "framer-motion";


export default function Parallax(props) {
    const ref = useRef();
    
    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["start start", "end start"],
        
    });
    const yBg = useTransform(scrollYProgress, [0,1], ["0%","200%"])
    const textyBg = useTransform(scrollYProgress, [0,1], ["0%","100%"])

  return (
    <div
    ref={ref}
      className="parallax"
      style={{
        background:
          props.type === "about" ? "linear-gradient(#111132, #0c0c1d)" : "linear-gradient(#111132, #505064)"
      }}
    >
      <motion.h1 style={{y: yBg}}>{props.type === "about" ? "About" : "Portfolio"}</motion.h1>
      <motion.div  className="mountains-front"><img src="./image/mountains_front.png" alt="" /></motion.div>
      <motion.div style={{y: textyBg}} className="mountains-behind"><img src="./image/mountains_behind.png" alt="" /></motion.div>
      <motion.div  style={{x: yBg}} className="stars"><img src="./image/stars.png" alt="" /></motion.div>
    </div>
  );
}
