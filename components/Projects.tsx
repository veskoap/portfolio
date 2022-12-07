import React from "react";
import Image from "next/image";
import ProjectImage from "../images/MetaMessenger.png";
import { motion } from "framer-motion";

type Props = {};

export default function Projects({}: Props) {
  const projects = [1, 2, 3];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 pt-24">
        {projects.map((project, i) => (
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <motion.div
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Image
              className="z-5 pt-8"
                src={ProjectImage}
                alt="Demo photo of my clone app"
              />
            </motion.div>

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#892CDC]/50">
                  Case Study {i + 1} of {projects.length}:{" "}
                </span>
                Messenger Clone
              </h4>

              <p className="text-lg text-center md:text-left">
                Meta Messenger 2.0 app built using Upstash, TypeScript, Redis,
                Tailwind, NextAuth and Pusher. Realtime messaging using Pusher,
                Upstash and Redis. Login and Logout Authentication flow using
                NextAuth & Facebook on Next.js 13. Pub/Sub backend using Pusher
                to enable real-time sync for messages. SWR library is used to
                efficiently fetch/cache and update data. And it is all deployed
                through Vercel.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#892CDC]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}
