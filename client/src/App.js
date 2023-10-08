import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Category from "./components/Category/Category.jsx";
import Products from "./components/Products/Products.jsx";
import SingleProduct from "./components/SingleProduct/SingleProduct.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import Newsleter from "./components/Footer/Newsletter/Newsletter.jsx";
import AppContext from "./utils/AppContext.jsx";

function App() {
  return (
    <BrowserRouter>
      <AppContext>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/products/:id" element={<Products />} />
          <Route path="/product/:id" element={<SingleProduct />} />
        </Routes>
        <Newsleter />
        <Footer />
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
