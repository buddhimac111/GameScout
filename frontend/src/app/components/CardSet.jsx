import axios from "axios";
import CardOne from "./CardOne";

export default async function CardSet() {
  let cards = [];
  let gameInfo = [];
  let steamInfo = [];
  let epicInfo = [];

  // api call to get game data using axios

  try {
    gameInfo = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/scraped-games/get-game-info-all`
    );
    steamInfo = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/scraped-games/get-steam-games-all`
    );
    epicInfo = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/scraped-games/get-epic-games-all`
    );
  } catch (error) {
    console.log(error);
  }

  gameInfo.data.map((element, index) => {
    let steamElement = steamInfo.data[index];
    let epicElement = epicInfo.data[index];
    cards.push(<CardOne key={index} gameInfo={element} steamInfo={steamElement} epicInfo={epicElement}  />);
  });

  return (
    <>
      <div className='lg:columns-3 mt-20 ms-5 lg:ms-20'>
        {cards.length > 0 ? cards : <p>Loading...</p>}
      </div>
    </>
  );
}
