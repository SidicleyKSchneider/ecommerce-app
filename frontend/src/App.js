import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import ProductScreen from "./screens/ProductScreen";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">
            SweetStore
          </a>
        </div> 
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>
      <main>
        <Routes>
          <Route
              path="/product/:id"
              element={<ProductScreen />}
            ></Route>
          <Route exact path="/" element={<HomeScreen/>} ></Route>
        </Routes>
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
