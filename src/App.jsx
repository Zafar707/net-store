import React from "react";
import Router from "./router/Router";
import Navbar from "../src/components/ui/navbar/Navbar";
import Starter from "../src/components/ui/starter/Starter";
import Footer from "../src/components/ui/footer/Footer";
const App = () => {
  return (
    <div>
      <Starter />
      <Navbar />
      <Router />
      <Footer/>
    </div>
  );
};

export default App;
