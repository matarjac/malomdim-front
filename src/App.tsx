import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Frame from "./componnents/frame/Frame";
import HomePage from "./pages/homePage/HomePage";
import SingUpPage from "./pages/SingUpPage/SingUpPage";

function App() {
  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Frame />}>
            <Route index element={<HomePage />} />
            {/* ex to more routes
            <Route path="resturants" element={<Resturants />} /> */}
              <Route path="/SingUpPage" element={<SingUpPage/>}/>
          </Route>  
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


