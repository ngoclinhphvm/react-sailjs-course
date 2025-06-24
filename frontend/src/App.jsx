import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import ProductList from "./components/ProductList/ProductList";
import "./App.css";

function App() {
  const products = [
    {
      name: "Chocolate",
      price: "20",
      image: "../public/images/chocolate.webp",
    },
    {
      name: "Barista Blend",
      price: "10",
      image: "../public/images/barista_blend.webp",
    },
    {
      name: "Coffee",
      price: "10",
      image: "../public/images/coffee.webp",
    },
  ];

  return (
    <>
      <Header />
      <main className="content">
        <Sidebar />
        <ProductList products={products} />
      </main>
    </>
  );
}

export default App;
