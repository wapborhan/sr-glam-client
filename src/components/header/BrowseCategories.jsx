const BrowseCategories = () => {
  return (
    <div className="browse-category-menu">
      <a href="#" className="category-btn">
        <div className="category-menu me-3">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <span className="category-btn-title"> Browse Categories </span>
        <span className="toggle-arrow ms-auto">
          <i className="icon feather icon-chevron-down"></i>
        </span>
      </a>
      <div className="category-menu-items" style={{ display: "none" }}>
        <ul className="nav navbar-nav">
          <li>
            <a href="shop-standard.html">
              <i className="icon feather icon-arrow-right"></i>
              <span>Protein Supplements</span>
            </a>
          </li>
          <li>
            <a href="shop-standard.html">
              <i className="icon feather icon-arrow-right"></i>
              <span>Fitness Equipment</span>
            </a>
          </li>
          <li>
            <a href="shop-standard.html">
              <i className="icon feather icon-arrow-right"></i>
              <span>Reusable Bags</span>
            </a>
          </li>
          <li>
            <a href="shop-standard.html">
              <i className="icon feather icon-arrow-right"></i>
              <span>Water Bottles </span>
              <span className="badge bg-purple">SALE</span>
            </a>
          </li>
          <li>
            <a href="shop-standard.html">
              <i className="icon feather icon-arrow-right"></i>
              <span>Home Assistants</span>
            </a>
          </li>
          <li>
            <a href="shop-standard.html">
              <i className="icon feather icon-arrow-right"></i>
              <span>Water Monitors</span>
            </a>
          </li>
          <li>
            <a href="shop-standard.html">
              <i className="icon feather icon-arrow-right"></i>
              <span>Baby Monitors</span>
            </a>
          </li>
          <li>
            <a href="shop-standard.html">
              <i className="icon feather icon-arrow-right"></i>
              <span>Convertible Car Seats</span>
            </a>
          </li>
          <li>
            <a href="shop-standard.html">
              <i className="icon feather icon-arrow-right"></i>
              <span>Convertible Car Seats</span>
            </a>
          </li>
          <li className="menu-items">
            <a href="#">
              <i className="flaticon-blocks me-3"></i>
              <span>More Products</span>
              <span className="menu-icon">
                <i className="icon feather icon-chevron-right"></i>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BrowseCategories;
