import { useEffect, useState } from "react";
import { MATERIAL_GALLERY, ELECTRICAL_GALLERY } from "../const/assets_manager";
export const Slider = () => {
  const [slider, setslider] = useState(
    ELECTRICAL_GALLERY[Math.floor(Math.random() * ELECTRICAL_GALLERY.length)]
  );
  const showRandomImage = (array: string[]) => {
    const randomNumber = Math.floor(Math.random() * array.length);
    return array[randomNumber];
  };
  useEffect(() => {
    const Image_Interval = setInterval(() => {
      setslider(showRandomImage([...MATERIAL_GALLERY, ...ELECTRICAL_GALLERY]));
    }, 5000);
    return () => {
      clearInterval(Image_Interval);
    };
  }, []);
  return (
    <div
      className="slider"
      style={{
        backgroundImage: `url(${slider})`,
      }}
    ></div>
  );
};
