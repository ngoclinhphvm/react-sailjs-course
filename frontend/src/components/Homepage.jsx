import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import ProductList from "./ProductList";
import ProductForm from "./ProductForm";

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
    <div className="h-screen bg-primary-light flex flex-col">
      <Header />
      <main className="flex flex-row p-1">
        <Sidebar />
        <div className="flex flex-1 flex-row flex-wrap gap-4 rounded-2xl p-2">
          <ProductList view="list" products={products} />
          <ProductForm onAddProduct={handleAddProduct} />
        </div>
      </main>
    </div>
  );
}
