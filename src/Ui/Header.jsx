import Logo from "./Logo";

const Header = () => {
  return (
    <header className="bg-orange-50 py-4 px-6 flex items-center justify-between shadow-md">
      {/* Logo */}
      <Logo />
      {/* Search */}
      <div className="flex-1 mx-4 max-w-md">
        <input
          type="text"
          placeholder="Search for pizza or drinks..."
          className="w-full px-4 py-2 rounded-full border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
        />
      </div>
      {/* User */}
      <div className="text-gray-700 text-sm sm:text-base font-medium">
        Welcome, User
      </div>
    </header>
  );
};

export default Header;
