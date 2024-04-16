import { Link } from "react-router-dom";

const Collection = () => {
  return (
    <section className="collection-bx content-inner-3 overflow-hidden">
      <div className="container">
        <h2 className="title wow fadeInUp" data-wow-delay="0.2s">
          Upgrade your style with our top-notch collection.
        </h2>
        <div className="text-center">
          <Link
            to="/shop"
            className="btn btn-secondary btn-lg wow fadeInUp m-b30"
            data-wow-delay="0.4s"
          >
            All Collections
          </Link>
        </div>
      </div>
      <div className="collection1">
        <img src="images/collection/1.png" alt="" />
      </div>
      <div className="collection2">
        <img src="images/collection/2.png" alt="" />
      </div>
      <div className="collection3">
        <img src="images/collection/3.png" alt="" />
      </div>
      <div className="collection4">
        <img src="images/collection/4.png" alt="" />
      </div>
      <div className="collection5">
        <img src="images/collection/5.png" alt="" />
      </div>
    </section>
  );
};

export default Collection;
