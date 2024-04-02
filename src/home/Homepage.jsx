import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import About from "./about/About";
import Adv from "./adv/Adv";
import Banner from "./banner/Banner";
import Blockbuster from "./blockbuster/Blockbuster";
import FeatureCategories from "./feature/FeatureCategories";
import Products from "./products/Products";

const Homepage = () => {
  return (
    <div className="page-wraper" id="scroll-container">
      <Header />
      <Banner />
      <FeatureCategories />
      <About />
      <Products />
      <Adv />
      <Blockbuster />
      <Footer />
    </div>
  );
};

export default Homepage;
