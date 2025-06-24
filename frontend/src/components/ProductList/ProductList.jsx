import "./ProductList.css";
import Product from "../Product/Product";

const ProductList = ({ products }) => {
  return (
    <div className="container">
      <h2>Product List</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <Product name={p.name} price={p.price} image={p.image} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;