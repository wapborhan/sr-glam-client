const Filter = () => {
  return (
    <div className="col-20 col-xl-3">
      <div className="sticky-xl-top">
        <a href="javascript:void(0);" className="panel-close-btn">
          <svg
            width="35"
            height="35"
            viewBox="0 0 51 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M37.748 12.5L12.748 37.5"
              stroke="white"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.748 12.5L37.748 37.5"
              stroke="white"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
        <div className="shop-filter mt-xl-2 mt-0">
          <aside>
            <div className="d-flex align-items-center justify-content-between m-b30">
              <h6 className="title mb-0 fw-normal d-flex">
                <i className="flaticon-filter me-3"></i>
                Filter
              </h6>
            </div>
            <div className="widget widget_search">
              <div className="form-group">
                <div className="input-group">
                  <input
                    name="dzSearch"
                    required="required"
                    type="search"
                    className="form-control"
                    placeholder="Search Product"
                  />
                  <div className="input-group-addon">
                    <button
                      name="submit"
                      value="Submit"
                      type="submit"
                      className="btn"
                    >
                      <i className="icon feather icon-search"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="widget">
              <h6 className="widget-title">Price</h6>
              <div className="price-slide range-slider">
                <div className="price">
                  <div className="range-slider style-1">
                    <div id="slider-tooltips2" className="mb-3"></div>
                    <span
                      className="example-val"
                      id="slider-margin-value-min2"
                    ></span>
                    <span
                      className="example-val"
                      id="slider-margin-value-max2"
                    ></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="widget">
              <h6 className="widget-title">Color</h6>
              <div className="d-flex align-items-center flex-wrap color-filter ps-2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="radioNoLabel"
                    id="radioNoLabel01"
                    value="#000000"
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
                    id="radioNoLabel02"
                    value="#9BD1FF"
                    aria-label="..."
                  />
                  <span></span>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="radioNoLabel"
                    id="radioNoLabel03"
                    value="#21B290"
                    aria-label="..."
                  />
                  <span></span>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="radioNoLabel"
                    id="radioNoLabel04"
                    value="#FEC4C4"
                    aria-label="..."
                  />
                  <span></span>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="radioNoLabel"
                    id="radioNoLabel05"
                    value="#FF7354"
                    aria-label="..."
                  />
                  <span></span>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="radioNoLabel"
                    id="radioNoLabel06"
                    value="#51EDC8"
                    aria-label="..."
                  />
                  <span></span>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="radioNoLabel"
                    id="radioNoLabel07"
                    value="#B77CF3"
                    aria-label="..."
                  />
                  <span></span>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="radioNoLabel"
                    id="radioNoLabel08"
                    value="#FF4A76"
                    aria-label="..."
                  />
                  <span></span>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="radioNoLabel"
                    id="radioNoLabel09"
                    value="#3E68FF"
                    aria-label="..."
                  />
                  <span></span>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="radioNoLabel"
                    id="radioNoLabel20"
                    value="#7BEF68"
                    aria-label="..."
                  />
                  <span></span>
                </div>
              </div>
            </div>

            <div className="widget">
              <h6 className="widget-title">Size</h6>
              <div className="btn-group product-size">
                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio1"
                  id="btnradio101"
                  checked=""
                />
                <label className="btn" htmlFor="btnradio101">
                  4
                </label>

                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio1"
                  id="btnradiol02"
                />
                <label className="btn" htmlFor="btnradiol02">
                  6
                </label>

                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio1"
                  id="btnradiol03"
                />
                <label className="btn" htmlFor="btnradiol03">
                  8
                </label>

                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio1"
                  id="btnradiol04"
                />
                <label className="btn" htmlFor="btnradiol04">
                  10
                </label>

                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio1"
                  id="btnradiol05"
                />
                <label className="btn" htmlFor="btnradiol05">
                  12
                </label>

                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio1"
                  id="btnradiol06"
                />
                <label className="btn" htmlFor="btnradiol06">
                  14
                </label>

                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio1"
                  id="btnradiol07"
                />
                <label className="btn" htmlFor="btnradiol07">
                  16
                </label>

                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio1"
                  id="btnradiol08"
                />
                <label className="btn" htmlFor="btnradiol08">
                  18
                </label>

                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio1"
                  id="btnradiol09"
                />
                <label className="btn" htmlFor="btnradiol09">
                  20
                </label>
              </div>
            </div>

            <div className="widget widget_categories">
              <h6 className="widget-title">Category</h6>
              <ul>
                <li className="cat-item cat-item-26">
                  <a href="blog-category.html">Dresses</a> (10)
                </li>
                <li className="cat-item cat-item-36">
                  <a href="blog-category.html">Top &amp; Blouses</a> (5)
                </li>
                <li className="cat-item cat-item-43">
                  <a href="blog-category.html">Boots</a> (17)
                </li>
                <li className="cat-item cat-item-27">
                  <a href="blog-category.html">Jewelry</a> (13)
                </li>
                <li className="cat-item cat-item-40">
                  <a href="blog-category.html">Makeup</a> (06)
                </li>
                <li className="cat-item cat-item-40">
                  <a href="blog-category.html">Fragrances</a> (17)
                </li>
                <li className="cat-item cat-item-40">
                  <a href="blog-category.html">Shaving &amp; Grooming</a> (13)
                </li>
                <li className="cat-item cat-item-43">
                  <a href="blog-category.html">Jacket</a> (06)
                </li>
                <li className="cat-item cat-item-36">
                  <a href="blog-category.html">Coat</a> (22)
                </li>
              </ul>
            </div>

            <div className="widget widget_tag_cloud">
              <h6 className="widget-title">Tags</h6>
              <div className="tagcloud">
                <a href="blog-tag.html">Vintage </a>
                <a href="blog-tag.html">Wedding</a>
                <a href="blog-tag.html">Cotton</a>
                <a href="blog-tag.html">Linen</a>
                <a href="blog-tag.html">Navy</a>
                <a href="blog-tag.html">Urban</a>
                <a href="blog-tag.html">Business Meeting</a>
                <a href="blog-tag.html">Formal</a>
              </div>
            </div>
            <a
              href="javascript:void(0);"
              className="btn btn-sm font-14 btn-secondary btn-sharp"
            >
              RESET
            </a>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Filter;
