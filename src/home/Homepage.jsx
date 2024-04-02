import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import About from "./about/About";
import Banner from "./banner/Banner";
import FeatureCategories from "./feature/FeatureCategories";

const Homepage = () => {
  return (
    <div className="page-wraper" id="scroll-container">
      <Header />
      <Banner />
      <FeatureCategories />
      <About />
      <Footer />
    </div>
  );
};

export default Homepage;
