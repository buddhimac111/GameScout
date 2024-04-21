import CardOne from "./CardOne";

export default function CardSet() {
  let cards = [];

  // Using a for loop to create 10 card elements
  for (let i = 0; i < 11; i++) {
    cards.push(
             <CardOne  key={i}/>
    );
  }

  return (
    <>
      <div className="columns-3 mt-20 ms-20">
        {cards}
      </div>
    </>
  );
}
