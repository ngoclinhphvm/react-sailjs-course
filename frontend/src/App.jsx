import Homepage from "./components/Homepage";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";
import About from "./components/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}>
          <Route path="products" element={<ProductList />} />
          <Route path="add" element={<ProductForm />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
