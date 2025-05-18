"use client";
import { FC } from "react";
import { motion } from "motion/react";

const CatalogueList: FC<{
  list: {
    title: string;
    slideIndex: number | undefined;
  }[];
  slidTo: (slideNumber: number) => void;
}> = ({ list, slidTo }) => {
  return (
    <div className="p-[3em]">
      <h1 className="font-bold text-center text-darkBlue text-4xl mb-8">
        فهرست
      </h1>
      <ul className="catalogueList justify-center">
        {list.map((item, index) => (
          <motion.li
            transition={{
              type: "spring",
              duration: index == 0 ? 1 : 1,
            }}
            // whileTap={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            onClick={() => slidTo(item.slideIndex || 0)}
            whileHover={{
              scale: [null, 1.1, 1.6],
              transition: {
                duration: 0.5,
                times: [0, 0.6, 1],
                ease: ["easeInOut", "easeOut"],
              },
            }}
            // initial={{  visibility: "hidden" }} // transform: "scale(0.2)",
            // animate={{ transform: "scale(1)" }}
            className="list-item"
            key={index}
          >
            {item.title}
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default CatalogueList;
