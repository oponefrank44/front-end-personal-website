import { Outlet } from "react-router-dom";
import MainNavigation from "./MainNavigation/MainNavigation";
import Footer from "./Footer/Footer";

export default function RootLayout() {
  return (
    <div>
      <MainNavigation />
      <Outlet />
      <Footer />
    </div>
  );
}
