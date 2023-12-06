import Home from "./views/app/home";
import { DashboardHome } from "./views/dashboard/DashboardHome";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
      {/*       <DashboardHome /> */}
    </>
  );
}

export default App;
