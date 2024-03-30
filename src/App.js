import "./App.css";
import Home from "./pages/home/home";
import Feature from "./pages/features/features";
import Products from "./pages/products/product";
import Categories from "./pages/categories/categories";
import Reviews from "./pages/reviews/reviews";
import Blogs from "./pages/blogs/blogs";
import Contactus from "./pages/contactus/contactus";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Feature" element={<Feature />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Categories" element={<Categories />} />
          <Route path="/Reviews" element={<Reviews />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/Contactus" element={<Contactus />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
