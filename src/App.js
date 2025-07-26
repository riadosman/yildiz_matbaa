import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import CategorysPage from "./Pages/CategorysPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Contact from "./Pages/Contact";
import Info from "./Pages/Info";
import Cart from "./Pages/Cart";
import AllProducts from "./Pages/AllProducts";
import { CartProvider } from "./Context";
function App() {
  return (
    <div>
      <BrowserRouter>
        <CartProvider>
          <Header />
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact-us" element={<Contact />} />
              {/* <Route path="/category" element={<AllProducts />} /> */}
              {/* <Route path="/category/:id" element={<CategorysPage />} /> */}
              {/* <Route path="/info/:id" element={<Info />} /> */}
              {/* <Route path="/Cart" element={<Cart />} /> */}
            </Routes>
          </div>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}
export default App;
