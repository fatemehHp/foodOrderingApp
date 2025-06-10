import Logo from "./Logo";
import SearchOrder from "./SearchOrder";
import { useSelector } from "react-redux";

const Header = () => {
  const userName = useSelector((state) => state.userReducer.userName);
  return (
    <header className="bg-gradient-to-r from-pink-100 via-yellow-50 to-pink-50 px-6 py-4 shadow-lg rounded-b-3xl">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <Logo />

        <SearchOrder />

        <div className="text-pink-700 font-semibold text-sm sm:text-base">
          🍕 Welcome, {userName}
        </div>
      </div>
    </header>
  );
};

export default Header;
