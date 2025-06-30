import { useState } from "react";

export default function ProductForm({ onAddProduct }) {
  const [formData, setFormData] = useState({ id: "", name: "", price: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const success = onAddProduct(formData);
    if (success !== false) {
      setFormData({ id: "", name: "", price: "" });
    }
  }

  return (
    <div className="flex grow-1 flex-col items-center justify-start gap-4 rounded-2xl bg-white px-10 py-5">
      <div className="w-full">
        <h2 className="block text-center text-2xl">Add New Product</h2>
      </div>
      <form onSubmit={handleSubmit} className="">
        <p className="h-10">
          <label htmlFor="id" className="inline-block w-35 text-right text-lg">
            Identifier:
          </label>
          <input
            type="number"
            name="id"
            id="id"
            onChange={handleChange}
            value={formData.id}
            autoComplete="false"
            required
            className="ml-4 h-3/4 rounded-sm border-1 border-black bg-white pl-1 outline-none"
          />
        </p>
        <p className="h-10">
          <label
            htmlFor="name"
            className="inline-block w-35 text-right text-lg"
          >
            Product Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            value={formData.name}
            autoComplete="false"
            required
            className="ml-4 h-3/4 rounded-sm border-1 border-black bg-white pl-1 outline-none"
          />
        </p>
        <p className="h-10">
          <label for="price" className="inline-block w-35 text-right text-lg">
            Price:
          </label>
          <input
            type="number"
            name="price"
            id="price"
            onChange={handleChange}
            value={formData.price}
            required
            className="ml-4 h-3/4 rounded-sm border-1 border-black bg-white pl-1 outline-none"
          />
        </p>
        <p className="ml-40 w-40 rounded-lg bg-green-700 text-center">
          <button type="submit" className="p-2 font-bold text-white uppercase">
            Add Product
          </button>
        </p>
      </form>
    </div>
  );
}
