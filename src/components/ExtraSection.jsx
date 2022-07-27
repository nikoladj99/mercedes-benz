import React from "react";

function ExtraSection() {
  return (
    <div className="bg-white sm:w-0 sm:h-0 sm:invisible visible">
      <div className="text-2xl tbx p-2">
        <label className="text-black">Welcome to the Magical Garage.</label>
        <button className="btnDis">Discover now</button>
      </div>
    </div>
  );
}

export default ExtraSection;
