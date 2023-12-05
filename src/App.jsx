import Home from "./views/app/home";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { List } from "./components/List";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <List
        name="Jean-Kriss"
        tva="0918392"
        country="Belgistan"
        type="Supplier"
      />
      <Footer />
    </>
  );
}

export default App;
