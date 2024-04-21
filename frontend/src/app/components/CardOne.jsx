import { Card } from "flowbite-react";
import Image from "next/image";

export default function CardOne() {
  return (
    <>
      <Card
        className='mb-12 max-w-sm bg-black/50 backdrop-blur-md border border-gray-700/50 shadow-lg rounded-lg overflow-hidden bottom-0 z-10'
        renderImage={() => (
          <Image
            width={500}
            height={500}
            src='https://cdn2.unrealengine.com/egs-needforspeedunbound-criteriongames-g1a-05-1920x1080-3f4a93f8e7bd.jpg'
            alt='image 1'
          />
        )}
      >
        <h5 className='text-2xl font-bold tracking-tight text-white'>
          Need for Speed Unbound
        </h5>
        <p className='font-normal text-gray-400 dark:text-gray-400'>
          Jump straight into the competition in Vol. 6 with a new dedicated PVP
          mode featuring weekly playlists, ...
        </p>
        <p className='font-bold text-white text-xs italic'>
          Action , Racing , Multiplayer
        </p>

        <a
          href='#'
          className='inline-flex w-full items-center rounded-lg bg-gray-800 px-4 py-2.5 text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 sm:w-auto'
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
          href='#'
          className='inline-flex w-full items-center rounded-lg bg-gray-800 px-4 py-2.5 text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 sm:w-auto'
        >
          <Image
            src='/epicLogo.png'
            className=''
            alt='Steam_logo'
            width={50}
            height={50}
          />
          <div className='text-left'>
            <div className='mb-1 text-xs'>Epic Store</div>
            <div className='-mt-1 font-sans text-sm font-semibold'>$22.99</div>
          </div>

          <Image
            src='/badge2rec.png'
            className=''
            alt='Steam_logo'
            width={55}
            height={55}
          />
        </a>
      </Card>
    </>
  );
}
