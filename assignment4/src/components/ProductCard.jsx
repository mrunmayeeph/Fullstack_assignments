import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div className="border p-4 rounded shadow">
      <img src={product.image} alt={product.name} className="h-40 w-full object-cover mb-2" />
      <h3 className="font-bold text-lg">{product.name}</h3>
      <p className="text-blue-600">${product.price}</p>
      <button
        onClick={() => navigate(`/product/${product.id}`)}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        View Details
      </button>
    </div>
  );
};
export default ProductCard;
