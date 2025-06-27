const Product = ({ name, price, image }) => {
  // TODO: make this grow as its container grows
  return (
    <div className="flex max-w-md min-w-xs flex-col items-center justify-center border-e-red-100">
      <img src={image} />
      <div className="text-lg font-medium">{name}</div>
      <div>${price}</div>
    </div>
  );
};

export default Product;
