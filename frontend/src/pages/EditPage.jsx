// src/pages/EditPage.jsx
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditPage = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`http://localhost:5000/products/${id}`);
      const data = await response.json();
      setProduct(data.data);
    };

    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`http://localhost:5000/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    const data = await response.json();

    if (data.success) {
      navigate("/"); // Redirect to HomePage after successful update
    } else {
      alert("Failed to update product");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl text-center mb-8">Edit Product 🚀</h1>
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
        <button type="submit" className="w-full p-3 bg-blue-500 text-white rounded-md">
          Update Product
        </button>
      </form>
    </div>
  );
};

export default EditPage;
