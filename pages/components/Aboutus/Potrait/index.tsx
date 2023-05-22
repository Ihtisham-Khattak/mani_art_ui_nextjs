import React from "react";
import Image from "next/image";

const Portrait: React.FC = () => {
  const imageData = [
    {
      id: 1,
      title: "Charcoal on canson sheet",
      description: "SOLD Size: A4",
      imageUrl: "/images/gallery/Gallery15.jpeg",
    },
    {
      id: 2,
      title: "APassion",
      description: "Charcol on canson sheet, Price: 10000PKR, Size : A4",
      imageUrl: "/images/gallery/Gallery14.jpeg",
    },
    {
      id: 3,
      title: "BEAUTY",
      description: "Medium : Water Color, SOLD, A4 size",
      imageUrl: "/images/gallery/Gallery3.jpeg",
    },
    {
      id: 4,
      title: "KASHMIR",
      description: "Acrylic on canvas, Price : 10000PKR, 8×12 inches",
      imageUrl: "/images/gallery/Gallery12.jpeg",
    },
    {
      id: 5,
      title: "BEAUTY",
      description: "Acrylic on canvas, Price: 7000PKR, 8×8 inches",
      imageUrl: "/images/gallery/Gallery11.jpeg",
    },
    {
      id: 6,
      title: "PARDA",
      description: "Oil on canvas, Price: 15000PKR, 8×8 inches",
      imageUrl: "/images/gallery/Gallery10.jpeg",
    },
    {
      id: 7,
      title: "پښتنہ",
      description: "Oil on canvas, Price: 25000PKR, 10×10 inches",
      imageUrl: "/images/gallery/Gallery9.jpeg",
    },
    {
      id: 8,
      title: "پښتنہ",
      description: "Oil on canvas, Price: 25000PKR, 10×10 inches",
      imageUrl: "/images/gallery/Gallery8.jpeg",
    },
    {
      id: 8,
      title: "Imran khan",
      description: "Oil on canvas, Price: 25000PKR, 10×10 inches",
      imageUrl: "/images/gallery/imranKhan.jpeg",
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
export default Portrait;
