import { useEffect, useState } from "react";
import About from "./about/About";
import Adv from "./adv/Adv";
import Banner from "./banner/Banner";
import Blockbuster from "./blockbuster/Blockbuster";
import Collection from "./collection/Collection";
import FeatureCategories from "./feature/FeatureCategories";
import Products from "./products/Products";

const Homepage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional smooth scrolling behavior
    });
  };
  return (
    <>
      <Banner />
      <FeatureCategories />
      <About />
      <Products />
      <Adv />
      <Blockbuster />
      <Collection />
      <button
        className={`scroltop ${isVisible ? "visible" : ""}`}
        style={{ display: `${isVisible ? "inline-block" : ""}` }}
        onClick={handleClick}
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </>
  );
};

export default Homepage;
