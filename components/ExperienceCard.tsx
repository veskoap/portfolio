import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  return (
    <article
      className="flex flex-col mb-20 rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40
     cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
      >
        <img
          className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-contain object-center"
          src={urlFor(experience?.companyImage).url()}
          alt=""
        />
      </motion.div>

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{experience.jobTitle}</h4>
        <p className="font-bold text-2xl mt-1 ">{experience.company}</p>
        <div className="flex space-x-2 my-2">
          {experience.technologies.map(technology => (
            <img
             key={technology._id}
             className="h-10 w-10 rounded-full"
             src={urlFor(technology.image).url()}
             />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {new Date(experience.dateStarted).toDateString()}{" "}–{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
            {experience.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
        </ul>
      </div>
    </article>
  );
}
