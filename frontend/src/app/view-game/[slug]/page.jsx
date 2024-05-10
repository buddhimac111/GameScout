import Image from "next/image";
import axios from "axios";
import NavBar from "../../components/NavBar";
import MetaRecoder from "@/app/components/MetaRecoder";

export default async function ViewGame({ params }) {
  const { slug } = params;
  const decodedSlug = decodeURIComponent(slug);
  const cleanSlug = decodedSlug.replace(/\s+/g, " ");

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

  let gameInfo;
  let steamInfo;
  let epicInfo;

  try {
    // //save a meta record
    // const meta = await axios.post(
    //   `${process.env.NEXT_PUBLIC_API_URL}/meta/save-meta`,
    //   {
    //     title: cleanSlug,
    //     description: "View Game",
    //     url: `/view-game/${slug}`,
    //   }
    // );
    gameInfo = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/scraped-games/get-game-info-single?scrapeTitle=${cleanSlug}`
    );
    steamInfo = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/scraped-games/get-steam-games-single?scrapeTitle=${cleanSlug}`
    );
    epicInfo = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/scraped-games/get-epic-games-single?scrapeTitle=${cleanSlug}`
    );
  } catch (error) {
    console.log(error);
  }

  return (
    <main>
      <NavBar />
      <MetaRecoder slug={cleanSlug} description="view-game" steamPrice={steamInfo.data[0].final_price} epicPrice={epicInfo.data[0].final_price}/>
      <div className='pt-32 px-36'>
        <div className='flex'>
          <Image
            width={600}
            height={100}
            src={`${process.env.NEXT_PUBLIC_SERVER_URL}/wallpapers/${gameInfo.data[0].wallpaper}`}
            className='rounded-xl'
            alt='Game-single-Image'
          />
          <div className='pl-10'>
            <p className='text-5xl font-semibold'>{gameInfo.data[0].title}</p>
            <p className='text-xl font-medium pt-4 text-slate-300 capitalize'>
              {" "}
              {gameInfo.data[0].genres.join(", ")}
            </p>
            <p className='text-lg font-medium pt-6 text-slate-300'>
              {" "}
              Developer :{" "}
              <span className='font-light pl-3'>
                {gameInfo.data[0].developer}
              </span>
            </p>
            <p className='text-lg font-medium pt-3 text-slate-300'>
              {" "}
              Publisher :{" "}
              <span className='font-light pl-3'>
                {gameInfo.data[0].publisher}
              </span>
            </p>
            <p className='text-lg font-medium pt-3 text-slate-300'>
              {" "}
              Released Date :{" "}
              <span className='font-light pl-3'>
                {steamInfo.data[0].release_date}
              </span>
            </p>
            <p className='text-md font-light pt-6 text-slate-300'>
              {gameInfo.data[0].description}
            </p>
          </div>
        </div>
        <div className='flex space-x-10 pt-10'>
          <a
            href={`https://store.steampowered.com/search/?term=${cleanSlug}`}
            target='_blank'
            className={`border-2 w-[50%] rounded-lg flex pl-8 hover:cursor-pointer hover:bg-hoverBlue h-40
           ${
             checkBorder(
               epicInfo.data[0].final_price,
               steamInfo.data[0].final_price
             ) === "steam"
               ? "border-lime-400"
               : "border-adminGrey"
           }`}
          >
            <Image
              src='/steamLogo.png'
              className='my-7'
              alt='Steam_logo'
              width={100}
              height={100}
            />
            <div className='mt-3'>
              <div className='flex'>
                <p
                  className={`ml-16 mt-5 text-3xl font-semibold ${
                    checkBorder(
                      epicInfo.data[0].final_price,
                      steamInfo.data[0].final_price
                    ) === "steam"
                      ? "text-lime-400"
                      : ""
                  }`}
                >
                  {steamInfo.data[0].final_price}
                </p>
                <p className='ml-16 mt-5 text-3xl font-medium line-through'>
                  {steamInfo.data[0].original_price !== "N/A"
                    ? steamInfo.data[0].original_price
                    : ""}
                </p>
                <p className='ml-3 mt-5 text-xl font-medium text-lime-400'>
                  {steamInfo.data[0].discount !== "N/A"
                    ? steamInfo.data[0].discount
                    : ""}
                </p>
              </div>
              <div className='ml-16 mt-3'>
                Steam Ratings :{" "}
                <span className='text-sm font-medium'>
                  {steamInfo.data[0].steam_rating.replace(/<[^>]*>/g, " ")}
                </span>
              </div>
            </div>
          </a>
          <a
            href={`https://store.epicgames.com/en-US/p/${cleanSlug.replace(
              / /g,
              "-"
            )}`}
            target='_blank'
            className={`border-2 w-[50%] rounded-lg flex pl-8 hover:cursor-pointer hover:bg-hoverBlue h-40
           ${
             checkBorder(
               epicInfo.data[0].final_price,
               steamInfo.data[0].final_price
             ) === "epic"
               ? "border-lime-400"
               : "border-adminGrey"
           }`}
          >
            <Image
              src='/epicLogo.png'
              className='my-7'
              alt='Steam_logo'
              width={100}
              height={100}
            />
            <div className='mt-3'>
              <div className='flex'>
                <p
                  className={`ml-16 mt-5 text-3xl font-semibold ${
                    checkBorder(
                      epicInfo.data[0].final_price,
                      steamInfo.data[0].final_price
                    ) === "epic"
                      ? "text-lime-400"
                      : ""
                  }`}
                >
                  {epicInfo.data[0].final_price}
                </p>
                <p className='ml-16 mt-5 text-3xl font-medium line-through'>
                  {epicInfo.data[0].original_price !== "N/A"
                    ? epicInfo.data[0].original_price
                    : ""}
                </p>

                <p className='ml-3 mt-5 text-xl font-medium text-lime-400'>
                  {epicInfo.data[0].discount !== "N/A"
                    ? epicInfo.data[0].discount
                    : ""}
                </p>
              </div>
              <div className='ml-16 mt-3'>
                Epic Ratings :{" "}
                <span className='text-lg font-medium'>
                  {epicInfo.data[0].epic_rating} out of 5
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}
