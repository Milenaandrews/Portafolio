'use client'
import { motion } from "framer-motion";
import { Button, Input, Textarea } from "@nextui-org/react";
import { fadeIn } from "./utils/motionTransition";
import React from 'react'

const FormContacto = () => {
    return (
        <motion.div variants={fadeIn("down", 0.5)} initial="hidden" animate="show" exit="hidden" className="w-full sm:w-3/4 xl:w-3/5 py-20">
            <form className='flex flex-col justify-center items-center gap-5  py-20 bg-gray-500/70'>
                <h1 className="text-2xl">Formulario de contactos</h1>
                <Input type="text" label="Nombre" className="w-1/2 xl:w-1/3" />
                <Input type="email" label="Email" className="w-1/2 xl:w-1/3" />

                <Textarea
                    label="Mensaje"
                    className="w-1/2 xl:w-1/3"
                />
                <Button className="text-white mt-5 py-8 px-5 text-base" color="primary">Contactar</Button>

            </form>
        </motion.div>

    )
}

export default FormContacto