import type { SizeType } from "../types";

type SizePropsType = {
  sizes: SizeType[];
  enableSizes: number[];
  handleChangeSize: (sizeId: number) => void;
};

export const SizeSelector = ({ sizes, enableSizes, handleChangeSize }: SizePropsType): React.JSX.Element => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-2">Цвет:</h3>
      <div className="flex space-x-2">
        {sizes.map((size) => (
          <button
            key={size.id}
            className="px-3 py-2 rounded-lg border-2 capitalize hover:bg-indigo-100 transition-all disabled:opacity-[0.2] cursor-pointer border-transparent"
            disabled={!enableSizes.includes(size.id)}
            onClick={() => handleChangeSize(size.id)}
          >
            {size.label}
          </button>
        ))}
      </div>
    </div>
  );
};
