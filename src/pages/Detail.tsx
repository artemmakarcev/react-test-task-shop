import { useEffect, useState, type SetStateAction } from "react";
import { useParams } from "react-router";

import cartWhite from "../assets/img/cartWhite.svg";

import { getProduct, getProductColor, getSize, getSizes } from "../services/api.js";

import type { ProductType, SizeType } from "../types/index.js";

import { ImageSelector } from "../components/ImageSelector.js";
import { ColorSelector } from "../components/ColorSelector.js";
import { SizeSelector } from "../components/SizeSelector.js";
import BackHome from "../components/Back.js";

import { useCart } from "../context/CartContext";

export const Detail = () => {
  const { addItemCart } = useCart();

  const { productId } = useParams();

  const [product, setProduct] = useState<ProductType | null>(null);

  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  const [sizes, setSizes] = useState([]);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    getProduct(productId)
      .then((res: SetStateAction<ProductType | null>) => {
        setProduct(res);
        if (res?.colors.length > 0) {
          setSelectedColor(res.colors[0]);
        }
      })
      .catch((error: { message: SetStateAction<string> }) => setError(error.message))
      .finally(() => setIsLoading(false));
  }, [productId]);

  useEffect(() => {
    getSizes()
      .then((res: SetStateAction<SizeType[]>) => setSizes(res))
      .catch((error: { message: SetStateAction<string> }) => setError(error.message));
  });

  if (isLoading) {
    return <h2>Загрузка...</h2>;
  }
  if (error) return <p>error</p>;

  const handleChangeColor = (productID: string, colorID: number): void => {
    getProductColor(productID, colorID)
      .then((res) => setSelectedColor(res))
      .catch((error) => console.error("Ошибка при загрузке продуктов:", error));
    setSelectedSize(null);
  };

  const handleChangeSize = (sizeId: number): void => {
    getSize(sizeId)
      .then((data) => setSelectedSize(data))
      .catch((error) => console.error("Ошибка при загрузке продуктов:", error));
  };

  const handleAddCart = (product, selectedColor, selectedSize) => {
    const newItem = {
      id: Date.now() + Math.random(),
      productId: product.id,
      colorId: selectedColor.id,
      sizeId: selectedSize.id,
    };
    addItemCart(newItem);
  };

  return (
    <section className="container mx-auto px-4 py-8">
      <BackHome />

      <div className="flex flex-wrap -mx-4">
        <ImageSelector images={selectedColor.images || product.colors[0].images} />

        <div className="w-full md:w-1/2 px-4">
          <p className="text-3xl font-bold mb-2">{product.name}</p>
          <div className="mb-4">
            <span className="text-2xl font-bold mr-2">$ {selectedColor.price}</span>
          </div>
          <p className="text-gray-700 mb-6">{selectedColor.description}.</p>
          <ColorSelector colors={product.colors} selectedColorId={selectedColor.id} handleChangeColor={handleChangeColor} />

          <SizeSelector
            sizes={sizes}
            selectedSizeId={selectedSize === null ? selectedColor.sizes[0] : selectedSize.id}
            enableSizes={selectedColor.sizes}
            handleChangeSize={handleChangeSize}
          />

          <div className="flex space-x-4 mb-6">
            <button
              className="flex gap-2 items-center text-white px-6 py-2 rounded-md bg-sky-500 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 cursor-pointer"
              onClick={() => handleAddCart(product, selectedColor, selectedSize)}
            >
              <img src={cartWhite} alt="cart img" />
              Добавить в корзину
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
