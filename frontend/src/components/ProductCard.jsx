// src/components/ProductCard.jsx
const ProductCard = ({ product, onDelete, onEdit }) => {
  return (
    <div className="border p-4 rounded-md shadow-lg">
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p className="text-lg">${product.price}</p>
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />

      <div className="mt-4 flex justify-between">
        {/* Delete Button */}
        <button
          onClick={() => onDelete(product._id)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete
        </button>

        {/* Edit Button */}
        <button
          onClick={() => onEdit(product._id)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
