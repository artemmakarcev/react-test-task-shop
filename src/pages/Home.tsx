import { useEffect, useState, type SetStateAction } from "react";

import { getProducts } from "../services/api.js";
import CatalogItem from "../components/CatalogItem.js";

import type { ProductType } from "../types/index.js";

export const Home = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    getProducts().then((result: SetStateAction<ProductType[]>) => {
      setProducts(result);
    });
  }, []);

  if (products === null) {
    return <h2>Загрузка...</h2>;
  }

  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <h2 className="text-3xl font-bold mb-2">Список товаров</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {products.map((product: ProductType) => (
          <CatalogItem {...product} />
        ))}
      </div>
    </div>
  );
};
