import Image from "next/image";
import React from "react";

type Props = {
  name: string;
  image: string;
  price: number;
};

export const Card = ({ name, image, price }: Props) => {
  return (
    <div className="w-full bg-green-500 text-black flex flex-col justify-center items-center rounded-2xl overflow-hidden">
      <Image
        alt={name}
        src={image}
        width={400}
        height={400}
        unoptimized
        className="w-full"
      />

      <span className="pt-2">{name}</span>
      <span className="pb-2">₹{price}</span>
    </div>
  );
};
