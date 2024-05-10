import NavBar from "../../components/NavBar";
import axios from "axios";
import CardOne from "@/app/components/CardOne";
import FooterSection from "@/app/components/Footer";
import { LuBaby } from "react-icons/lu";

export default async function Recommendations({ params }) {
  const { slug } = params;
  let isloading = false;
  let gameInfo = [];
  let cards = [];

  try {
    isloading = true;
    gameInfo = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/suggestions/get-suggest-games?userId=${slug}`
    );
    console.log(gameInfo.data[0].gameInfoList[0]);

    gameInfo.data[0].gameInfoList.map((element, index) => {
      cards.push(
        <CardOne
          key={index}
          gameInfo={element}
          steamInfo={gameInfo.data[0].steamGameList[index]}
          epicInfo={gameInfo.data[0].epicGameList[index]}
        />
      );
    });
    isloading = false;
  } catch (error) {
    console.log(error);
    isloading = false;
  }

  return (
    <main>
      <NavBar />
      <div className='pt-24'>
        {!isloading && cards.length === 0 ? null : (
          <p className='px-24 text-3xl py-5 font-semibold animate-pulse'>
            Recommend for you ⋙⋙
          </p>
        )}
        <div className='lg:columns-3 mt-8 ms-5 lg:ms-20'>
          {isloading ? <p>Loading...</p> : cards}
        </div>
      </div>
      {!isloading && cards.length === 0 ? (
        <div className='flex flex-col justify-center items-center pt-[12%]'>
          <LuBaby className='text-6xl' />
          <p className='text-xl pt-3'>
            You currently have a Newbie account and haven't received any
            recommendations yet
          </p>
        </div>
      ) : null}

      {!isloading && cards.length === 0 ? null : <FooterSection />}
    </main>
  );
}
