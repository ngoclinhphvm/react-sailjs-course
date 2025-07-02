import { useState, useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router";

export default function Homepage() {
  const [products, setProducts] = useState([]);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    localStorage.setItem("theme", savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme =
      localStorage.getItem("theme") === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Failed to fetch products", err));
  }, []);

  const [modifyingProduct, setModifyingProduct] = useState(false);
  const [productToModifyId, setProductToModifyId] = useState(null);

  async function handleAddProduct(product) {
    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });
      if (!res.ok) throw new Error("Failed to add product");
      const newProduct = await res.json();
      setProducts([newProduct, ...products]);
    } catch (err) {
      alert("Error adding product");
    }
  }

  function handleDeleteProduct(id) {
    setProducts(products.filter((product) => product.id !== id));
  }

  /* TODO: there must be a better way to modify a product */
  function handleModifyProduct(id, modifiedProduct = null) {
    if (!modifiedProduct) {
      setModifyingProduct(true);
      setProductToModifyId(id);
      return;
    }

    setProducts(
      products.map((product) => {
        return product.id === modifiedProduct.id ? modifiedProduct : product;
      }),
    );

    setModifyingProduct(false);
    setProductToModifyId(null);
  }

  return (
    <div className="bg-primary-light flex h-screen flex-col dark:bg-gray-400">
      <Header onToggleTheme={toggleTheme} />

      <main className="flex flex-row p-1">
        <Sidebar />
        <div className="flex flex-1 flex-row flex-wrap gap-4 rounded-2xl p-2">
          <Outlet
            context={{
              products,
              handleDeleteProduct,
              handleModifyProduct,
              handleAddProduct,
              modifyingProduct,
              productToModifyId,
            }}
          />
        </div>
      </main>
    </div>
  );
}
