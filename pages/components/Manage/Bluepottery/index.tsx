import React from 'react';
import Image from 'next/image';

const Bluepottery: React.FC = () => {
  const imageData = [
    {
      id: 1,
      title: 'Image 1',
      description: 'Description 1',
      imageUrl: '/images/featured/feat1.webp',
    },
    {
      id: 2,
      title: 'Image 2',
      description: 'Description 2',
      imageUrl: '/images/featured/feat1.webp',
    },
    // Add more image data objects...
  ];

  return (
    <div className="bg-fixed bg-cover bg-center min-h-screen" style={{ backgroundImage: 'url(/images/featured/feat1.webp)' }}>
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {imageData.map((image) => (
            <div key={image.id} className="flex flex-col items-center justify-center">
              <div className="relative w-64 h-64">
                <Image src={image.imageUrl} alt={image.title} layout="fill" objectFit="cover" className="rounded" />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold">{image.title}</h3>
                <p className="mt-2 text-gray-300">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bluepottery;
