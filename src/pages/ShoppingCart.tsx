import { useEffect, useState, type SetStateAction } from "react";
import BackHome from "../components/Back";

import { getProduct, getProductColor, getSize } from "../services/api.js";

import { useCart } from "../context/CartContext";

export const ShoppingCart = () => {
  const { getItemsCart, removeItemCart } = useCart();
  const shoppingCart = getItemsCart();

  const [productsCart, setProductsCart] = useState([]);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    async function fetchData() {
      const fetchedProducts = [];
      for (const item of shoppingCart) {
        try {
          const product = await getProduct(item.productId);
          const productColor = await getProductColor(item.productId, item.colorId);
          const size = await getSize(item.sizeId);

          const combinedData = {
            id: item.id,
            product: product,
            color: productColor,
            size: size,
          };

          fetchedProducts.push(combinedData);
        } catch (error) {
          setError(error.message);
        }
      }
      setProductsCart(fetchedProducts);
    }

    fetchData();
    setIsLoading(false);
  }, [productsCart]);

  if (isLoading) {
    return <h2>Загрузка...</h2>;
  }
  if (error) return <p>error</p>;

  const handleRemoveCart = (id) => {
    removeItemCart(id);
  };
  return (
    <div>
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <h2 className="text-3xl font-bold mb-2">Корзина</h2>
        <BackHome />

        <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
          {productsCart.map((element) => {
            return (
              <li key={element.id} className="pb-3 sm:pb-4">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="shrink-0">
                    {element.color.images && element.color.images.length > 0 ? (
                      <img className="w-8 h-8 rounded-full" src={element.color.images[0]} alt={element.color.images[0]} />
                    ) : (
                      <p>No image available</p>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{element.product.name}</p>
                    <p>Color: {element.color.name}</p>
                    <p>
                      Size: {element.size.label} ({element.size.number})
                    </p>
                    <p>Price: {element.color.price}</p>
                  </div>

                  <button
                    className="flex gap-2 items-center text-white px-6 py-2 rounded-md bg-rose-500 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 cursor-pointer"
                    onClick={() => handleRemoveCart(element.id)}
                  >
                    Удалить
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
