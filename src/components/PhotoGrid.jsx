import React from "react";
import photo1 from "../constants/photos/gridPhoto1.webp";
import photo2 from "../constants/photos/gridPhoto2.webp";
import photo3 from "../constants/photos/gridPhoto3.webp";
import photo4 from "../constants/photos/gridPhoto4.webp";
import photo5 from "../constants/photos/gridPhoto5.webp";
import photo6 from "../constants/photos/gridPhoto6.webp";
import photo7 from "../constants/photos/gridPhoto7.webp";
import photo8 from "../constants/photos/gridPhoto8.webp";
import photo9 from "../constants/photos/gridPhoto9.webp";
import photo10 from "../constants/photos/gridPhoto10.webp";
import photo11 from "../constants/photos/gridPhoto11.webp";
import photo12 from "../constants/photos/gridPhoto12.webp";
import photo13 from "../constants/photos/gridPhoto13.webp";
import photo14 from "../constants/photos/gridPhoto14.webp";
import "../styles/PhotoGrid.css";

function PhotoGrid() {
  return (
    <div className="ont-serif text-sm">
      <div className="flex  my-4 justify-center">
        <div className="flex mx-4 cursor-pointer md:dark:hover:text-blue-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 mx-2 self-center"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
              clip-rule="evenodd"
            />
            <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
          </svg>
          <label className="md:dark:hover:text-blue-700 cursor-pointer">
            News
          </label>
        </div>
        <div className=" flex mx-4 cursor-pointer md:dark:hover:text-blue-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 mx-2 self-center"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <label className="md:dark:hover:text-blue-700 cursor-pointer">
            Popular
          </label>
        </div>
        <div className="flex mx-4  cursor-pointer md:dark:hover:text-blue-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 mx-2 self-center"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              clip-rule="evenodd"
            />
          </svg>
          <label className=" cursor-pointer">Videos</label>
        </div>
      </div>
      <div className="flex flex-col font-serif">
        <div className="flex sm:flex-row flex-col">
          <div
            className="sm:w-2/3 w-full cursor-pointer photoCont"
            style={{ height: "80vh" }}
          >
            <img src={photo1} className="w-full h-full" />
            <div class="bottom-hover">
              <h1 className="my-1 text-xl">A new sense of home.</h1>
              <label className="photoLbl text-sm">
                In the EQS trough Portugal to an estate in harmony with nature
              </label>
            </div>
          </div>
          <div className="flex flex-col sm:w-1/3 w-full">
            <div
              style={{ height: "40vh" }}
              className="cursor-pointer photoCont"
            >
              <img src={photo2} className="w-full h-full" />
              <div class="bottom-hover">
                <h1 className="my-1 text-xl ">Forza,AMG.</h1>
                <label className="photoLbl text-sm">
                  The “Forza Horizon 5” driving game promises unparalleled
                  experiences in a hyperrealistic setting with the M...
                </label>
              </div>
            </div>
            <div
              className="cursor-pointer photoCont"
              style={{ height: "40vh" }}
            >
              <img src={photo3} className="w-full h-full" />
              <div class="bottom-hover">
                <h1 className="my-1 text-xl ">
                  Special exhibition, "55 YEARS AMG - CHANGING THE GAME"
                </h1>
                <label className="photoLbl text-sm">
                  Special exhibition “55 YEARS AMG – CHANGING THE GAME” at the
                  Mercedes-Benz Museum.
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col">
          <div
            className="sm:w-1/3 w-full cursor-pointer photoCont"
            style={{ height: "40vh" }}
          >
            <img src={photo4} className="h-full" />
            <div class="bottom-hover">
              <h1 className="my-1 text-xl ">Mercedes-EQ Formula E Team.</h1>
              <label className="photoLbl text-sm">
                Welcome to the Mercedes-EQ Formula E Team. Discover all about
                racing and our drive for lifestyle, sustainab...
              </label>
            </div>
          </div>
          <div
            className="sm:w-1/3 w-full cursor-pointer photoCont"
            style={{ height: "40vh" }}
          >
            <img src={photo5} className="h-full" />
            <div class="bottom-hover">
              <h1 className="my-1 text-xl ">
                Marrakesh 2022: Damage limitation.
              </h1>
              <label className="photoLbl text-sm">
                The ABB FIA Formula E World Championship returned to Marrakesh
                this weekend for the first time since 2019. ...
              </label>
            </div>
          </div>
          <div
            className="sm:w-1/3 w-full cursor-pointer photoCont"
            style={{ height: "40vh" }}
          >
            <img src={photo6} className="h-full" />
            <div class="bottom-hover">
              <h1 className="my-1 text-xl ">The future of luxury.</h1>
              <label className="photoLbl text-sm">
                In 2021, revolutionary designer Virgil Abloh worked on several
                projects together with Gorden Wagener and Me...
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex sm:flex-row flex-col">
          <div
            className="sm:w-1/3 w-full cursor-pointer photoCont"
            style={{ height: "40vh" }}
          >
            <img src={photo7} className="h-full" />
            <div class="bottom-hover">
              <h1 className="my-1 text-xl ">SL: A new dimension.</h1>
              <label className="photoLbl text-sm">
                Story of the rebirth of a sports car of the century –
                futuristically staged by designer Kasia Bodziak-Schwa...
              </label>
            </div>
          </div>
          <div className="sm:w-1/3 w-full photoCont" style={{ height: "40vh" }}>
            <img src={photo8} className="h-full cursor-pointer" />
            <div class="bottom-hover">
              <h1 className="my-1 text-xl ">
                Team braced for the sweltering heat of Marrakesh.
              </h1>
              <label className="photoLbl text-sm">
                Marrakesh is set to host the ABB FIA Formula E World
                Championship for the fifth time this coming weekend. T...
              </label>
            </div>
          </div>
          <div
            className="sm:w-1/3 w-full cursor-pointer photoCont"
            style={{ height: "40vh" }}
          >
            <img src={photo9} className="h-full " />
            <div class="bottom-hover">
              <h1 className="my-1 text-xl ">
                Studio Odeonsplatz by Mercedes-benz.
              </h1>
              <label className="photoLbl text-sm">
                Discover our unique Brand Experience Space in the very heart of
                Munich.
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="flex sm:flex-row flex-col">
        <div
          className="sm:w-2/3 w-full cursor-pointer photoCont"
          style={{ height: "80vh" }}
        >
          <img src={photo10} className="w-full h-full" />
          <div class="bottom-hover">
            <h1 className="my-1 text-xl ">
              Campains at Studio Odeonsplatz by Mercedes-benz.
            </h1>
            <label className="photoLbl text-sm">
              Constantly changing campaigns, exclusive themed worlds and
              cutting-edge installations.
            </label>
          </div>
        </div>
        <div className="flex flex-col sm:w-1/3 w-full ">
          <div style={{ height: "40vh" }} className="cursor-pointer photoCont">
            <img src={photo11} className="w-full h-full " />
            <div class="bottom-hover">
              <h1 className="my-1 text-xl ">Mercedes-EQ Run 2022.</h1>
              <label className="photoLbl text-sm">
                Sports, especially running, is time for us. It is time that we
                take for our bodies and minds. It is not jus...
              </label>
            </div>
          </div>
          <div style={{ height: "40vh" }} className="cursor-pointer photoCont">
            <img src={photo12} className="w-full h-full" />
            <div class="bottom-hover">
              <h1 className="my-1 text-xl ">
                Electric mobility and innovations by Mercedes-benz.
              </h1>
              <label className="photoLbl text-sm">
                Sports, especially running, is time for us. It is time that we
                take for our bodies and minds. It is not jus...
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="flex sm:flex-row flex-col">
        <div
          className="sm:w-1/3 w-full cursor-pointer photoCont"
          style={{ height: "40vh" }}
        >
          <img src={photo13} className="h-full" />
          <div class="bottom-hover">
            <h1 className="my-1 text-xl ">
              The G manafaktur - Icons of Unique.
            </h1>
            <label className="photoLbl text-sm">
              Striking and unique: Make your G-Class unique with the G
              manufaktur.
            </label>
          </div>
        </div>
        <div
          className="sm:w-1/3 w-full cursor-pointer photoCont"
          style={{ height: "40vh" }}
        >
          <img src={photo14} className="h-full" />
          <div class="bottom-hover">
            <h1 className="my-1 text-xl ">
              Sustaniable smile at Studio Odeonsplatz by Mercedes-benz.
            </h1>
            <label className="photoLbl text-sm">
              Sustainable Smile at Studio Odeonsplatz by Mercedes-Benz.
            </label>
          </div>
        </div>
      </div>
      <div className="text-4xl p-2 w-full flex justify-center items-start">
        <div className="btnDis flex items-center justify-center cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17 13l-5 5m0 0l-5-5m5 5V6"
            />
          </svg>
          Show more
        </div>
      </div>
    </div>
  );
}

export default PhotoGrid;
