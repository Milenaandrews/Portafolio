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
                width={600}
                alt="NextUI hero Image"
                src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
        </motion.div>
    )
}

export default CardImage