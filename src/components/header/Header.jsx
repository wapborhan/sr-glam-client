import MainHeader from "./MainHeader";
import SearchBar from "./SearchBar";
import SideBarCart from "./SideBarCart";
import SidebarFinter from "./SidebarFinter";

const Header = () => {
  return (
    <header className="site-header mo-left header style-2">
      <MainHeader />
      <SearchBar />
      <SideBarCart />
      <SidebarFinter />
    </header>
  );
};

export default Header;
