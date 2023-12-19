import Image from 'next/image'

export default function Home() {
  return (
    <div className='grid grid-col-2'>
    <Image  width={300}
      alt="NextUI hero Image"
      src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
    />    
    <h1>hola mundo</h1>
    </div>
  )
}
