import { Link } from "react-router-dom";

const AboutTop = () => {
  return (
    <section className="content-inner overflow-hidden">
      <div className="container">
        <div className="row about-style1">
          <div className="col-lg-6 col-md-12 m-b30">
            <div
              className="about-thumb wow fadeInUp position-relative"
              data-wow-delay="0.2s"
            >
              <div className="dz-media h-100">
                <img src="images/women.png" alt="" />
              </div>
              <Link
                to="/shop"
                className="btn btn-outline-secondary btn-light btn-xl"
              >
                Woman Fashion
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 align-self-center">
            <div className="about-content">
              <div
                className="section-head style-1 wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <h3 className="title">
                  Set your wardrobe with our amazing selection!
                </h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the {"industry's"}
                  standard dummy text ever since the
                </p>
              </div>
              <Link
                className="service-btn-2 wow fadeInUp"
                data-wow-delay="0.6s"
                to="/about"
              >
                <span className="icon-wrapper">
                  <svg
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.832 31.1663L31.1654 12.833"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.832 12.833H31.1654V31.1663"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>

              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div
                    className="shop-card style-6 wow fadeInUp"
                    data-wow-delay="0.8s"
                  >
                    <div className="dz-media">
                      <img src="images/shop/product/medium/1.png" alt="image" />
                    </div>
                    <div className="dz-content">
                      <Link
                        to="/shop"
                        className="btn btn-outline-secondary btn-light btn-md"
                      >
                        Baby Care
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div
                    className="shop-card style-6 wow fadeInUp"
                    data-wow-delay="1.0s"
                  >
                    <div className="dz-media h-full">
                      <img src="/images/clothe/feature/5.png" alt="image" />
                    </div>
                    <div className="dz-content">
                      <Link
                        to="/shop"
                        className="btn btn-outline-secondary btn-light btn-md"
                      >
                        Girls Beauty
                      </Link>
                    </div>
                    <span className="sale-badge">
                      5%
                      <br />
                      Sale <img src="images/star.png" alt="" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTop;
