"use client";
import Image from "next/image";
import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import Button from "./Button";

const Opportunities = [
  {
    title: "Такси",
    image: "/taxi.webp",
  },
  {
    title: "Хүргэлт",
    image: "/pickup.webp",
  },
  {
    title: "Замын мэдээлэл харах",
    image: "/taxi.webp",
  },
  {
    title: "Урьдчилсан үнэ тооцох боломж",
    image: "/cost.webp",
  },
  {
    title: "Урьдчилсан захиалга",
    image: "/waiting.webp",
  },
  {
    title: "Үнэлгээний систем",
    image: "/rate.webp",
  },
  {
    title: "Урамшуулал , бонусын систем",
    image: "/wallet.webp",
  },
  {
    title: "Аялалын үеийн хамгаалалт",
    image: "/secure.webp",
  },
  {
    title: "Жолоочтой бичгээр харилцах",
    image: "/chat.webp",
  },
  {
    title: "Аялалаа хуваалцах",
    image: "/share.webp",
  },
];

const Tilter = () => {
  const [hoveredImage, setHoveredImage] = useState<string>(
    Opportunities[0].image // Set default to first image
  );

  const handleTitleHover = (image: string) => {
    setHoveredImage(image);
  };
  const buttonStyle = {
    marginLeft: "40px",
  };
  const buttonStyle1 = {
    marginLeft: "40px",
  };

  const firstSection = Opportunities.slice(0, 5);
  const secondSection = Opportunities.slice(5);

  return (
    <div className="flex justify-between w-full">
      <div className="opportunities w-fit ">
        {firstSection.map((opportunity, index) => (
          <Button
            key={index}
            onMouseEnter={() => handleTitleHover(opportunity.image)}
            onMouseLeave={() => {}}
            title={opportunity.title}
            style={index % 2 === 0 ? buttonStyle : undefined}
          />
        ))}
      </div>

      <Tilt tiltEnable={true} tiltMaxAngleX={25} tiltMaxAngleY={25}>
        <div className="opportunity-image cursor-all-scroll">
          <Image
            src={hoveredImage}
            alt="Hovered Image"
            width={250}
            height={400}
          />
        </div>
      </Tilt>
      <div className="opportunities">
        {secondSection.map((opportunity, index) => (
          <Button
            key={index}
            onMouseEnter={() => handleTitleHover(opportunity.image)}
            onMouseLeave={() => {}}
            title={opportunity.title}
            style={index % 2 === 1 ? buttonStyle1 : undefined}
          />
        ))}
      </div>
    </div>
  );
};

export default Tilter;
