export type ColorType = {
  id: number;
  name: string;
  images: string[];
  price: string;
  description: string;
  sizes: number[];
};

export type ProductType = {
  id: number;
  name: string;
  colors: ColorType[];
};

export type SizeType = {
  id: number;
  label: string;
  number: number;
};

export type CombinedData = {
  id: number;
  product: ProductType[];
  color: string;
  size: string;
};
