import React from "react";

const DetailsPic = () => {
  return (
    <div className="dz-product-detail sticky-top">
      <div className="swiper-btn-center-lr">
        <div className="swiper product-gallery-swiper2 rounded">
          <div className="swiper-wrapper" id="lightgallery2">
            <div className="swiper-slide">
              <div className="dz-media DZoomImage">
                <a
                  className="mfp-link lg-item"
                  href="/images/products/product-detail2/product1.png"
                  data-src="/images/products/product-detail2/product1.png"
                >
                  <i className="feather icon-maximize dz-maximize top-left"></i>
                </a>
                <img
                  src="/images/products/product-detail2/product1.png"
                  alt="image"
                />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="dz-media DZoomImage">
                <a
                  className="mfp-link lg-item"
                  href="/images/products/product-detail2/product2.png"
                  data-src="/images/products/product-detail2/product2.png"
                >
                  <i className="feather icon-maximize dz-maximize top-left"></i>
                </a>
                <img
                  src="/images/products/product-detail2/product2.png"
                  alt="image"
                />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="dz-media DZoomImage">
                <a
                  className="mfp-link lg-item"
                  href="/images/products/product-detail2/product3.png"
                  data-src="/images/products/product-detail2/product3.png"
                >
                  <i className="feather icon-maximize dz-maximize top-left"></i>
                </a>
                <img
                  src="/images/products/product-detail2/product3.png"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="swiper product-gallery-swiper thumb-swiper-lg">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img
                src="/images/products/product-detail2/thumb-img/1.png"
                alt="image"
              />
            </div>
            <div className="swiper-slide">
              <img
                src="/images/products/product-detail2/thumb-img/2.png"
                alt="image"
              />
            </div>
            <div className="swiper-slide">
              <img
                src="/images/products/product-detail2/thumb-img/3.png"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPic;
