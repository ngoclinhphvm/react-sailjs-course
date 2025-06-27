import { useState } from "react";
import "./ProductForm.css";

export default function ProductForm({ onAddProduct }) {
  const [formData, setFormData] = useState({ name: "", price: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    onAddProduct(formData);
    setFormData({ name: "", price: "" });
  }

  return (
    <div className="form-container">
      <h2>Add New Product</h2>
      <form className="product-form" onSubmit={handleSubmit}>
        <p>
          <label htmlFor="name">Product Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            value={formData.name}
            autoComplete="false"
          />
        </p>
        <p>
          <label for="price">Price: </label>
          <input
            type="number"
            name="price"
            id="price"
            onChange={handleChange}
            value={formData.price}
          />
        </p>
        <p className="button">
          <button type="submit">Add Product</button>
        </p>
      </form>
    </div>
  );
}
