import { Carousel } from "flowbite-react";
import Image from "next/image";

export default function CarouselHome() {
  return (
    <>
    <div className="h-56 sm:h-64 xl:h-96">
      <Carousel slideInterval={1500} pauseOnHover>
      <Image src="https://cdn2.unrealengine.com/Diesel%2Fproduct%2Falan-wake%2Fhome%2FAlanWake_screen_24-2560x1600-14c4ee5f002f7d18ddf88ed0a5964e139b40924d.jpg?h=720&quality=medium&resize=1&w=1280" alt="Home Slider Image" width={500} height={300} />
      <Image src="https://cdn2.unrealengine.com/egs-needforspeedunbound-criteriongames-g1a-05-1920x1080-3f4a93f8e7bd.jpg" alt="Home Slider Image" width={500} height={300} />
      </Carousel>
    </div>
    </>
  );
}