'use client'
import { motion } from 'framer-motion'
import { fadeIn } from './utils/motionTransition'
import { Image } from '@nextui-org/react'
import React from 'react'

const CardAbout = () => {
    return (
        <motion.div variants={fadeIn("down", 0.5)} initial="hidden" animate="show" exit="hidden" className='h-screen flex flex-col justify-center items-center'>
            <Image  width={300}
            
                alt="NextUI hero Image"
                src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"/>
            <div  className="text-3xl mb-5 font-bold text-secondary">
                <h1>Acerca de mi</h1>
            </div>
            <div className='text-xl px-5 sm:px-20'>
                <p>Loremasljfaslkjfkasljflkjasfkjaskfjlkafjs
                oremasljfaslkjfkasljflkjasfkjaskfjlkafjs oremasljfaslkjfkasljflkjasfkjaskfjlkafjsoremasljfaslkjfkasljflkjasfkjaskfjlkafjs oremasljfaslkjfkasljflkjasfkjaskfjlkafjsv</p>
            </div>
        </motion.div>
    )
}

export default CardAbout