const CartDetails = () => {
  return (
    <div className="cart-detail">
      <a
        href="javascript:void(0);"
        className="btn btn-outline-secondary w-100 m-b20"
      >
        Bank Offer 5% Cashback
      </a>
      <div className="icon-bx-wraper style-4 m-b15">
        <div className="icon-bx">
          <i className="flaticon flaticon-ship"></i>
        </div>
        <div className="icon-content">
          <span className=" font-14">Easy Returns</span>
          <h6 className="dz-title">30 Days</h6>
        </div>
      </div>
      <div className="icon-bx-wraper style-4 m-b30">
        <div className="icon-bx">
          <img src="images/shop/shop-cart/icon-box/pic2.png" alt="/" />
        </div>
        <div className="icon-content">
          <h6 className="dz-title">Enjoy The Product</h6>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
          </p>
        </div>
      </div>
      <div className="save-text">
        <i className="icon feather icon-check-circle"></i>
        <span className="m-l10">You will save ₹504 on this order</span>
      </div>
      <table>
        <tbody>
          <tr className="total">
            <td>
              <h6 className="mb-0">Total</h6>
            </td>
            <td className="price">$125.75</td>
          </tr>
        </tbody>
      </table>
      <a
        href="shop-wishlist.html"
        className="btn btn-outline-secondary btn-icon m-b20"
      >
        <svg
          width="19"
          height="17"
          viewBox="0 0 19 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.24805 16.9986C8.99179 16.9986 8.74474 16.9058 8.5522 16.7371C7.82504 16.1013 7.12398 15.5038 6.50545 14.9767L6.50229 14.974C4.68886 13.4286 3.12289 12.094 2.03333 10.7794C0.815353 9.30968 0.248047 7.9162 0.248047 6.39391C0.248047 4.91487 0.755203 3.55037 1.67599 2.55157C2.60777 1.54097 3.88631 0.984375 5.27649 0.984375C6.31552 0.984375 7.26707 1.31287 8.10464 1.96065C8.52734 2.28763 8.91049 2.68781 9.24805 3.15459C9.58574 2.68781 9.96875 2.28763 10.3916 1.96065C11.2292 1.31287 12.1807 0.984375 13.2197 0.984375C14.6098 0.984375 15.8885 1.54097 16.8202 2.55157C17.741 3.55037 18.248 4.91487 18.248 6.39391C18.248 7.9162 17.6809 9.30968 16.4629 10.7792C15.3733 12.094 13.8075 13.4285 11.9944 14.9737C11.3747 15.5016 10.6726 16.1001 9.94376 16.7374C9.75136 16.9058 9.50417 16.9986 9.24805 16.9986ZM5.27649 2.03879C4.18431 2.03879 3.18098 2.47467 2.45108 3.26624C1.71033 4.06975 1.30232 5.18047 1.30232 6.39391C1.30232 7.67422 1.77817 8.81927 2.84508 10.1066C3.87628 11.3509 5.41011 12.658 7.18605 14.1715L7.18935 14.1743C7.81021 14.7034 8.51402 15.3033 9.24654 15.9438C9.98344 15.302 10.6884 14.7012 11.3105 14.1713C13.0863 12.6578 14.6199 11.3509 15.6512 10.1066C16.7179 8.81927 17.1938 7.67422 17.1938 6.39391C17.1938 5.18047 16.7858 4.06975 16.045 3.26624C15.3152 2.47467 14.3118 2.03879 13.2197 2.03879C12.4197 2.03879 11.6851 2.29312 11.0365 2.79465C10.4585 3.24179 10.0558 3.80704 9.81975 4.20255C9.69835 4.40593 9.48466 4.52733 9.24805 4.52733C9.01143 4.52733 8.79774 4.40593 8.67635 4.20255C8.44041 3.80704 8.03777 3.24179 7.45961 2.79465C6.811 2.29312 6.07643 2.03879 5.27649 2.03879Z"
            fill="black"
          ></path>
        </svg>
        Add To Wishlist
      </a>
      <a href="shop-cart.html" className="btn btn-secondary w-100">
        ADD TO CART
      </a>
    </div>
  );
};

export default CartDetails;
