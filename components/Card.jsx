import { Button } from '@nextui-org/react'
import React from 'react'
import { FaDownload } from "react-icons/fa6";


const Card = () => {
  return (
    <div className="flex flex-col  px-20 sm:px-5">
      <div className='mb-5 '>
        <h2 className='text-3xl font-bold'>Llevando ideas a la realidad</h2>

      </div>
      <div>
        <p className='text-lg'>
          Loremasljfaslkjfkasljflkjasfkjaskfjlkafjs
          alksfjlksajflkasflkjklasf
          aksfalksfjkljaskl
        </p>
      </div>
      <div className='mt-5'>
        <Button
          color="primary"
          radius="lg"
          className='py-7 px-5 text-base'
          endContent={<FaDownload fontSize={20} />}
        >
          Curriculum
        </Button>
      </div>
    </div>
  )
}

export default Card