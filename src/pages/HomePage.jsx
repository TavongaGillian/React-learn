import { Hero } from "../components/Hero";
import { HomeCards } from "../components/HomeCards";
import { PlaceListings } from "../components/PlaceListings";
import { ViewAllPlaces } from "../components/ViewAllPlaces";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <PlaceListings isHome={true} />
      <ViewAllPlaces />
    </>
  );
};

// export default HomePage
