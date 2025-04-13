import ProductCard from './ProductCard';

const products = [
  { id: 1, name: "Shoes", price: 49.99, image: "/shoes.jpg" },
  { id: 2, name: "Watch", price: 79.99, image: "/watch.jpg" },
];

const ProductList = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
    {products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);
export default ProductList;
