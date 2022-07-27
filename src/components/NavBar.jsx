import React from "react";
import "../styles/Slider.css";
import mercedes_logo from "../constants/photos/mercedes-logo.jpg";

function NavBar({ setNavFlag, navFlag }) {
  return (
    <div className="w-full">
      <div className="flex flex-row grow-0 bg-black text-sm fullHead">
        <div className="flex justify-center logoCont">
          <img src={mercedes_logo} className="xl:h-32 h-24" />
          <label className="flex flex-col whitespace-nowrap text-xs xl:text-md xl:mt-20 mt-14">
            Mercedes-Benz
          </label>
        </div>
        <div className="headAndNav">
          <div className="flex items-end xl:visible invisible headCont">
            <li className="liCont flex flex-row items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <a
                href="#"
                class="text-gray-900 dark:text-white md:dark:hover:text-blue-700"
                aria-current="page"
              >
                Provider/Privacy statement
              </a>
            </li>
            <li className="liCont">
              <a
                href="#"
                class="text-gray-900 dark:text-white md:dark:hover:text-blue-700"
                aria-current="page"
              >
                Deutsch
              </a>
            </li>
          </div>
          <nav className="flex flex-row justify-between w-full mb-7 xl:visible invisible mr-4">
            <li>
              <a
                href="#"
                class="text-gray-900 dark:text-white md:dark:hover:text-blue-700"
                aria-current="page"
              >
                Vehicles
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-gray-900 dark:text-white md:dark:hover:text-blue-700"
              >
                Desing
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-gray-900 dark:text-white md:dark:hover:text-blue-700"
              >
                Inovation
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-gray-900 dark:text-white md:dark:hover:text-blue-700"
              >
                Museum & History
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-gray-900 dark:text-white md:dark:hover:text-blue-700"
              >
                Sprots
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-gray-900 dark:text-white md:dark:hover:text-blue-700"
              >
                Events
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-gray-900 dark:text-white md:dark:hover:text-blue-700"
              >
                Lifestyle
              </a>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 cursor-pointer"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                />
              </svg>
            </li>
          </nav>
        </div>
        <div className="w-24 flex flex-col items-end mt-5 xl:w-0 xl:h-0 xl:invisible">
          <div className="flex mb-2 mr-4 sm:mr-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <label className="mt-1">Deutsch</label>
          </div>
          <div className="flex flex-row mr-4 sm:mr-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 cursor-pointer mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              onClick={() => {
                setNavFlag(!navFlag);
              }}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
