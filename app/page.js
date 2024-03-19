import Card from "@/components/Card";
import CardImage from "@/components/CardImage";



export default function Home() {
  return (
    <section
      id= "home"
      className='grid grid-cols-1 sm:grid-cols-2  justify-center items-center h-screen mx-0 px-0 w-screen xl:px-70 sm:px-20 ' >
      <CardImage/>
      <Card />
    </section>
  );
}
