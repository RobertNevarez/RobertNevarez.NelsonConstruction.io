import Home from "../Pages/Home/Home/Home";
import GlassPage from "../Pages/Glass/glass";
import ArtPlacePage from "../Pages/ArtPlace/artplace";
import About from "../Pages/About/about";
import CoffeeBirds from "../Pages/CoffeeBirds/coffeebirds";
import Health from "../Pages/Health/health";
import MtTravel from "../Pages/Mt.Travel/mttravel";
import Safety from "../Pages/Safety/safety";
import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  createBrowserRouter,
  RouterProvider,
  Router,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();
  console.log("location")

  return (
    // { path: "/", element: <Home /> },
    // { path: "/GlassPage", element: <GlassPage /> },
    // { path: "/ArtPlacePage", element: <ArtPlacePage /> },
    // { path: "/AboutPage", element: <About /> },
    // { path: "/CoffeeBirdsPage", element: <CoffeeBirds /> },
    // { path: "/HealthPage", element: <Health /> },
    // { path: "/MtTravelPage", element: <MtTravel /> },
    // { path: "/SafetyPage", element: <Safety /> },
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/Feature" element={<GlassPage />} />
        <Route path="/Pricing" element={<ArtPlacePage />} />
        <Route path="/AboutPage" element={<About />} />
        <Route path="/Buildafuture" element={<CoffeeBirds />} />
        <Route path="/HealthPage" element={<Health />} />
        <Route path="/MtTravelPage" element={<MtTravel />} />
        <Route path="/ContactUs" element={<Safety />} />
      </Routes>
      </AnimatePresence>
    
  );
}

export default AnimatedRoutes;
