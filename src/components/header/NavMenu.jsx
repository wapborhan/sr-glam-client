import { NavLink } from "react-router-dom";

const NavMenu = () => {
  return (
    <ul className="nav navbar-nav dark-nav">
      <li className="has-mega-menu sub-menu-down">
        <NavLink to="/">
          <span>Home</span>
          <i className="fas fa-chevron-down tabindex"></i>
        </NavLink>
      </li>
      <li className="has-mega-menu sub-menu-down">
        <NavLink to="/shop">
          <span>Shop</span>
          <i className="fas fa-chevron-down tabindex"></i>
        </NavLink>
      </li>
      <li className="has-mega-menu sub-menu-down">
        <NavLink to="/blog">
          <span>Blog</span>
          <i className="fas fa-chevron-down tabindex"></i>
        </NavLink>
      </li>
      <li className="has-mega-menu sub-menu-down">
        <a href="#">
          <span>Portfolio</span>
          <i className="fas fa-chevron-down tabindex"></i>
        </a>
      </li>
      <li className="has-mega-menu sub-menu-down">
        <a href="#">
          <span>Pages</span>
          <i className="fas fa-chevron-down tabindex"></i>
        </a>
      </li>
    </ul>
  );
};

export default NavMenu;
