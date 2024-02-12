'use client'
import { Button } from '@nextui-org/react'
import {motion} from 'framer-motion'
import {fadeIn} from './utils/motionTransition'
import React from 'react'
import { FaDownload } from "react-icons/fa6";
import Link from 'next/link'


const Card = () => {
  return (
    <motion.div variants={fadeIn("left", 0.5)} initial="hidden" animate="show" exit="hidden" className="flex flex-col  px-20 sm:px-5">
      <div className='mb-5 '>
        <h1 className='text-4xl  font-bold text-emerald-400' >Llevando tus ideas a la realidad</h1>

      </div>
      {/* <div>
        <p className='text-lg'>   </p>
      </div> */}
  
    </motion.div>
  )
}

export default Card