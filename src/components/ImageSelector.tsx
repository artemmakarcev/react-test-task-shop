import { useState } from "react";

interface ImageSelectorProps {
  images: string[];
}

export const ImageSelector: React.FC<ImageSelectorProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="w-full md:w-1/2 px-4 mb-8">
      <img src={images[currentIndex]} alt={`${currentIndex}`} className="w-full h-auto rounded-lg shadow-md mb-4" />

      <div className="flex gap-4 py-4 justify-center overflow-x-auto">
        {images.map((name: string, index: number) => {
          return (
            <img
              src={name}
              alt="name"
              className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
              onClick={() => setCurrentIndex(index)}
            />
          );
        })}
      </div>
    </div>
  );
};
