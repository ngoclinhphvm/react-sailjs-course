import Product from "./Product";

const ProductList = ({ products, view = "grid", onDelete }) => {
  return view === "grid" ? (
    <div className="flex-1 rounded-2xl bg-white px-10 py-5">
      <h2 className="text-2xl">Product List</h2>
      <ul className="flex flex-wrap">
        {products.map((p) => (
          <li key={p.id} className="min-w-xs flex-auto">
            <Product name={p.name} price={p.price} image={p.image} />
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <div className="flex grow-1 flex-col items-stretch rounded-2xl bg-white px-10 py-5">
      <h2 className="mb-2 text-2xl">Product List</h2>
      <ul>
        {products.map((p) => (
          // TODO: product id
          <li key={p.id} className="min-w-xs flex-auto">
            <Product
              view="list"
              name={p.name}
              price={p.price}
              image={p.image}
              onDelete={() => onDelete(p.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
