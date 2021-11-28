import { useEffect, useState } from "react";
import AOS from "aos";
import { SliderCards } from "../Slider";
import settings from "./cardSettings.json";
import cards from "./cardsInfo.json";
export const Projects = () => {
  const [selectedTech, setselectedTech] = useState("React");
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  const handler = (e) => {
    console.log("e", e);
    setselectedTech(e.target.id);
  };

  return (
    <div id="portfolio" className="container Portfolio" data-aos="fade-right">
      <h2 className="about-title">PORTFOLIO</h2>
      <div
        className="btn-group btn-picker"
        role="group"
        aria-label="Basic example"
        onClick={handler}
      >
        <button type="button" id="React" className="btn btn-primary">
          React
        </button>
        <button type="button" id="Next" className="btn btn-primary">
          Next
        </button>
      </div>

      <SliderCards settings={settings} cards={cards[selectedTech]} />
    </div>
  );
};
