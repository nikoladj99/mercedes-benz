import React from "react";
import blk1 from "../constants/photos/blk1.webp";
import blk2 from "../constants/photos/blk2.webp";
import blk3 from "../constants/photos/blk3.webp";

function Article() {
  return (
    <div className="flex flex-col items-center">
      <div className="font-serif text-center sm:w-2/6 w-2/3">
        <h2 className="sm:text-2xl text-lg">
          Welcome to the Mercedes-Benz international website.
        </h2>
        <p className="mt-4">
          Exclusive reports and current films: experience a broad range of
          topics from the fascinating world of Mercedes-Benz. To find out about
          offers in your location, please go to the local Mercedes-Benz website.
        </p>
        <p className="mt-4">
          This is the International website of Mercedes-Benz AG. Visitors from
          the U.S., please visit our U.S. website www.mbusa.com.
        </p>
        <button class="bg-sky-500 text-center mt-8 mb-8 hover:bg-sky-700 text-white text-base py-1 px-3 border border-blue-700">
          Bring me to my local website
        </button>
      </div>
      <div className="flex mb-10 flex-wrap justify-center w-full">
        <div className="m-4 w-72 h-40 hover:bg-blue-500 cursor-pointer">
          <img src={blk1} className="w-full" style={{ height: "95%" }} />
        </div>
        <div className="m-4 w-72 h-40 hover:bg-blue-500 cursor-pointer">
          <img src={blk2} className="w-full" style={{ height: "95%" }} />
        </div>
        <div className="m-4 w-72 h-40 hover:bg-blue-500 cursor-pointer">
          <img src={blk3} className="w-full" style={{ height: "95%" }} />
        </div>
      </div>
    </div>
  );
}

export default Article;
