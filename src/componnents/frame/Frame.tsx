import { Outlet, Link } from "react-router-dom";
import Footer from "..//footer/Footer";



const Frame = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default Frame;