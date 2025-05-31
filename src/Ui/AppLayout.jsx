import Header from "./Header";
import Spinner from "./Spinner";
import { Outlet, useNavigation } from "react-router-dom";

const AppLayout = () => {
  const pageStatus = useNavigation();
  const isLoading = pageStatus.state === "loading";
  return (
    <div>
      {isLoading && <Spinner />}
      {/* header */}
      <Header />
      {/* main */}
      <main className=" mt-11 flex flex-col gap-7 py-4 ">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
