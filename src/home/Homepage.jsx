import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Banner from "./banner/Banner";
import FeatureCategories from "./feature/FeatureCategories";

const Homepage = () => {
  return (
    <div className="page-wraper" id="scroll-container">
      <Header />
      <Banner />
      <FeatureCategories />
      <Footer />
    </div>
  );
};

export default Homepage;
