import { Outlet, Link } from "react-router-dom";
import SignInPage from "../../pages/signInPage/SignInPage";
import Footer from "..//footer/Footer";



const Frame = () => {
  return (
    <>
      {/* <SignInPage /> */}
      <Outlet />
      <Footer />
    </>
  );
};

export default Frame;