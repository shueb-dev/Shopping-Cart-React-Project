import React from "react";
import Header from "./Components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="max-w-4xl pt-16 m-auto">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
