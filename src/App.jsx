import Home from "./views/app/home";
import { DashboardHome } from "./views/dashboard/DashboardHome";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div id="detail">
        <Outlet />
      </div>
      <Footer />
      {/*       <DashboardHome /> */}
    </>
  );
}

export default App;
