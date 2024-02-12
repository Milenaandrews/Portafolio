import Card from "@/components/Card";
import CardImage from "@/components/CardImage";
import { Image } from "@nextui-org/react";


export default function Home() {
  return (
    <section
      id= "home"
      className='flex justify-center items-center h-screen xl:px-70 sm:px-20 gap-5' >
      <CardImage/>
      <Card />
    </section>
  );
}
