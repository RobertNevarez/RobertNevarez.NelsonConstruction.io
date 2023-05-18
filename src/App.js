import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  createBrowserRouter,
  RouterProvider,
  Router,
} from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Navi from "./Navigation/navigation";
import Footer from "./Footer/Footer";
import GlassPage from "./Pages/Glass/glass";
import ArtPlacePage from "./Pages/ArtPlace/artplace";
import About from "./Pages/About/about";
import CoffeeBirds from "./Pages/CoffeeBirds/coffeebirds";
import Health from "./Pages/Health/health";
import MtTravel from "./Pages/Mt.Travel/mttravel";
import Safety from "./Pages/Safety/safety";
import { useState } from "react";
import RootLayout from "./RootLayout/root";
import Preloader from "./Preloader/preloader";
import AnimatedRoutes from "./AnimatedRoutes/AnimatedRoutes";

/* framer is already installed*/
const router = createBrowserRouter([
  {
    path: "*",
    element: <RootLayout />,
    children: [
      
      // { path: "/", element: < Home/> },
      // { path: "/GlassPage", element: <GlassPage /> },
      // { path: "/ArtPlacePage", element: <ArtPlacePage /> },
      // { path: "/AboutPage", element: <About /> },
      // { path: "/CoffeeBirdsPage", element: <CoffeeBirds /> },
      // { path: "/HealthPage", element: <Health /> },
      // { path: "/MtTravelPage", element: <MtTravel /> },
      // { path: "/SafetyPage", element: <Safety /> },
    ],
  },
]);

function App() {
 
  return (
    <>
      <Preloader />
      <RouterProvider router={router} />
    </>
  );

  // <div className="App">
  //   <Navi/>
  //     <Routes>
  //       <Route path="/" element={<Home/>}/>
  //       <Route path="/GlassPage" element={<GlassPage/>}/>
  //       <Route path="/ArtPlacePage" element={<ArtPlacePage/>}/>
  //       <Route path="/AboutPage" element={<About/>}/>
  //       <Route path="/CoffeeBirdsPage" element={<CoffeeBirds/>}/>
  //       <Route path="/HealthPage" element={<Health/>}/>
  //       <Route path="/MtTravelPage" element={<MtTravel/>}/>
  //       <Route path="/SafetyPage" element={<Safety/>}/>
  //     </Routes>
  //   <Footer/>
  // </div>
}

export default App;
