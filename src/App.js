import logo from "./logo.svg";
import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import ProductList from "./Components/ProductList";
import productsData from "./data/products.json";
import ProductDetail from "./Components/ProductDetail";

function App() {
  const [items, setItems] = useState(productsData.products);

  useEffect(() => {
    
    
  },[items]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Router>
        <div>
          <h1>My E-commerce App</h1>
          <Routes>
            <Route path="/" element={<ProductList products={items} />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
          </Routes>
        </div>
        </Router>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
