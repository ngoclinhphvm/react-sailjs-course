import "./Homepage.css";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import ProductList from "../ProductList/ProductList";

export default function Homepage() {
  const products = [
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
  return (
    <div className="homepage">
      <Header />
      <main className="content">
        <Sidebar />
        <ProductList products={products} />
      </main>
    </div>
  );
}
