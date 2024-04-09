import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import FotTop from "../components/footer/FotTop";

const Error = () => {
  return (
    <>
      <Header />
      <section className="content-inner-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10 col-md-12">
              <div className="error-page style-1">
                <div className="dz-error-media">
                  <img src="images/pic-404.png" alt="" />
                </div>
                <div className="error-inner  text-center">
                  <h1 className="dz_error">404</h1>
                  <p className="error-head">
                    Oh, no! <br /> This page does not exist.
                  </p>
                  <Link to="/" className="btn btn-secondary  text-uppercase">
                    Go to Main Page
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FotTop />
      <Footer />
    </>
  );
};

export default Error;
