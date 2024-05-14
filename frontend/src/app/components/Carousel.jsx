import { Carousel } from "flowbite-react";
import axios from "axios";

export default async function CarouselHome() {
  let slidersInfo = [];
  try {
    slidersInfo = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/promotions/get-promotion-sliders-all`
    );
  } catch (error) {
    console.log(error);
  }
  return (
    <>
      <div className='h-56 sm:h-64 xl:h-96'>
        <Carousel slideInterval={2500} pauseOnHover>
          {slidersInfo.data.map((slider, index) => (
            <img
              key={index}
              src={`${process.env.NEXT_PUBLIC_SERVER_URL}/sliders/${slider.sliderImage}`}
              alt="Slider image"
            />
          ))}
        </Carousel>
      </div>
    </>
  );
}