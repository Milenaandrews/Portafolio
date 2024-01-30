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
        <h2 className='text-3xl font-bold text-secondary' >Llevando ideas a la realidad</h2>

      </div>
      <div>
        <p className='text-lg'>
          Loremasljfaslkjfkasljflkjasfkjaskfjlkafjs
          alksfjlksajflkasflkjklasf
          aksfalksfjkljaskl
        </p>
      </div>
      <div className='mt-5'>
        <Link href={"../public/docs/jorpa.pdf"} target={"_blank"} download={true}></Link>
        <Button
          color="secondary"
          radius="lg"
          className='py-7 px-5 text-base'
          endContent={<FaDownload fontSize={20} />}
        >
          Curriculum
        </Button>
      </div>
    </motion.div>
  )
}

export default Card