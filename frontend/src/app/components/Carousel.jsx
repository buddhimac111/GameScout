import { Carousel } from "flowbite-react";
import Image from "next/image";

export default function CarouselHome() {
  return (
    <>
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slideInterval={1500} pauseOnHover>
      <Image src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="Home Slider Image" width={500} height={300} />
      <Image src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="Home Slider Image" width={500} height={300} />
      </Carousel>
    </div>
    </>
  );
}