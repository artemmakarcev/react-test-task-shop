import { Navigate, useParams } from "react-router";
import type { ColorType } from "../types";

type ColorPropsType = {
  colors: ColorType[];
  handleChangeColor: (productId: string, colorId: number) => void;
};

export const ColorSelector = ({ colors, handleChangeColor }: ColorPropsType): React.JSX.Element => {
  const { productId: id } = useParams();
  if (!id) return <Navigate to="/" />;

  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-2">Цвет:</h3>
      <div className="flex space-x-2">
        {colors.map((color) => (
          <button
            key={color.id}
            className="px-3 py-2 rounded-lg border-2 capitalize hover:bg-indigo-100 transition-all disabled:opacity-[0.2] cursor-pointer border-transparent"
            onClick={() => handleChangeColor(id, color.id)}
          >
            {color.name}
          </button>
        ))}
      </div>
    </div>
  );
};
