import Logo from "./Logo";
import SearchOrder from "./SearchOrder";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-pink-100 via-yellow-50 to-pink-50 px-6 py-4 shadow-lg rounded-b-3xl">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* لوگو */}
        <Logo />

        {/* جستجوی سفارش */}
        <SearchOrder />

        {/* خوش‌آمدگویی کاربر */}
        <div className="text-pink-700 font-semibold text-sm sm:text-base">
          🍕 Welcome, User!
        </div>
      </div>
    </header>
  );
};

export default Header;
