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
      id: 3,
      title: "CLASSIC ARABIC CALLIGRAPHY",
      description: "Acrylic on canvas, Price : 20000, 12×18 inches",
      imageUrl: "/images/gallery/Gallery3.jpeg",
    },
    {
      id: 4,
      title: "Modern Kufic Calligraphy",
      description: "Acrylic on canvas, Price : 30000, 12×18 inches",
      imageUrl: "/images/gallery/Gallery4.jpeg",
    },
    {
      id: 5,
      title: "Surah Ikhlas",
      description: "Acrylic on canvas, Price : 16000, 24×24inch",
      imageUrl: "/images/gallery/Gallery5.jpeg",
    },
    {
      id: 6,
      title: "DUROOD SHARIF",
      description: "Acrylic on canvas, SOLD, 18×24 inches",
      imageUrl: "/images/gallery/Gallery6.jpeg",
    },
    {
      id: 7,
      title: "Tasmia",
      description: "Acrylic on canvas, Price : 8000, 20×20 inches",
      imageUrl: "/images/gallery/Gallery7.jpeg",
    },
    {
      id: 8,
      title: "CLASSIC ARABIC CALLIGRAPHY",
      description: "Acrylic on canvas, Price : 20000, 12×18 inches",
      imageUrl: "/images/gallery/Gallery8.jpeg",
    },
    {
      id: 9,
      title: "CLASSIC ARABIC CALLIGRAPHY",
      description: "Acrylic on canvas, Price : 20000, 12×18 inches",
      imageUrl: "/images/gallery/Gallery9.jpeg",
    },
    {
      id: 10,
      title: "CLASSIC ARABIC CALLIGRAPHY",
      description: "Acrylic on canvas, Price : 20000, 12×18 inches",
      imageUrl: "/images/gallery/Gallery10.jpeg",
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
