import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Pages/Hero/Hero";
import Cards from "./Pages/Cards/Cards";
import Welcome from "./Components/Welcome/Welcome";
import Owner from "./Pages/Owner/Owner";
import Accordian from "./Pages/Accordian/Accordian";
import Team from "./Pages/Team/Team";
import Footer from "./Components/Footer/Footer";
import { useState } from "react";
import SideBar from "./Components/SideBar/SideBar";
import Contact from "./Pages/Contact/Contact";
import Whatsapp from "./Components/Whastapp/Whatsapp";

function App() {
  const [menu, setMenu] = useState(false);

  const handleClick = () => {
    setMenu(!menu);
  };

  const handleFeature = () => {
    document.querySelector(".click_feature").click();
  };

  const handleContact = () => {
    document.querySelector(".click_contact").click();
  };

  const handleAbout = () => {
    document.querySelector(".click_about").click();
  };

  return (
    <>
      <Navbar
        handleFeature={handleFeature}
        menu={menu}
        handleClick={handleClick}
      />
      <SideBar
        handleAbout={handleAbout}
        handleContact={handleContact}
        handleFeature={handleFeature}
        setMenu={setMenu}
        menu={menu}
      />
      <Whatsapp />
      <Hero />
      <Cards />
      <Welcome />
      <Owner />
      <Accordian />
      <Contact />
      <Team />
      <Footer />
    </>
  );
}

export default App;
