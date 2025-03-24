import { useEffect, useState } from "react";
import "../styles/background.css";
import { MATERIAL_GALLERY, ELECTRICAL_GALLERY } from "../const/assets_manager";
export const Background = () => {
  const NUMBER_OF_IMAGES = 6;
  const [row01, setrow01] = useState<string[]>([]);
  const [row02, setrow02] = useState<string[]>([]);
  const [row03, setrow03] = useState<string[]>([]);
  const getRandomImages = (array: string[], count: number) => {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };
  useEffect(() => {
    setrow01(getRandomImages(MATERIAL_GALLERY, NUMBER_OF_IMAGES));
    setrow02(getRandomImages(ELECTRICAL_GALLERY, NUMBER_OF_IMAGES));
    setrow03(
      getRandomImages(
        [...MATERIAL_GALLERY, ...MATERIAL_GALLERY],
        NUMBER_OF_IMAGES
      )
    );
  }, []);

  return (
    <div className="background">
      <div className="carousel">
        <div className="carousel-track right">
          {row01.map((item, index) => (
            <div key={index} className="carousel-slide">
              <img className="revealBlur" src={item} alt="material" />
            </div>
          ))}
        </div>
        <div className="carousel-track left">
          {row02.map((item, index) => (
            <div key={index} className="carousel-slide">
              <img src={item} alt="material" />
            </div>
          ))}
        </div>
        <div className="carousel-track right">
          {row03.map((item, index) => (
            <div key={index} className="carousel-slide">
              <img src={item} alt="material" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
