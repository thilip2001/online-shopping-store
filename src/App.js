import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
         <Route path="products" element={<Products />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
