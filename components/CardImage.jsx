'use client'
import { Image } from '@nextui-org/react'
import React from 'react'
import { fadeIn } from './utils/motionTransition'
import { motion } from 'framer-motion'

const CardImage = () => {
    return (
        <motion.div
            variants={fadeIn("right", 0.5)} initial="hidden" animate="show" exit="hidden"
            className="flex justify-center h-full sm:h-auto items-end">
            <Image
                width={300}
                alt="NextUI hero Image"
                src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
            />
        </motion.div>
    )
}

export default CardImage