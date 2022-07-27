import React from "react";

function SearchBox() {
  return (
    <div
      className="sm:py-6 sm:px-32 py-2 px-2 flex w-full "
      style={{ backgroundColor: "#141414" }}
    >
      <input
        class="font-serif text-lg block p-2 pl-5 w-full text-base text-black bg-white dark:bg-white  dark:placeholder-gray-400 dark:text-black outline-0"
        placeholder="I am looking for..."
      ></input>
      <div className="bg-white flex items-center p-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-9 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="black"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  );
}

export default SearchBox;
