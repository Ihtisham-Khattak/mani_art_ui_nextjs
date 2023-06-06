import React from "react";
import Image from "next/image";

const Calligraphy: React.FC = () => {
  const imageData = [
    {
      id: 1,
      title: "EROTOMANIA",
      description: "Acrylic on canvas, Price: 10000PKR, 8×8 inches",
      imageUrl: "/images/gallery/Gallery21.jpeg",
    },
    {
      id: 2,
      title: "BADSHAHI MOSQUE",
      description: "Oil on canvas, Price: 10000PKR, 4×4 inches",
      imageUrl: "/images/gallery/Gallery20.jpeg",
    },
    {
      id: 3,
      title: "YOUNG HEART AT OLD AGE",
      description: "Acrylic on canvas, Price : 20000PKR, 12×18 inches",
      imageUrl: "/images/gallery/Gallery19.jpeg",
    },
    {
      id: 4,
      title: "ILLUSION",
      description: "Oil on canvas, Price: 20000PKR, 10×10 inches",
      imageUrl: "/images/gallery/Gallery18.jpeg",
    },
    {
      id: 5,
      title: "PUKHTOON",
      description: "Acrylic on canvas, SOLD, 4×4 inches",
      imageUrl: "/images/gallery/Gallery17.jpeg",
    },
    {
      id: 6,
      title: "SMOKER",
      description: "Oil on canvas, PRICE: 25000PKR, 12×18 inches",
      imageUrl: "/images/gallery/Gallery16.jpeg",
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
export default Calligraphy;
