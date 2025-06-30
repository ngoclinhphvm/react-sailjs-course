import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import ProductList from "./ProductList";
import ProductForm from "./ProductForm";

export default function Homepage() {
  const initialProducts = [
    {
      id: 1,
      name: "Chocolate",
      price: "20",
      image: "/images/chocolate.webp",
    },
    {
      id: 2,
      name: "Barista Blend",
      price: "10",
      image: "/images/barista_blend.webp",
    },
    {
      id: 3,
      name: "Coffee",
      price: "10",
      image: "/images/coffee.webp",
    },
  ];

  const [products, setProducts] = useState(initialProducts);

  function handleAddProduct(product) {
    const idExists = products.some(
      (existingProduct) => existingProduct.id === parseInt(product.id),
    );

    if (idExists) {
      alert(
        `Product with ID ${product.id} already exists. Please use a different ID.`,
      );
      return false;
    }

    const defaultImage = "/images/coffee.webp";
    const newProduct = {
      ...product,
      id: parseInt(product.id),
      image: defaultImage,
    };
    setProducts([newProduct, ...products]);
    return true;
  }

  function handleDeleteProduct(id) {
    setProducts(products.filter((product) => product.id !== id));
  }

  return (
    <div className="bg-primary-light flex h-screen flex-col">
      <Header />
      <main className="flex flex-row p-1">
        <Sidebar />
        <div className="flex flex-1 flex-row flex-wrap gap-4 rounded-2xl p-2">
          <ProductList
            view="list"
            products={products}
            onDelete={handleDeleteProduct}
          />
          <ProductForm onAddProduct={handleAddProduct} />
        </div>
      </main>
    </div>
  );
}
