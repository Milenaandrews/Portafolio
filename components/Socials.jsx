'use client';
import React from 'react';
import {
  RiPinterestFill,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiWhatsappFill
} from "react-icons/ri"
import { motion } from 'framer-motion'
import Link from 'next/link'

const Socials = () => {
  const dataSocial = [
    {
      name: 'Linkedin',
      path: 'https://www.linkedin.com/in/milena-andrews-5b58711b6/',
      icon: <RiLinkedinBoxFill size="30" />,
    },
  
    {
      name: 'Github',
      path: 'https://github.com/Milenaandrews',
      icon: <RiGithubFill size="30" />,
    },

    {
      name: 'Whatsapp',
      path: 'https://api.whatsapp.com/send?phone=56984189254',
      icon: <RiWhatsappFill size="30" />,
    }
  ]



  return (
    <motion.div className='fixed bottom-0 z-30 flex flex-col items-center w-full mt-auto md:justify-center h-max md:top-1/4 md:left-5 md:w-16 md:max-w-md md:h-screen '
      variants="hidden"
      initial="show"
      exit="hidden"
    >

      <div className='flex items-center justify-between w-full px-4 py-3 md:py-8 md:flex-col md:justify-center gap-y-10 md:px-4 md:h-max bg-gray-500/50 sm:shadow-md backdrop-blur-sm md:rounded-full '>
        {dataSocial.map(({ name, path, icon }) => (
          <div key={name}>
            <Link href={path}
              className='group transition-all duration-300 hover:text-secondary'>
              <div className='absolute left-20 hidden mr-20 rounded-sm md:group-hover:flex md:group-hover:items-center'>
                <div className='relative flex items-center p-2 leading-none text-secondary font-bold capitalize bg-gray-500/50 rounded-sm'>
                  {name}
                </div>
                <div className='absolute border-r-8 border-1-0 border-solid border-r-white border-y-transparent '></div>
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