import { Card } from "flowbite-react";
import Image from "next/image";

export default function CardOne({ gameInfo, steamInfo, epicInfo }) {

  const formattedTitle = gameInfo.scrapeTitle.replace(/ /g, '-');

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
        className='mb-12 max-w-sm bg-black/50 backdrop-blur-md border border-gray-700/50 shadow-lg rounded-lg overflow-hidden bottom-0 z-10'
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
        <p className='font-bold text-white text-xs italic'>
          Action , Racing , Multiplayer
        </p>

        <a
          href={`https://store.steampowered.com/search/?term=${gameInfo.scrapeTitle}`}
          target='_blank'
          className='justify-between inline-flex w-full items-center rounded-lg bg-gray-800 px-4 py-2.5 text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 sm:w-auto'
        >
          <Image
            src='/steamLogo.png'
            className=''
            alt='Steam_logo'
            width={50}
            height={50}
          />
          <div className='text-left'>
            <div className='mb-1 text-xs'>Steam Store</div>
            <div className='-mt-1 font-sans text-sm font-semibold'>$22.99</div>
          </div>
        </a>
        <a
          href={`https://store.epicgames.com/en-US/p/${formattedTitle}`}
          target='_blank'
          className='justify-between inline-flex w-full items-center rounded-lg border-lime-400 border bg-gray-800 px-4 py-2.5 text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 sm:w-auto'
        >
          <Image
            src='/epicLogo.png'
            className=''
            alt='Steam_logo'
            width={50}
            height={50}
          />
          <div className='text-left'>
            <div className='mb-1 text-xs text-lime-400'>-70%</div>
            <div className='-mt-1 font-sans text-sm font-semibold line-through'>
              $22.99
            </div>
          </div>
          <div className='text-left'>
            <div className='mb-1 text-xs'>Epic Store</div>
            <div className='-mt-1 font-sans text-sm font-semibold'>$22.99</div>
          </div>
        </a>
      </Card>
    </>
  );
}
