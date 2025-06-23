import { Navigate, useParams } from "react-router";
import type { ColorType } from "../types";

type ColorPropsType = {
  colors: ColorType[];
  selectedColorId: number;
  handleChangeColor: (productId: string, colorId: number) => void;
};

export const ColorSelector = ({ colors, selectedColorId, handleChangeColor }: ColorPropsType): React.JSX.Element => {
  const { productId: id } = useParams();

  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-2">Цвет:</h3>
      <div className="flex space-x-2">
        {colors.map((color) => (
          <button
            key={color.id}
            className={`px-3 py-2 rounded-lg border-2 capitalize hover:bg-indigo-100 transition-all disabled:opacity-[0.2] cursor-pointer border-transparent ${
              color.id === selectedColorId ? "bg-lime-500" : ""
            }`}
            onClick={() => handleChangeColor(id, color.id)}
          >
            {color.name}
          </button>
        ))}
      </div>
    </div>
  );
};
