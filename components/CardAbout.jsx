'use client'
import { motion } from 'framer-motion'
import { fadeIn } from './utils/motionTransition'
import { Image } from '@nextui-org/react'
import React from 'react'

const CardAbout = () => {
    return (
        <motion.div variants={fadeIn("down", 0.5)} initial="hidden" animate="show" exit="hidden" className='h-screen flex flex-col justify-center mt-4 items-center' >
            <Image width={300} 
                alt="Computador"
                src="https://th.bing.com/th/id/OIG4.ADZs3CMgLqYMC_j.__gH?pid=ImgGn" />
            <div className="text-3xl pt-5 mb-5 font-bold text-secondary">
                <h1>Acerca de mi</h1>
            </div>
            <div className='text-xl px-5 py-1  sm:px-20' >
                <p>Como desarrolladora autodidacta, me caracterizo por ser responsable, detallista y siempre estar ávida de seguir aprendiendo. Mi viaje en el mundo de la programación comenzó en mayo de 2023 y desde entonces no he dejado de avanzar. Poseo conocimientos en el stack MERN (MongoDB, Express, React, Node), los cuales he adquirido y perfeccionado de forma independiente a lo largo de mi trayectoria.</p>
            </div>
        </motion.div>
    )
}

export default CardAbout