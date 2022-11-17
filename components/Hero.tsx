import React from 'react';
import Image from 'next/image';
import Link  from 'next/link';
import ImageOfMe from '../images/ImageOfMe.jpeg'
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            '<Hi, I\'m Vesko/>', 
            '<student/>', 
            '<designer/>',
            '<foodie/>',
            '<programmer/>'
        ],
        loop: true,
        delaySpeed: 2000, 
    });

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <Image
            priority
            className='relative rounded-full h-72 w-72 mx-auto  object-cover z-10'
            src={ImageOfMe}
            alt='A small picture of me the website creator'
        />
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[10px]'>
                Fullstack Developer
            </h2>
            <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor='#892CDC' />
            </h1>

            <div className='pt-5'>
                <Link href='#about'>
                    <button className='heroButton'>About</button>
                </Link>
                <Link href='#experience'>
                    <button className='heroButton'>Experience</button>
                </Link>
                <Link href='#skills'>
                    <button className='heroButton'>Skills</button>
                </Link>
                <Link href='#projects'>
                    <button className='heroButton'>Projects</button>
                </Link>
            </div>
        </div>


    </div>
  )
}