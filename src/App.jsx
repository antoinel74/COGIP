import "./App.css";
import { Home } from "./views/dashboard/home";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default App;
