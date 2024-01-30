'use client';
import React from 'react';
import {
  RiPinterestFill,
  RiGithubFill,
  RiLinkedinBoxFill
} from "react-icons/ri"
import { motion } from 'framer-motion'
import Link from 'next/link'

const Socials = () => {
  const dataSocial = [
    {
      name: 'Linkedin',
      path: 'https://www.linkedin.com',
      icon: <RiLinkedinBoxFill size="30" />,
    },
    {
      name: 'Linkedin',
      path: 'https://www.linkedin.com',
      icon: <RiPinterestFill size="30" />,
    },
    {
      name: 'Linkedin',
      path: 'https://www.linkedin.com',
      icon: <RiGithubFill size="30" />,
    }
  ]



  return (
    <motion.div className='fixed bottom-0 z-30 flex flex-col items-cente w-full mt-auto md:justify-center h-max md:top-1/4 md:left-5 md:w-16 md:max-w-md md:h-screen '>
      <div className='flex items-center justify-between w-full px-4 py-3 md:py-8 md:flex-col md:justify-center gap-y-10 md:px-4 md:h-max bg-gray-500/50 sm:shadow-md backdrop-blur-sm md:rounded '>
        {dataSocial.map(({ name, path, icon }) => (
          <div key={name}>
            <Link href={path} className='group transition-all duration-300 hover:text-secondary'>
              <div className='absolute left-20 hidden mr-20 rounded-sm md:group-hover:flex md:group-hover:items-center'>
                <div>
                  {name}
                </div>
              </div>
              {icon}
            </Link>
          </div>
        ))}
      </div>

    </motion.div>
  )
}

export default Socials