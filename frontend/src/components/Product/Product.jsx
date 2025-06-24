import "./Product.css";

const Product = ({ name, price, image }) => {
  return (
    <div className="product-container">
      <img src={image} />
      <div className="name">{name}</div>
      <div className="price">${price}</div>
    </div>
  );
};

export default Product;
