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

  // Split Opportunities array into two sections
  const firstSection = Opportunities.slice(0, 5);
  const secondSection = Opportunities.slice(5);

  return (
    <div className="flex justify-between w-full">
      <div className="opportunities">
        {firstSection.map((opportunity, index) => (
          <Button
            key={index}
            // className="opportunity-title text-white"
            onMouseEnter={() => handleTitleHover(opportunity.image)}
            onMouseLeave={() => {}}
            title={opportunity.title}
          />
        ))}
      </div>

      <Tilt tiltEnable={true} tiltMaxAngleX={10} tiltMaxAngleY={10}>
        <div className="opportunity-image">
          <Image
            src={hoveredImage}
            alt="Hovered Image"
            width={300}
            height={500}
          />
        </div>
      </Tilt>
      <div className="opportunities">
        {secondSection.map((opportunity, index) => (
          <Button
            key={index}
            // className="opportunity-title text-white"
            onMouseEnter={() => handleTitleHover(opportunity.image)}
            onMouseLeave={() => {}}
            title={opportunity.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Tilter;
