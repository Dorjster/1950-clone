"use client";
import React from "react";
import Tilt from "react-parallax-tilt";

const Oportunities = [
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
    image: "/.webp",
  },
  {
    title: "Аялалын үеийн хамгаалалт",
    image: "/taxi.webp",
  },
  {
    title: "Жолоочтой бичгээр харилцах",
    image: "/chat.webp",
  },
  {
    title: "Аялалаа хуваалцах",
    image: "/taxi.webp",
  },
];

const Tilter = () => {
  return (
    <div>
      <Tilt></Tilt>
    </div>
  );
};

export default Tilter;
