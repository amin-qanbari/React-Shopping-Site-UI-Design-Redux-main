import "./App.css";
//components
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Summer from "./pages/Summer";
import Autumn from "./pages/Autumn";
import Nightweare from "./pages/Nightweare";
import Navbar from "./components/Navbar/Navbar";

import Footer from "./components/Footer/Footer";
import Tshirt from "./pages/Tshirt";
import Shirt from "./pages/Shirt";
import LightJacket from "./pages/LightJacket";
import ProductDetail from "./pages/ProductDetail";
import AllProducts from "./components/AllProducts";
import CartCountButton from "./components/CartCountButton";

import SearchContextProvider from "./Context/SearchContextProvider";

//react-router-dom
import { Navigate, Route, Routes } from "react-router-dom";
import ShopCart from "./pages/ShopCart";

function App() {
  return (
    <div className="App">
        <SearchContextProvider>
      <Navbar/>
      <CartCountButton/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shopCart" element={<ShopCart/>} />
        <Route path="/productDetail/:id" element={<ProductDetail />} />
        <Route path="/summer" element={<Summer />} />
        <Route path="/autumn" element={<Autumn />} />
        <Route path="/nightwear" element={<Nightweare />} />
        <Route path="/t-shirt" element={<Tshirt />} />
        <Route path="/shirt" element={<Shirt />} />
        <Route path="/lightJacket" element={<LightJacket />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/allProducts" element={<AllProducts />} />
        <Route path="/*" element={<Navigate to="/" />} />

      </Routes>
      <Footer/>
      </SearchContextProvider>
    </div>
  );
}

export default App;
