import { Button, Image } from '@nextui-org/react'
import React from 'react'

const CardProject = (props) => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <Image
                width={300}
                alt="NextUI hero Image"
                src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
            />
            <div className='flex gap-5 mt-5'>
                <Button color="primary">Repositorio</Button>
                <Button color="secondary">Deploy</Button>
            </div>



        </div>
    )
}

export default CardProject