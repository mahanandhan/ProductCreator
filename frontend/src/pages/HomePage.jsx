// src/pages/HomePage.jsx
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // Fetch products from the backend
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("http://localhost:5000/products");
      const data = await response.json();
      setProducts(data.data);
    };

    fetchProducts();
  }, []);

  // Handle product deletion
  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:5000/products/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();

    if (data.success) {
      setProducts(products.filter((product) => product._id !== id));
    } else {
      alert("Failed to delete product");
    }
  };

  // Handle product edit navigation
  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl text-center mb-8">Current Products 🚀</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))
        ) : (
          <div className="text-center text-xl text-gray-500">No products found.</div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
