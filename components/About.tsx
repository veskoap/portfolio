import React from "react";
import Image from "next/image";
import ImageOfMe from "../images/ImageOfMe.jpeg";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.div
        className="mt-24 flex flex-col relative h-screen text-center  md:text-left md:flex-row max-w-7xl px-10 lg:px-0 justify-evenly mx-auto items-center"
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <Image
          src={ImageOfMe}
          alt="Another picture of me"
          className=" flex flex-shrink-0 rounded-full md:rounded-2xl pb-4"
        />
      </motion.div>

      <div className="space-y-10 px-0 md:px-10 -pt-8">
        <h4 className="text-4xl font">
          Here is a{" "}
          <span className="underline decoration-[#892CDC]">little</span>{" "}
          backgrond
        </h4>

        <p className="text-base lg:max-w-7xl">
          Arcu ac tortor dignissim convallis aenean et tortor. Dictumst quisque
          sagittis purus sit amet. Cursus risus at ultrices mi tempus imperdiet
          nulla malesuada. Commodo sed egestas egestas fringilla phasellus.
          Vestibulum morbi blandit cursus risus at ultrices. Nisl condimentum id
          venenatis a condimentum vitae sapien. Tortor condimentum lacinia quis
          vel eros donec ac odio. Faucibus vitae aliquet nec ullamcorper sit
          amet risus nullam eget.
        </p>
      </div>
    </motion.div>
  );
}
