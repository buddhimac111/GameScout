import Image from "next/image";
import NavBar from "../components/NavBar";
import FooterSection from "../components/Footer";

export default function AboutUs() {
  return (
    <main>
      <NavBar />
      <div className='max-w-4xl mx-auto px-4 py-8 bg-gray-900 text-white pt-40'>
        <div className='flex items-center space-x-4'>
          <Image src='/logoGameScout.png' width={50} height={50} alt='logo' />
          <h1 className='text-5xl font-bold'>GameScout</h1>
        </div>
        <div className='mt-10'>
          <h2 className='text-2xl font-semibold mb-3'>Overview</h2>
          <p>
            Explore unique features with GameScout! Enjoy a user-friendly and
            simple interface for price comparison, personalized game
            recommendations, and a daily-updated collection of games with the
            latest prices and ratings. This project is dedicated to reducing
            piracy in the video game industry.
          </p>
        </div>
        <div className='mt-10'>
          <h2 className='text-2xl font-semibold mb-3'>Goal</h2>
          <p>
            Provide a web application capable of analyzing game store pricing
            and offering a game recommendation system. It ultimately aims to
            reduce game piracy by making favorite games more affordable and
            accessible.
          </p>
        </div>
        <div className='mt-10'>
          <h2 className='text-2xl font-semibold mb-3'>Developer</h2>
          <p>
            Buddhima Wijesooriya -{" "}
            <a
              href='mailto:sample@gmail.com'
              className='text-blue-400 hover:text-blue-600'
            >
              10819573@students.plymouth.ac.uk
            </a>
          </p>
        </div>
      </div>
      <FooterSection />
    </main>
  );
}
