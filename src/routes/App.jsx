import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div id="detail">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}

export default App;
