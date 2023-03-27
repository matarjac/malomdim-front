import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Frame from "./componnents/frame/Frame";
import HomePage from "./pages/homePage/HomePage";
import SignUpPage from "./pages/SingUpPage/SingUpPage";
import SingInPage from "./pages/SingInPage/SingInPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Frame />}>
            <Route index element={<HomePage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/sign-in" element={<SingInPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
document.body.className = 'gradient-bg';
export default App;


