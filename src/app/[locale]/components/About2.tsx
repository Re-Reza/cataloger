"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "motion/react";
import { topicVarient } from "../utils/varients";
const AboutUs = () => {
  const { ref, inView } = useInView({ triggerOnce: false });
  return (
    <div ref={ref} className={`introContainer animate}`}>
      <motion.h2
        variants={topicVarient}
        initial="hidden"
        whileInView="visible"
        className="intro"
      >
        معرفی مدرن تجهیز صنعت برین
      </motion.h2>

      <motion.p className="text-justify font-[700]"></motion.p>
    </div>
  );
};

export default AboutUs;
