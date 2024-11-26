"use client";
import React, { useState } from "react";

import Link from "next/link";
import IcardProperty from "@/interfaces/ICardProperty.interface";
import Image from "next/image";

const Card: React.FC<IcardProperty> = ({
  price,
  city,
  postalCode,
  type,
  img,
  isNew,
  statusState,
  nbrooms,
  surfaceArea,
  isFavorite,
  slug,
}) => {
  const [isLike, setIsLike] = useState(isFavorite);
  const onClickLike = () => {
    setIsLike(!isLike);
    console.log(isLike);
  };

  return (
    <div className="border rounded-lg shadow-md overflow-hidden z-0 relative">
      {/* Image et lien global */}
      <Link href={slug ? `bien/${slug}` : ""} className="block cursor-pointer">
        <div className="relative">
          <div className="w-full h-48 object-cover">
            <Image
              src={img && img?.path ? img.path : "/images/hero.jpg"}
              alt="Appartement"
              layout="fill"
              objectPosition="center"
              objectFit="cover"
            />
            {isNew && (
              <div className="absolute top-2 left-2 bg-cgr text-white text-xs font-bold px-2 py-1 rounded">
                NOUVEAU
              </div>
            )}
          </div>
        </div>
      </Link>

      {/* Bouton Favori */}
      <button
        className="absolute top-2 right-2 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md hover:bg-gray-100 z-20"
        aria-label="Ajouter aux favoris"
        onClick={(e) => {
          e.stopPropagation();
          onClickLike();
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 400.02 459.99"
          className="w-6 h-6"
        >
          <g id="Calque_1-2" data-name="Calque 1-2">
            <g>
              <path
                fill={isLike ? "#c80050" : "grey"}
                d="m200,275.44c-111.37-97.57-231.08,75.53-6.07,183.18,3.83,1.83,8.3,1.83,12.13,0,225.02-107.65,105.3-280.75-6.07-183.18h.01Z"
              />
              <path
                fill="#121416"
                d="m370.06,283.31l-47.57-47.57c-7.31-7.31-11.41-17.22-11.41-27.56v-90.5c0-1.08-.87-1.95-1.95-1.95h-23.38c-1.08,0-1.95.87-1.95,1.95v55.84c0,8.68-10.49,13.03-16.63,6.89l-65.78-65.78c-.76-.76-1.99-.76-2.76,0L29.94,283.31c-6.85,6.85-17.95,6.85-24.8,0h0c-6.85-6.85-6.85-17.95,0-24.8,35.58-35.58,138.06-138.06,178.33-178.33,9.13-9.13,23.94-9.13,33.07,0l30.19,30.19c.74.74,2,.21,2-.83v-17.19c0-6.46,5.23-11.69,11.69-11.69h74.05c6.46,0,11.69,5.23,11.69,11.69v110.99c0,4.13,1.64,8.1,4.57,11.02l44.15,44.15c6.85,6.85,6.85,17.95,0,24.8h0c-6.85,6.85-17.95,6.85-24.8,0h-.02Z"
              />
              <g>
                <path
                  fill={isLike ? "#c80050" : "grey"}
                  d="m264.4,38.58c-22.43-8.71-31.09,24.38,9.25,28.31.69.07,1.37-.18,1.85-.67,28.38-28.94.48-48.72-11.11-27.63h0Z"
                />
                <path
                  fill={isLike ? "#c80050" : "grey"}
                  d="m326.12,39.66c-14.26-25.95-48.6-1.61-13.67,34.01.6.61,1.43.91,2.28.83,49.65-4.84,38.99-45.56,11.39-34.84Z"
                />
                <path
                  fill={isLike ? "#c80050" : "grey"}
                  d="m293.33,3.6c-13.92-12.2-28.89,9.44-.76,22.9.48.23,1.04.23,1.52,0,28.13-13.46,13.16-35.09-.76-22.9h0Z"
                />
              </g>
            </g>
          </g>
        </svg>
      </button>

      {/* Informations */}
      <div className="p-4">
        <h3 className="text-sm font-semibold text-gray-700">{type}</h3>
        <p className="text-xl font-bold text-cgr">
          {statusState ? `${price} €` : `${price} € /mois`}
        </p>
        <p className="text-sm text-gray-500">
          {nbrooms} ch. · {surfaceArea} m&sup2;
        </p>
        <p className="text-sm text-gray-500">
          {postalCode} {city}
        </p>
      </div>
    </div>
  );
};

export { Card };
