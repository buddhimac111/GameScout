import { Card } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

export default function CardOne({ gameInfo, steamInfo, epicInfo }) {
  const formattedTitle = gameInfo.scrapeTitle.replace(/ /g, "-");

  function checkBorder(finalEpic, FinalSteam) {
    let epicPrice = parseFloat(finalEpic.replace("$", ""));
    let steamPrice = parseFloat(FinalSteam.replace("$", ""));

    if (epicPrice < steamPrice) {
      return "epic";
    } else if (steamPrice < epicPrice) {
      return "steam";
    } else {
      return "none";
    }
  }

  function truncateDescription(description) {
    const wordLimit = 10;
    const words = description.split(" ");

    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + " ...";
    }
    return description;
  }

  return (
    <>
      <Card
        className='mb-12 max-w-sm bg-black/50 backdrop-blur-md border border-gray-700/50 shadow-lg rounded-lg overflow-hidden bottom-0 z-10 hover:scale-105 transition-transform duration-300 ease-in-out'
        renderImage={() => (
          <Image
            width={500}
            height={500}
            src={`${process.env.NEXT_PUBLIC_SERVER_URL}/wallpapers/${gameInfo.wallpaper}`}
            alt='Game-Card-Image'
          />
        )}
      >
        <h5 className='text-2xl font-bold tracking-tight text-white'>
          {gameInfo.title}
        </h5>
        <p className='font-normal text-gray-400 dark:text-gray-400'>
          {truncateDescription(gameInfo.description)}
        </p>
        <p className='font-semibold text-white text-sm capitalize'>
          {gameInfo.genres.join(", ")}
        </p>

        <a
          href={`https://store.steampowered.com/search/?term=${gameInfo.scrapeTitle}`}
          target='_blank'
          className={`justify-between inline-flex w-full items-center rounded-lg bg-gray-800 px-5 py-2.5 text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 sm:w-auto ${
            checkBorder(epicInfo.final_price, steamInfo.final_price) === "steam"
              ? "border-lime-400 border"
              : ""
          }`}
        >
          <Image
            src='/steamLogo.png'
            className=''
            alt='Steam_logo'
            width={50}
            height={50}
          />
          {steamInfo.discount !== "N/A" && (
            <div className='text-left'>
              <div className='mb-1 text-xs text-lime-400'>
                {steamInfo.discount}
              </div>
              <div className='-mt-1 font-sans text-md font-semibold line-through'>
                {steamInfo.original_price}
              </div>
            </div>
          )}
          <div className='text-left'>
            <div className='mb-1 text-xs'>Steam Store</div>
            <div className='-mt-1 font-sans text-md font-semibold'>
              {steamInfo.final_price}
            </div>
          </div>
        </a>
        <a
          href={`https://store.epicgames.com/en-US/p/${formattedTitle}`}
          target='_blank'
          className={`justify-between inline-flex w-full items-center rounded-lg bg-gray-800 px-5 py-2.5 text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 sm:w-auto 
          ${
            checkBorder(epicInfo.final_price, steamInfo.final_price) === "epic"
              ? "border-lime-400 border"
              : ""
          }`}
        >
          <Image
            src='/epicLogo.png'
            className=''
            alt='Epic_logo'
            width={50}
            height={50}
          />
          {epicInfo.discount !== "N/A" && (
            <div className='text-left'>
              <div className='mb-1 text-xs text-lime-400'>
                {epicInfo.discount}
              </div>
              <div className='-mt-1 font-sans text-md font-semibold line-through'>
                {epicInfo.original_price}
              </div>
            </div>
          )}
          <div className='text-left'>
            <div className='mb-1 text-xs'>Epic Store</div>
            <div className='-mt-1 font-sans text-md font-semibold'>
              {epicInfo.final_price}
            </div>
          </div>
        </a>
        <div className='text-end pr-2'>
          <Link
            href={`/view-game/${gameInfo.scrapeTitle}`}
            className='text-sm hover:text-blue-500'
          >
            See more ➤➤
          </Link>
        </div>
      </Card>
    </>
  );
}
