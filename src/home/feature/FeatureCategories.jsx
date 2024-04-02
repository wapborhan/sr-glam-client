import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { useCallback, useEffect, useRef } from "react";

const FeatureCategories = () => {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

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
    <section className="shop-section overflow-hidden">
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-lg-8 left-box">
            <Swiper
              slidesPerView={4}
              autoplay
              loop
              ref={sliderRef}
              className="swiper swiper-shop"
            >
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div
                    className="shop-box style-1 wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <div className="dz-media">
                      <img
                        src="images/shop/product/clothes/1.png"
                        alt="image"
                      />
                    </div>
                    <h6 className="product-name">
                      <a href="shop-with-category.html">Shirts</a>
                    </h6>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div
                    className="shop-box style-1 wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <div className="dz-media">
                      <img
                        src="images/shop/product/clothes/2.png"
                        alt="image"
                      />
                    </div>
                    <h6 className="product-name">
                      <a href="shop-with-category.html">Shorts</a>
                    </h6>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div
                    className="shop-box style-1 wow fadeInUp"
                    data-wow-delay="0.6s"
                  >
                    <div className="dz-media">
                      <img
                        src="images/shop/product/clothes/3.png"
                        alt="image"
                      />
                    </div>
                    <h6 className="product-name">
                      <a href="shop-with-category.html">t-Shirt</a>
                    </h6>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div
                    className="shop-box style-1 wow fadeInUp"
                    data-wow-delay="0.8s"
                  >
                    <div className="dz-media">
                      <img
                        src="images/shop/product/clothes/4.png"
                        alt="image"
                      />
                    </div>
                    <h6 className="product-name">
                      <a href="shop-with-category.html">t-Jeans</a>
                    </h6>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div
                    className="shop-box style-1 wow fadeInUp"
                    data-wow-delay="0.9s"
                  >
                    <div className="dz-media">
                      <img
                        src="images/shop/product/clothes/5.png"
                        alt="image"
                      />
                    </div>
                    <h6 className="product-name">
                      <a href="shop-with-category.html">t-Jeans</a>
                    </h6>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div
                    className="shop-box style-1 wow fadeInUp"
                    data-wow-delay="1.0s"
                  >
                    <div className="dz-media">
                      <img
                        src="images/shop/product/clothes/2.png"
                        alt="image"
                      />
                    </div>
                    <h6 className="product-name">
                      <a href="shop-with-category.html">Shorts</a>
                    </h6>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div
                    className="shop-box style-1 wow fadeInUp"
                    data-wow-delay="1.1s"
                  >
                    <div className="dz-media">
                      <img
                        src="images/shop/product/clothes/3.png"
                        alt="image"
                      />
                    </div>
                    <h6 className="product-name">
                      <a href="shop-with-category.html">t-Shirt</a>
                    </h6>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
            <a className="icon-button" href="shop-standard.html">
              <div className="text-row word-rotate-box c-black border-secondary">
                <span className="word-rotate">More Collection Explore </span>
                <svg
                  className="badge__emoji"
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 35 35"
                  fill="none"
                >
                  <path
                    d="M32.2645 16.9503H4.08145L10.7508 10.4669C11.2604 9.97176 10.5046 9.1837 9.98813 9.68289C9.98815 9.68286 2.35193 17.1063 2.35193 17.1063C2.12911 17.3092 2.14686 17.6755 2.35196 17.8903C2.35193 17.8903 9.98815 25.3169 9.98815 25.3169C10.5021 25.81 11.2622 25.0367 10.7508 24.5328C10.7508 24.5329 4.07897 18.0441 4.07897 18.0441H32.2645C32.9634 18.0375 32.9994 16.9636 32.2645 16.9503Z"
                    fill="#000"
                  ></path>
                </svg>
              </div>
            </a>
          </div>
          <div className="col-lg-4 right-box">
            <div>
              <h3 className="title wow fadeInUp" data-wow-delay="1.2s">
                Featured Categories
              </h3>
              <p className="text wow fadeInUp" data-wow-delay="1.4s">
                Discover the most trending products in Pixio.
              </p>
              <div
                className="pagination-align wow fadeInUp"
                data-wow-delay="1.6s"
              >
                <div className="shop-button-prev" onClick={handlePrev}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    viewBox="0 0 35 35"
                    fill="none"
                  >
                    <path
                      d="M32.2645 16.9503H4.08145L10.7508 10.4669C11.2604 9.97176 10.5046 9.1837 9.98813 9.68289C9.98815 9.68286 2.35193 17.1063 2.35193 17.1063C2.12911 17.3092 2.14686 17.6755 2.35196 17.8903C2.35193 17.8903 9.98815 25.3169 9.98815 25.3169C10.5021 25.81 11.2622 25.0367 10.7508 24.5328C10.7508 24.5329 4.07897 18.0441 4.07897 18.0441H32.2645C32.9634 18.0375 32.9994 16.9636 32.2645 16.9503Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="shop-button-next" onClick={handleNext}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    viewBox="0 0 35 35"
                    fill="none"
                  >
                    <path
                      d="M2.73549 16.9503H30.9186L24.2492 10.4669C23.7396 9.97176 24.4954 9.1837 25.0119 9.68289L32.6481 17.1063C32.8709 17.3092 32.8531 17.6755 32.648 17.8903L25.0118 25.3169C24.4979 25.81 23.7378 25.0367 24.2492 24.5328L30.921 18.0441H2.73549C2.03663 18.0375 2.00064 16.9636 2.73549 16.9503Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <a className="icon-button" href="shop-standard.html">
              <div className="text-row word-rotate-box c-black border-white">
                <span className="word-rotate">More Collection Explore </span>
                <svg
                  className="badge__emoji"
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 35 35"
                  fill="none"
                >
                  <path
                    d="M32.2645 16.9503H4.08145L10.7508 10.4669C11.2604 9.97176 10.5046 9.1837 9.98813 9.68289C9.98815 9.68286 2.35193 17.1063 2.35193 17.1063C2.12911 17.3092 2.14686 17.6755 2.35196 17.8903C2.35193 17.8903 9.98815 25.3169 9.98815 25.3169C10.5021 25.81 11.2622 25.0367 10.7508 24.5328C10.7508 24.5329 4.07897 18.0441 4.07897 18.0441H32.2645C32.9634 18.0375 32.9994 16.9636 32.2645 16.9503Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureCategories;
