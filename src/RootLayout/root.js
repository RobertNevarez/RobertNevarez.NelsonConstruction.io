import { Outlet } from "react-router-dom";

import Navi from "../Navigation/navigation";
import Footer from "../Footer/Footer";
import AnimatedRoutes from "../AnimatedRoutes/AnimatedRoutes";

function RootLayout() {
  return (
    <>
      <Navi />
      <AnimatedRoutes />
      <Footer />
    </>
  );
}

export default RootLayout;
