import "./App.css";
import { useState } from "react";
import Slider from "./components/Slider.jsx";
import SearchBox from "./components/SearchBox.jsx";
import Article from "./components/Article.jsx";
import PhotoGrid from "./components/PhotoGrid.jsx";
import NavBar from "./components/NavBar.jsx";
import TextPage from "./components/TextPage.jsx";
import Menu from "./components/Menu.jsx";
import Footer from "./components/Footer.jsx";
import ExtraSection from "./components/ExtraSection.jsx";
import VerticalNavBar from "./components/VerticalNavBar";
import Slider2 from "./components/Slider2.jsx";
import "./styles/Slider.css";

function App() {
  let [navFlag, setNavFlag] = useState(false);

  return (
    <div className="sm:h-full">
      <NavBar setNavFlag={setNavFlag} navFlag={navFlag}></NavBar>
      {!navFlag ? (
        <>
          <Slider></Slider>
          <ExtraSection></ExtraSection>
          <SearchBox></SearchBox>
          <Article></Article>
          <PhotoGrid></PhotoGrid>
          <TextPage></TextPage>
          <Menu></Menu>
          <Footer></Footer>
        </>
      ) : (
        <VerticalNavBar></VerticalNavBar>
      )}
    </div>
  );
}

export default App;
