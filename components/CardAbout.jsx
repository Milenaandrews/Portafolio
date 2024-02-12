'use client'
import { motion } from 'framer-motion'
import { fadeIn } from './utils/motionTransition'
import { Image } from '@nextui-org/react'
import React from 'react'

const CardAbout = () => {
    return (
        <motion.div variants={fadeIn("down", 0.5)} initial="hidden" animate="show" exit="hidden" className='h-screen flex flex-col justify-center mt-7 items-center' >
            <Image width={300} 
                alt="Computador"
                src="https://th.bing.com/th/id/OIG4.ADZs3CMgLqYMC_j.__gH?pid=ImgGn" />
            <div className="text-3xl mb-5 font-bold text-secondary">
                <h1>Acerca de mi</h1>
            </div>
            <div className='text-xl px-5 py-1  sm:px-20' >
                <p>Como desarrolladora, me destaco por ser proactiva, autodidacta, organizada y responsable. Disfruto enormemente adquiriendo nuevos conocimientos y perfeccionando mis habilidades técnicas para seguir creciendo profesionalmente. Además, poseo habilidades blandas como liderazgo, trabajo en equipo, adaptabilidad y atención al detalle. Estas cualidades me permiten colaborar eficazmente con otros y liderar proyectos hacia el éxito. Estoy comprometida a seguir aprendiendo y mejorando continuamente para alcanzar mis objetivos en el campo del desarrollo.</p>
            </div>
        </motion.div>
    )
}

export default CardAbout