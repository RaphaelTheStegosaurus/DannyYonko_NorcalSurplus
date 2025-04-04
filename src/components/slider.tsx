import { useEffect, useState } from "react";
import { IMAGES_GALLERY } from "../const/assets_manager";
export const Slider = () => {
  const [slider, setslider] = useState(
    IMAGES_GALLERY[Math.floor(Math.random() * IMAGES_GALLERY.length)]
  );
  const showRandomImage = (array: string[]) => {
    const randomNumber = Math.floor(Math.random() * array.length);
    return array[randomNumber];
  };
  useEffect(() => {
    const Image_Interval = setInterval(() => {
      setslider(showRandomImage(IMAGES_GALLERY));
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
