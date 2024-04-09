import React from "react";

const DetailsContent = () => {
  return (
    <div className="dz-product-detail style-2 p-t20 ps-0">
      <div className="dz-content">
        <div className="dz-content-footer">
          <div className="dz-content-start">
            <span className="badge bg-secondary mb-2">SALE 20% Off</span>
            <h4 className="title mb-1">
              <a href="shop-list.html">Curly Girl Beautiful Dress</a>
            </h4>
            <div className="review-num">
              <ul className="dz-rating me-2">
                <li className="star-fill">
                  <i className="flaticon-star-1"></i>
                </li>
                <li className="star-fill">
                  <i className="flaticon-star-1"></i>
                </li>
                <li className="star-fill">
                  <i className="flaticon-star-1"></i>
                </li>
                <li>
                  <i className="flaticon-star-1"></i>
                </li>
                <li>
                  <i className="flaticon-star-1"></i>
                </li>
              </ul>
              <span className="text-secondary me-2">4.7 Rating</span>
              <a href="javascript:void(0);">(5 customer reviews)</a>
            </div>
          </div>
        </div>
        <p className="para-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div className="meta-content m-b20 d-flex align-items-end">
          <div className="btn-quantity quantity-sm light d-xl-none d-blcok d-sm-block">
            <label className="form-label">Quantity</label>
            <input type="text" value="1" name="demo_vertical2" />
          </div>
        </div>
        <div className="product-num">
          <div className="btn-quantity light d-xl-block d-sm-none d-none">
            <label className="form-label">Quantity</label>
            <input type="text" value="1" name="demo_vertical2" />
          </div>
        </div>
        <div className="meta-content">
          <label className="form-label">Color</label>
          <div className="d-flex align-items-center color-filter">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="radioNoLabel"
                id="radioNoLabel21"
                value="#24262B"
                aria-label="..."
                checked
              />
              <span></span>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="radioNoLabel"
                id="radioNoLabel22"
                value="#8CB2D1"
                aria-label="..."
              />
              <span></span>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="radioNoLabel"
                id="radioNoLabel23"
                value="#0D775E"
                aria-label="..."
              />
              <span></span>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="radioNoLabel"
                id="radioNoLabel24"
                value="#FEC4C4"
                aria-label="..."
              />
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <div className="dz-info">
        <ul>
          <li>
            <strong>SKU:</strong>
          </li>
          <li>PRT584E63A</li>
        </ul>
        <ul>
          <li>
            <strong>Category:</strong>
          </li>
          <li>
            <a href="shop-standard.html">Dresses,</a>
          </li>
          <li>
            <a href="shop-standard.html">Jeans,</a>
          </li>
          <li>
            <a href="shop-standard.html">Swimwear,</a>
          </li>
          <li>
            <a href="shop-standard.html">Summer,</a>
          </li>
          <li>
            <a href="shop-standard.html">Clothing,</a>
          </li>
        </ul>
        <ul>
          <li>
            <strong>Tags:</strong>
          </li>
          <li>
            <a href="shop-standard.html">Casual,</a>
          </li>
          <li>
            <a href="shop-standard.html">Athletic,</a>
          </li>
          <li>
            <a href="shop-standard.html">Workwear,</a>
          </li>
          <li>
            <a href="shop-standard.html">Accessories,</a>
          </li>
        </ul>
        <ul className="social-icon">
          <li>
            <strong>Share:</strong>
          </li>
          <li>
            <a href="https://www.facebook.com/dexignzone" target="_blank">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/showcase/3686700/admin/"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/dexignzone/" target="_blank">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/dexignzones" target="_blank">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DetailsContent;
