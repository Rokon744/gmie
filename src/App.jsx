import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import Products from "./components/Products";

const App = () => {
  return (
    <div>
      <Navbar />

      <main>
        <div id="home">
          <Home />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="services">
          <Services />
        </div>

        <div id="doctors">
          <Products />
        </div>

        <div id="blog">
          <Blogs />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
