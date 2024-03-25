import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Banner from "./banner/Banner";

const Homepage = () => {
  return (
    <div className="page-wraper" id="scroll-container">
      <Header />
      <Banner />
      <Footer />
    </div>
  );
};

export default Homepage;
