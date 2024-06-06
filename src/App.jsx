import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import { Hero } from "./components/Hero";
import { HomeCards } from "./components/HomeCards";
import { JobListings } from "./components/JobListings";
import { ViewAllJobs } from "./components/ViewAllJobs";
import { RiH1 } from "react-icons/ri";

const router = createBrowserRouter(
  createRoutesFromElements(<Route index element={<h1>My Appe12</h1>} />)
);

const App = () => {
  return (
    <>
      <Navbar />
      <Hero
        title='Become a React Dev'
        subtitle='Find the React job that fits your skills and needs'
      />
      <HomeCards />
      <JobListings />
      <ViewAllJobs />
    </>
  );
};

export default App;
