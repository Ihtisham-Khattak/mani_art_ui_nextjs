import React from "react";
import Image from "next/image";

const Bluepottery: React.FC = () => {
  const imageData = [
    {
      id: 1,
      title: "Acrylic on canvas",
      description: "SOLD 10×10 inches",
      imageUrl: "/images/gallery/Gallery1.jpeg",
    },
    {
      id: 2,
      title: "Abstract calligraphy",
      description: "Acrylic on canvas, 12×18 inches, Price: 15000",
      imageUrl: "/images/gallery/Gallery2.jpeg",
    },
    {
      id: 1,
      title: "CLASSIC ARABIC CALLIGRAPHY",
      description: "Acrylic on canvas, Price : 20000, 12×18 inches",
      imageUrl: "/images/gallery/Gallery3.jpeg",
    },
    {
      id: 2,
      title: "Image 2",
      description: "Description 2",
      imageUrl: "/images/featured/feat1.webp",
    },
    {
      id: 1,
      title: "Image 1",
      description: "Description 1",
      imageUrl: "/images/featured/feat1.webp",
    },
    {
      id: 2,
      title: "Image 2",
      description: "Description 2",
      imageUrl: "/images/featured/feat1.webp",
    },
  ];

  return (
    <div className="grid grid-cols-1 text-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 px-10 rounded">
      {imageData?.map((image, index) => (
        <div key={index} className="p-2">
          <img
            src={image.imageUrl}
            alt="images"
            className="w-full h-96 object-contain rounded"
          />
          <h3 className="flex justify-center">{image.title}</h3>
          <p>{image.description}</p>
        </div>
      ))}
    </div>
  );
};
export default Bluepottery;
