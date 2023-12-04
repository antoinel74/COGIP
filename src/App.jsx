import "./App.css";
import { Home } from "./views/dashboard/home";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Divider } from "./components/Divider";

function App() {
  return (
    <>
      <Navbar />
      <Divider />
      <Home />
      <Footer />
    </>
  );
}

export default App;
