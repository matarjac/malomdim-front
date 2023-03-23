import { Outlet, Link } from "react-router-dom";
import Footer from "..//footer/Footer";
import Header from "..//header/header";



const Frame = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Frame;