import * as React from "react";
import Image from "next/image";
import Carrousel1 from "@/public/imagem1.jpg";
import Carrousel2 from "@/public/imagem 2.jpg";
import Carrousel3 from "@/public/imagem 3.jpg";

export function ImageCarousel() {
  const images = [Carrousel1, Carrousel2, Carrousel3];

  return (
    <div className="relative">
      <div className="overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
        <div className="flex">
          {images.map((image, index) => (
            <div key={index} className="flex-shrink-0 w-full max-w-xs p-1">
              <Image
                src={image}
                alt={`Carousel Image ${index + 1}`}
                className="w-full h-full object-cover rounded-lg shadow-md"
                layout="responsive"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
