import React from 'react';
import Image from 'next/image';
import ImageOfMe from '../images/ImageOfMe.jpeg';
import { motion } from 'framer-motion';

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5}}

    className='flex flex-col relative h-screen text-center md:text-left max-w-7xl 
    px-10 justify-evenly mx-auto items-center'
    >

        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            About
        </h3>
    
        <motion.div 
          className='mt-52 relative'
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{opacity: 1, x: 0}}
          viewport={{once: true}}
        >
          <Image 
              src={ImageOfMe}
              alt='Another picture of me'
              className='mb-20 md:mb-0 flex-shrink-0 w-52 h-52 rounded-full object-cover md:rounded-full md:w-64 md:h-64 lg:rounded-full lg:w-80 lg:h-80 xl:rounded-full xl:w-96 xl:h-96'
            />
        </motion.div>

        <div className='space-y-10 px-0 md:px-10'>
          <h4 className='text-4xl font'>
            Here is a <span className='underline decoration-[#892CDC]'>little</span> backgrond
          </h4>

          <p className='text-base'>
          Arcu ac tortor dignissim convallis aenean et tortor. Dictumst quisque sagittis purus sit amet. 
          Cursus risus at ultrices mi tempus imperdiet nulla malesuada. Commodo sed egestas egestas fringilla phasellus. 
          Vestibulum morbi blandit cursus risus at ultrices. Nisl condimentum id venenatis a condimentum vitae sapien. 
          Tortor condimentum lacinia quis vel eros donec ac odio. Faucibus vitae aliquet nec ullamcorper sit amet 
          risus nullam eget. Lectus urna duis convallis convallis. Sed risus ultricies tristique nulla. Nullam non nisi 
          est sit amet facilisis magna etiam. Euismod lacinia at quis risus. Risus viverra adipiscing at in tellus.
          </p>
        </div>

    </motion.div>
  )
}