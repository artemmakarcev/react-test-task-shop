import { Link } from "react-router";
import type { ProductType } from "../types";

const CatalogItem = (product: ProductType) => {
  return (
    <div className="rounded overflow-hidden shadow-lg flex flex-col" key={product.id}>
      <Link to={`/product/${product.id}`}>
        <img className="w-full" src={product.colors[0].images[0]} alt={product.colors[0].name} />
      </Link>
      <h4 className="text-xl pl-2">{product.name}</h4>
      <p className="text-xl pl-2 text-green-500">$ {product.colors[0].price}</p>
      <Link
        to={`/product/${product.id}`}
        className="bg-white hover:bg-sky-200 border border-sky-900 rounded-md py-2 w-full text-sky-700 text-center cursor-pointer"
      >
        Подробнее
      </Link>
    </div>
  );
};

export default CatalogItem;
