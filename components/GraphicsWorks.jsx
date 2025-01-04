import React from "react";
import { motion } from "framer-motion";
import { graphicsProjects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import Image from "next/image";

const ProjectCard = ({ index, name, description, tags, image }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="bg-black-200 p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <div className="relative w-full h-[230px]">
        <Image
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-2xl"
          width={360}
          height={230}
        />
      </div>
      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={tag.name} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

const GraphicsWorks = () => {
  return (
    <section className="w-full py-16">
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <p className="sectionSubText text-center">My work</p>
        <h2 className="sectionHeadText text-center">Graphics Projects.</h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {graphicsProjects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default GraphicsWorks;
