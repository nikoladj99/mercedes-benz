import React from "react";
import { useState } from "react";
import cover_0 from "../constants/photos/rand-car.webp";
import cover_1 from "../constants/photos/rand_car_1.jpg";
import cover_2 from "../constants/photos/rand_car_2.jpg";
import cover_3 from "../constants/photos/rand_car_3.jpg";
import "../styles/Slider.css";

function Slider() {
  let photos = [cover_0, cover_1, cover_2, cover_3];
  const [photoPtr, setPhotoPtr] = useState(0);

  let cover = photos.at(photoPtr);

  return (
    <div
      className="bg-no-repeat w-full h-full xl:bg-cover sm:bg-contain bg-cover xl:mt-32 mt-24 bgImg"
      style={{ backgroundImage: `url(${cover})` }}
      key={photoPtr}
    >
      <div className="text-4xl tbx">
        <label className="xl:visible invisible">
          Welcome to the Magical Garage.
        </label>
        <button className="btnDis xl:visible invisible">Discover now</button>
      </div>
      <div class="flex items-center justify-between arrs">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-14 cursor-pointer    "
          viewBox="0 0 20 20"
          fill="currentColor"
          onClick={() => {
            setPhotoPtr(photoPtr - 1 == -1 ? photos.length - 1 : photoPtr - 1);
          }}
        >
          <path
            fill-rule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clip-rule="evenodd"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-14 cursor-pointer"
          viewBox="0 0 20 20"
          fill="currentColor"
          onClick={() => {
            setPhotoPtr((photoPtr + 1) % photos.length);
          }}
        >
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}

export default Slider;
