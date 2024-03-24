const SidebarFinter = () => {
  return (
    <div
      className="offcanvas dz-offcanvas offcanvas offcanvas-end"
      tabindex="-1"
      id="offcanvasLeft"
    >
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      >
        &times;
      </button>
      <div className="offcanvas-body">
        <div className="product-description">
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
                  <div id="slider-tooltips" className="mb-3"></div>
                  <span
                    className="example-val"
                    id="slider-margin-value-min"
                  ></span>
                  <span
                    className="example-val"
                    id="slider-margin-value-max"
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
                  id="radioNoLabel1"
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
                  id="radioNoLabel2"
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
                  id="radioNoLabel3"
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
                  id="radioNoLabel4"
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
                  id="radioNoLabel5"
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
                  id="radioNoLabel6"
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
                  id="radioNoLabel7"
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
                  id="radioNoLabel8"
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
                  id="radioNoLabel9"
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
                  id="radioNoLabe20"
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
                id="btnradio11"
                checked=""
              />
              <label className="btn" for="btnradio11">
                4
              </label>

              <input
                type="radio"
                className="btn-check"
                name="btnradio1"
                id="btnradio21"
              />
              <label className="btn" for="btnradio21">
                6
              </label>

              <input
                type="radio"
                className="btn-check"
                name="btnradio1"
                id="btnradio31"
              />
              <label className="btn" for="btnradio31">
                8
              </label>

              <input
                type="radio"
                className="btn-check"
                name="btnradio1"
                id="btnradio41"
              />
              <label className="btn" for="btnradio41">
                10
              </label>

              <input
                type="radio"
                className="btn-check"
                name="btnradio1"
                id="btnradio51"
              />
              <label className="btn" for="btnradio51">
                12
              </label>

              <input
                type="radio"
                className="btn-check"
                name="btnradio1"
                id="btnradio61"
              />
              <label className="btn" for="btnradio61">
                14
              </label>

              <input
                type="radio"
                className="btn-check"
                name="btnradio1"
                id="btnradio71"
              />
              <label className="btn" for="btnradio71">
                16
              </label>

              <input
                type="radio"
                className="btn-check"
                name="btnradio1"
                id="btnradio81"
              />
              <label className="btn" for="btnradio81">
                18
              </label>

              <input
                type="radio"
                className="btn-check"
                name="btnradio1"
                id="btnradio91"
              />
              <label className="btn" for="btnradio91">
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
        </div>
      </div>
    </div>
  );
};

export default SidebarFinter;
