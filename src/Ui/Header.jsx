import Logo from "./Logo";
import SearchOrder from "./SearchOrder";

const Header = () => {
  return (
    <header className="bg-orange-50 py-4 px-6 flex items-center justify-between shadow-md">
      {/* Logo */}
      <Logo />
      {/* Search */}
      <SearchOrder />
      <div className="flex-1 mx-4 max-w-md"></div>
      {/* User */}
      <div className="text-gray-700 text-sm sm:text-base font-medium">
        Welcome, User
      </div>
      s
    </header>
  );
};

export default Header;
