import React from "react";

const CoverBanner = () => {
  return (
    <div
      className="dz-bnr-inr bg-secondary overlay-black-light"
      style={{ backgroundImage: `url("images/background/bg1.jpg")` }}
    >
      <div className="container">
        <div className="dz-bnr-inr-entry">
          <h1>Shop Standard</h1>
          <nav aria-label="breadcrumb" className="breadcrumb-row">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index-2.html"> Home</a>
              </li>
              <li className="breadcrumb-item">Shop Standard</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default CoverBanner;
