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
import pic16 from "../assets/material/pic16.jpg";
import pic17 from "../assets/material/pic17.jpg";
import pic18 from "../assets/material/pic18.jpg";
import pic19 from "../assets/material/pic19.jpg";
import pic20 from "../assets/material/pic20.jpg";
import pic21 from "../assets/material/pic21.jpg";
import pic22 from "../assets/material/pic22.jpg";
import pic23 from "../assets/material/pic23.jpg";
import pic24 from "../assets/material/pic24.jpg";
import pic25 from "../assets/material/pic25.jpg";
import pic26 from "../assets/material/pic26.jpg";
import pic27 from "../assets/material/pic27.jpg";
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
import epic16 from "../assets/electrical/pic16.jpg";
import epic17 from "../assets/electrical/pic17.jpg";
import epic18 from "../assets/electrical/pic18.jpg";
import epic19 from "../assets/electrical/pic19.jpg";
import epic20 from "../assets/electrical/pic20.jpg";
import epic21 from "../assets/electrical/pic21.jpg";
import epic22 from "../assets/electrical/pic22.jpg";
import epic23 from "../assets/electrical/pic23.jpg";
import epic24 from "../assets/electrical/pic24.jpg";
import epic25 from "../assets/electrical/pic25.jpg";
import epic26 from "../assets/electrical/pic26.jpg";
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
    pic16,
    pic17,
    pic18,
    pic19,
    pic20,
    pic21,
    pic22,
    pic23,
    pic24,
    pic25,
    pic26,
    pic27,
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
    epic16,
    epic17,
    epic18,
    epic19,
    epic20,
    epic21,
    epic22,
    epic23,
    epic24,
    epic25,
    epic26,
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
