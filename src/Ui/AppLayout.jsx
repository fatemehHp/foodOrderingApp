import Header from "./Header";
import Spinner from "./Spinner";
import { Outlet, useNavigation } from "react-router-dom";

const AppLayout = () => {
  const { state } = useNavigation();
  const isLoading = state === "loading";

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-yellow-100">
      {/* لودینگ اسپینر */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/70 backdrop-blur-sm">
          <Spinner />
        </div>
      )}

      {/* هدر ثابت */}
      <Header />

      {/* محتوای اصلی */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 mt-8 space-y-6">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
