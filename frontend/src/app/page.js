import CardSet from "./components/CardSet";
import CarouselHome from "./components/Carousel";
import FooterSection, { Footer } from "./components/Footer";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <main>
      <NavBar />
      <CarouselHome />
      <CardSet />
      <FooterSection /> 
    </main>
  );
}
