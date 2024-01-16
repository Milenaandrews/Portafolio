import Card from "@/components/Card";
import { Image } from "@nextui-org/react";


export default function Home() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 justify-center items-center h-screen xl:px-80 sm:px-20' >
      <div className="flex justify-center h-full sm:h-auto items-end">
        <Image        
          width={300}
          alt="NextUI hero Image"
          src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
        />
      </div>
      <Card />
    </div>
  );
}
