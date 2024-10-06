import { Outlet, useLocation } from "react-router";
import SideBar from "./components/SideBar/SideBar";
import Navbar from "./components/Navbar/Navbar";
function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/";
  return (
    <>
      <div className="flex w-full h-screen">
        {!isLoginPage && <SideBar />}
        <div
          className="flex flex-col w-full"
          style={{ backgroundColor: "white" }}
        >
          {!isLoginPage && (
            <div className="w-full" style={{ marginRight: "0px" }}>
              <Navbar />
            </div>
          )}
          <div className="flex-grow w-full px-6 overflow-y-scroll h-screen p-4">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
