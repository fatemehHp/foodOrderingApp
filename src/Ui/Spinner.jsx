const Spinner = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="w-20 h-20 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
      <p className="absolute bottom-20 text-white text-lg font-semibold">
        please wait...
      </p>
    </div>
  );
};

export default Spinner;
