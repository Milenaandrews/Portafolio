import {Button, Input} from "@nextui-org/react";
import React from 'react'

const FormContacto = () => {
    return (
        <form className='h-screen flex flex-col justify-center items-center gap-5'>
            <h1 className="text-2xl">Formulario de contactos</h1>
            <Input type="text" label="Nombre" className="xl:w-1/3"/>
            <Input type="email" label="Email" className="w-1/2 xl:w-1/3"/>
            <Input type="email" label="Mensaje" className="w-1/2 xl:w-1/3"/>
            <Button className="text-white mt-5 py-8 px-5 text-base" color="primary">Contactar</Button>

        </form>
    )
}

export default FormContacto