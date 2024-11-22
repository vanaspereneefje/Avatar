import { useState } from 'react';
import Categories from './Categories';
import Items from './Items';

const topImages = [
    "../../public/shirt.png",
    "../../public/hoodie.png"
];

const bottomImages = [
    "../../public/shorts.png",
    "../../public/longPants.png"
];

const shoesImages = [
    "../../public/sneakers.png",
    "../../public/boots.png"
];

function Sidebar() {
    const [images, setImages] = useState([]);
  
    function handleCategoryClick(category) {
      if (category === 'tops') {
        setImages(topImages);
      } else if (category === 'bottoms') {
        setImages(bottomImages);
      } else if (category === 'shoes') {
        setImages(shoesImages);
      }
    }
  
    return (
      <div className="sidebar">
        <Categories onCategoryClick={handleCategoryClick} />
        <Items images={images} />
      </div>
    );
  }
  
  export default Sidebar;

