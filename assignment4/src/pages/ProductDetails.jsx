import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const product = {
    id,
    name: "Product " + id,
    price: 99.99,
    description: "This is a detailed description of the product.",
    image: "/product.jpg"
  };

  return (
    <div className="p-6">
      <img src={product.image} className="h-64 w-full object-cover mb-4" />
      <h2 className="text-3xl font-bold">{product.name}</h2>
      <p className="text-gray-700 my-2">{product.description}</p>
      <p className="text-blue-600 text-xl font-semibold">${product.price}</p>
    </div>
  );
};

export default ProductDetails;
