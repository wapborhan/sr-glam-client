import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    const handleTextChar = () => {
      const wordRotateElements = document.querySelectorAll(".word-rotate");
      wordRotateElements.forEach((data, _) => {
        const wordRotate = data.textContent.split("");
        const step = 360 / wordRotate.length;
        wordRotate.forEach((el, i) => {
          data
            .closest(".word-rotate-box")
            .insertAdjacentHTML(
              "beforeend",
              `<span class="text__char" style="--char-rotate: ${
                i * step
              }deg">${el}</span>`
            );
        });
        data.remove();
      });
    };

    handleTextChar();
  }, []);
  return (
    <div className="main-slider style-1">
      <div className="container-fluid">
        <div className="banner-content">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <Swiper className="swiper main-swiper h-100">
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <div className="swiper-content">
                      <div className="content-info">
                        <h1
                          className="title wow fadeInUp"
                          data-wow-delay="0.2s"
                          data-swiper-parallax="-20"
                        >
                          Make your fashion look mire charming
                        </h1>
                        <div
                          className="swiper-meta-items"
                          data-swiper-parallax="-50"
                        >
                          <div
                            className="meta-content wow fadeInUp"
                            data-wow-delay="0.4s"
                          >
                            <span className="price-name">Price</span>
                            <span className="price-num">$168</span>
                          </div>
                          <div
                            className="meta-content wow fadeInUp"
                            data-wow-delay="0.6s"
                          >
                            <span className="color-name">Select Size</span>
                            <div className="btn-group product-size">
                              <input
                                type="radio"
                                className="btn-check"
                                name="btnradio1"
                                id="btnradio101"
                                checked=""
                              />
                              <label className="btn" htmlFor="btnradio101">
                                S
                              </label>

                              <input
                                type="radio"
                                className="btn-check"
                                name="btnradio1"
                                id="btnradiol02"
                              />
                              <label className="btn" htmlFor="btnradiol02">
                                M
                              </label>

                              <input
                                type="radio"
                                className="btn-check"
                                name="btnradio1"
                                id="btnradiol03"
                              />
                              <label className="btn" htmlFor="btnradiol03">
                                L
                              </label>
                            </div>
                          </div>
                        </div>

                        <div
                          className="content-btn m-b30 wow fadeInUp"
                          data-wow-delay="0.8s"
                          data-swiper-parallax="-60"
                        >
                          <a
                            className="btn btn-secondary btn-lg me-xl-3 me-2 btnhover20"
                            href="shop-cart.html"
                          >
                            ADD TO CART
                          </a>
                          <a
                            className="btn btn-outline-secondary btn-lg btnhover20"
                            href="shop-standard.html"
                          >
                            VIEW DETAILS
                          </a>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="swiper-content">
                      <div className="content-info">
                        <h1
                          className="title wow fadeInUp"
                          data-wow-delay="0.2s"
                          data-swiper-parallax="-20"
                        >
                          Make your fashion look mire charming
                        </h1>
                        <div
                          className="swiper-meta-items"
                          data-swiper-parallax="-50"
                        >
                          <div
                            className="meta-content wow fadeInUp"
                            data-wow-delay="0.4s"
                          >
                            <span className="price-name">Price</span>
                            <span className="price-num">$169</span>
                          </div>
                          <div
                            className="meta-content wow fadeInUp"
                            data-wow-delay="0.6s"
                          >
                            <span className="color-name">Select Size</span>
                            <div className="btn-group product-size">
                              <input
                                type="radio"
                                className="btn-check"
                                name="btnradio1"
                                id="btnradio104"
                                checked=""
                              />
                              <label className="btn" htmlFor="btnradio104">
                                S
                              </label>

                              <input
                                type="radio"
                                className="btn-check"
                                name="btnradio1"
                                id="btnradiol05"
                              />
                              <label className="btn" htmlFor="btnradiol05">
                                M
                              </label>

                              <input
                                type="radio"
                                className="btn-check"
                                name="btnradio1"
                                id="btnradiol06"
                              />
                              <label className="btn" htmlFor="btnradiol06">
                                L
                              </label>
                            </div>
                          </div>
                        </div>

                        <div
                          className="content-btn m-b30 wow fadeInUp"
                          data-wow-delay="0.8s"
                          data-swiper-parallax="-60"
                        >
                          <a
                            className="btn btn-secondary btn-lg me-xl-3 me-2 btnhover20"
                            href="shop-cart.html"
                          >
                            ADD TO CART
                          </a>
                          <a
                            className="btn btn-outline-secondary btn-lg btnhover20"
                            href="shop-standard.html"
                          >
                            VIEW DETAILS
                          </a>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="swiper-content">
                      <div className="content-info">
                        <h1
                          className="title wow fadeInUp"
                          data-wow-delay="0.2s"
                          data-swiper-parallax="-20"
                        >
                          Make your fashion look mire charming
                        </h1>
                        <div
                          className="swiper-meta-items"
                          data-swiper-parallax="-50"
                        >
                          <div
                            className="meta-content wow fadeInUp"
                            data-wow-delay="0.4s"
                          >
                            <span className="price-name">Price</span>
                            <span className="price-num">$169</span>
                          </div>
                          <div
                            className="meta-content wow fadeInUp"
                            data-wow-delay="0.6s"
                          >
                            <span className="color-name">Select Size</span>
                            <div className="btn-group product-size">
                              <input
                                type="radio"
                                className="btn-check"
                                name="btnradio1"
                                id="btnradio107"
                                checked=""
                              />
                              <label className="btn" htmlFor="btnradio107">
                                S
                              </label>

                              <input
                                type="radio"
                                className="btn-check"
                                name="btnradio1"
                                id="btnradiol08"
                              />
                              <label className="btn" htmlFor="btnradiol08">
                                M
                              </label>

                              <input
                                type="radio"
                                className="btn-check"
                                name="btnradio1"
                                id="btnradiol09"
                              />
                              <label className="btn" htmlFor="btnradiol09">
                                L
                              </label>
                            </div>
                          </div>
                        </div>

                        <div
                          className="content-btn m-b30 wow fadeInUp"
                          data-wow-delay="0.8s"
                          data-swiper-parallax="-60"
                        >
                          <a
                            className="btn btn-secondary btn-lg me-xl-3 me-2 btnhover20"
                            href="shop-cart.html"
                          >
                            ADD TO CART
                          </a>
                          <a
                            className="btn btn-outline-secondary btn-lg btnhover20"
                            href="shop-standard.html"
                          >
                            VIEW DETAILS
                          </a>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              </Swiper>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="swiper-area">
                <Swiper className="swiper main-swiper-thumb">
                  <div className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                      <div
                        className="banner-media wow fadeInUp"
                        data-wow-delay="1.2s"
                        data-name="Winter"
                      >
                        <div
                          className="img-preview"
                          data-swiper-parallax="-100"
                        >
                          <img
                            src="images/banner/banner-media.png"
                            alt="banner-media"
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div
                        className="banner-media wow fadeInUp"
                        data-wow-delay="1.4s"
                        data-name="Summer"
                      >
                        <div
                          className="img-preview"
                          data-swiper-parallax="-100"
                        >
                          <img
                            src="images/banner/banner-media2.png"
                            alt="banner-media"
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div
                        className="banner-media wow fadeInUp"
                        data-wow-delay="1.6s"
                        data-name="Summer"
                      >
                        <div
                          className="img-preview"
                          data-swiper-parallax="-100"
                        >
                          <img
                            src="images/banner/banner-media3.png"
                            alt="banner-media"
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>
                </Swiper>
                <div className="pagination-align style-1">
                  <div className="swiper-button-next tabindex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M5 12H19"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 5L19 12L12 19"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="bottom-content wow fadeInUp"
              data-wow-delay="1.0s"
              data-swiper-parallax="-60"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="76"
                height="76"
                viewBox="0 0 76 76"
                fill="none"
              >
                <path
                  d="M52.6617 37.6496L58.7381 40.0325L75.0609 49.0874L66.6016 63.7422L49.9214 54.6872L45.1557 50.7554L46.1088 57.1892V75.18H28.952V57.1892L30.0243 50.5171L24.9011 54.6872L8.45924 63.7422L0 49.0874L16.3228 39.7942L22.3991 37.6496L16.3228 35.1475L0 26.2117L8.45924 11.557L25.1394 20.4928L30.0243 24.6629L28.952 18.3482V0H46.1088V18.3482L45.1557 24.4246L49.9214 20.4928L66.6016 11.557L75.0609 26.2117L58.7381 35.3858L52.6617 37.6496Z"
                  fill="black"
                />
              </svg>
              <div>
                <span className="sub-title">Summer Collection</span>
                <h4 className="title">
                  Trendy and Classic htmlFor the New Season
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <svg
        className="star-1"
        xmlns="http://www.w3.org/2000/svg"
        width="94"
        height="94"
        viewBox="0 0 94 94"
        fill="none"
      >
        <path
          d="M47 0L53.8701 30.4141L80.234 13.766L63.5859 40.1299L94 47L63.5859 53.8701L80.234 80.234L53.8701 63.5859L47 94L40.1299 63.5859L13.766 80.234L30.4141 53.8701L0 47L30.4141 40.1299L13.766 13.766L40.1299 30.4141L47 0Z"
          fill="#FEEB9D"
        />
      </svg>
      <svg
        className="star-2"
        xmlns="http://www.w3.org/2000/svg"
        width="82"
        height="94"
        viewBox="0 0 82 94"
        fill="none"
      >
        <path
          d="M41 0L45.277 39.592L81.7032 23.5L49.554 47L81.7032 70.5L45.277 54.408L41 94L36.723 54.408L0.296806 70.5L32.446 47L0.296806 23.5L36.723 39.592L41 0Z"
          fill="black"
        />
      </svg>
      <a
        className="animation-btn popup-youtube"
        href="https://www.youtube.com/watch?v=YwYoyQ1JdpQ"
      >
        <div className="text-row word-rotate-box c-black">
          <span className="word-rotate">More Collection Explore </span>
          <i className="fa-solid fa-play text-secondary badge__emoji"></i>
        </div>
      </a>
    </div>
  );
};

export default Banner;
