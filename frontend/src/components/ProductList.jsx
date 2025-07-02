import React, { useState, useMemo } from "react";
import Product from "./Product";
import Input from "./Input";
import Button from "./Button";
import { useOutletContext } from "react-router";

const PRODUCTS_PER_PAGE = 5;

const ProductList = ({ view = "list" }) => {
  const { products, handleDeleteProduct, handleModifyProduct } =
    useOutletContext();

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const filteredProducts = useMemo(() => {
    return products.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [products, search]);

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

  const paginatedProducts = useMemo(() => {
    const start = (page - 1) * PRODUCTS_PER_PAGE;
    return filteredProducts.slice(start, start + PRODUCTS_PER_PAGE);
  }, [filteredProducts, page]);

  const handlePrev = () => setPage((p) => Math.max(1, p - 1));
  const handleNext = () => setPage((p) => Math.min(totalPages, p + 1));

  React.useEffect(() => {
    setPage(1);
  }, [search]);

  return (
    <div className="flex grow-1 flex-col items-stretch rounded-2xl bg-white px-10 py-5">
      <h2 className="mb-2 text-2xl">Product List</h2>
      <div className="mb-4 flex items-center gap-2">
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          className="w-64"
        />
      </div>
      <ul>
        {paginatedProducts.map((p) => (
          <li key={p.id} className="min-w-xs flex-auto">
            <Product
              view={view}
              name={p.name}
              price={p.price}
              image={p.image}
              onDelete={() => handleDeleteProduct(p.id)}
              onModify={() => handleModifyProduct(p.id)}
            />
          </li>
        ))}
      </ul>
      <div className="mt-4 flex items-center justify-center gap-2">
        <Button onClick={handlePrev} disabled={page === 1}>
          Prev
        </Button>
        <span>
          Page {page} / {totalPages || 1}
        </span>
        <Button
          onClick={handleNext}
          disabled={page === totalPages || totalPages === 0}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default ProductList;
