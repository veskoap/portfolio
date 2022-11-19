import React from "react";
import Image from "next/image";
import PlaceholderCat from "../images/PlaceholderCat.jpeg";
import ImageOfMe from "../images/ImageOfMe.jpeg";

import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40
     cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView=
        {{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        >
        <Image
          className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
          src={ImageOfMe}
          alt="Another picture of me"
        />
      </motion.div>

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Job Title</h4>
        <p className="font-bold text-2xl mt-1 ">Company</p>
        <div className="flex space-x-2 my-2">
          <Image
            src={PlaceholderCat}
            alt=""
            className="h-10 w-10 rounded-full"
            />
          <Image
            src={PlaceholderCat}
            alt=""
            className="h-10 w-10 rounded-full"
            />
          <Image
            src={PlaceholderCat}
            alt=""
            className="h-10 w-10 rounded-full"
            />
          {/*Tech Used*/}
          {/*Tech Used*/}
          {/*Tech Used*/} 
        </div>
        <p className="uppercase py-5 text-gray-300">Started work... - Ended work...</p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
        </ul>
      </div>
    </article>
  );
}
