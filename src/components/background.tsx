import  { useEffect, useState } from "react";
import pic01 from "../assets/material/pic01.jpg";
import pic02 from "../assets/material/pic02.jpg";
import pic03 from "../assets/material/pic03.jpg";
import pic04 from "../assets/material/pic04.jpg";
import pic05 from "../assets/material/pic05.jpg";
import pic06 from "../assets/material/pic06.jpg";
import pic07 from "../assets/material/pic07.jpg";
import pic08 from "../assets/material/pic08.jpg";
import pic09 from "../assets/material/pic09.jpg";
import pic10 from "../assets/material/pic10.jpg";
import pic11 from "../assets/material/pic11.jpg";
import pic12 from "../assets/material/pic12.jpg";
import pic13 from "../assets/material/pic13.jpg";
import pic14 from "../assets/material/pic14.jpg";
import pic15 from "../assets/material/pic15.jpg";
import epic01 from "../assets/electrical/pic01.jpg";
import epic02 from "../assets/electrical/pic02.jpg";
import epic03 from "../assets/electrical/pic03.jpg";
import epic04 from "../assets/electrical/pic04.jpg";
import epic05 from "../assets/electrical/pic05.jpg";
import epic06 from "../assets/electrical/pic06.jpg";
import epic07 from "../assets/electrical/pic07.jpg";
import epic08 from "../assets/electrical/pic08.jpg";
import epic09 from "../assets/electrical/pic09.jpg";
import epic10 from "../assets/electrical/pic10.jpg";
import epic11 from "../assets/electrical/pic11.jpg";
import epic12 from "../assets/electrical/pic12.jpg";
import epic13 from "../assets/electrical/pic13.jpg";
import epic14 from "../assets/electrical/pic14.jpg";
import epic15 from "../assets/electrical/pic15.jpg";

import "../styles/background.css"

export const Background = () => {
  const arrayMaterial = [
    pic01,
    pic02,
    pic03,
    pic04,
    pic05,
    pic06,
    pic07,
    pic08,
    pic09,
    pic10,
    pic11,
    pic12,
    pic13,
    pic14,
    pic15,
  ];
  const arrayElectrical = [
    epic01,
    epic02,
    epic03,
    epic04,
    epic05,
    epic06,
    epic07,
    epic08,
    epic09,
    epic10,
    epic11,
    epic12,
    epic13,
    epic14,
    epic15,
  ];
  const [row01, setrow01] = useState<string[]>([
    pic01,
    pic02,
    pic03,
    pic04,
    pic05,
    pic06,
  ]);
  const [row02, setrow02] = useState<string[]>([
    epic01,
    epic02,
    epic03,
    epic04,
    epic05,
    epic06,
  ]);
  const [row03, setrow03] = useState<string[]>([
    pic07,
    epic08,
    pic09,
    epic10,
    pic11,
    epic12,
  ]);
const getRandomImages = (array: string[], count: number) => {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};

useEffect(() => {
    setrow01(getRandomImages(arrayMaterial, 6));
    setrow02(getRandomImages(arrayElectrical, 6));
    setrow03(getRandomImages([...arrayMaterial, ...arrayElectrical], 6));
}, []);

  return (
    <div className="background">
      <div className="carousel">
        <div className="carousel-track right">
          {row01.map((item, index) => (
            <div key={index} className="carousel-slide">
              <img src={item} alt="material" />
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
