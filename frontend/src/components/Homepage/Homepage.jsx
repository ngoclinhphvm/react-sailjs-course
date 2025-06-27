import "./Homepage.css";
import { useState } from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import ProductList from "../ProductList/ProductList";
import ProductForm from "../ProductForm/ProductForm";

export default function Homepage() {
  function handleAddProduct(product) {
    const defaultImage = "/images/coffee.webp";
    const newProduct = {
      ...product,
      image: defaultImage,
    };
    setProducts([newProduct, ...products]);
  }

  const initialProducts = [
    {
      name: "Chocolate",
      price: "20",
      image: "/images/chocolate.webp",
    },
    {
      name: "Barista Blend",
      price: "10",
      image: "/images/barista_blend.webp",
    },
    {
      name: "Coffee",
      price: "10",
      image: "/images/coffee.webp",
    },
  ];

  const [products, setProducts] = useState(initialProducts);

  return (
    <div className="homepage">
      <Header />
      <main>
        <Sidebar />
        <div className="content">
          <ProductList products={products} />
          <ProductForm onAddProduct={handleAddProduct} />
        </div>
      </main>
    </div>
  );
}
