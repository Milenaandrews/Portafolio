'use client'
import { Button } from '@nextui-org/react'
import { motion } from 'framer-motion'
import { fadeIn } from './utils/motionTransition'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CardProject = (props) => {
    return (
        <div>
            <motion.div  whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }} variants={fadeIn("right", 0.5)} initial="hidden" animate="show" exit="hidden" className='flex flex-col justify-center items-center min-h-[200px] relative group cursor-pointer'>
            <div className='text-center bg-slate-600/70 h-12 absolute top-0 z-20 p-5 rounded group-hover:h-full transition-all'>
                <h1 className='font-bold flex justify-center items-center top-0'>{props.title}</h1>
                <p className='opacity-0 group-hover:opacity-100 text-'>{props.description}</p>
            </div>
            <div className='h-full w-full rounded absolute'>
                <Image
                    fill
                    className='rounded top-0 left-0 absolute'
                    alt={props.title}
                    src={props.bgCardImage}
                />
            </div>
            
        </motion.div>
        <div className='flex gap-5 mt-5 justify-center items-center'>
                <Link href={props.urlRepositorio}>
                    <Button color="primary">Repositorio</Button>
                </Link>
                <Link href={props.urlDescription}>
                    <Button color="secondary">Deploy</Button>
                </Link>
            </div>


        </div>
        
        
    )
}

export default CardProject