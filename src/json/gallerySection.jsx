import React from "react";
import GallerySection from "../components/GallerySection";

const galleryItems = [
  {
    image: "https://via.placeholder.com/600x400",
    description: "A serene landscape with mountains and a calm lake.",
  },
  {
    image: "https://via.placeholder.com/600x400",
    description: "A bustling cityscape at night with vibrant lights.",
  },
  // Add more items as needed
];

const App = () => {
  return (
    <div>
      <GallerySection galleryItems={galleryItems} />
    </div>
  );
};

export default App;
