import React from 'react'
import Image from 'next/image'
import ImageOfMe from "../images/ImageOfMe.jpeg";

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article>
        <Image
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px]' 
        src={ImageOfMe}
        alt="Another picture of me"
        />

    </article>
  )
}