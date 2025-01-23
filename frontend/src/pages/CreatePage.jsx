// src/pages/CreatePage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePage = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    const data = await response.json();

    if (data.success) {
      navigate("/"); // Redirect to HomePage after successful product creation
    } else {
      alert("Failed to create product");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl text-center mb-8">Create New Product 🚀</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
        <div>
          <label className="block text-lg">Product Name</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-lg">Price</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-lg">Image URL</label>
          <input
            type="text"
            name="image"
            value={product.image}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <button type="submit" className="w-full p-3 bg-green-500 text-white rounded-md">
          Create Product
        </button>
      </form>
    </div>
  );
};

export default CreatePage;
