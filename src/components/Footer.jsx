import React from "react";
import fbLogo from "../constants/photos/logo-facebook.svg";

function Footer() {
  return (
    <div>
      <div className="flex p-8 text-3xl">Stay informed</div>
      <hr className="mx-6 mb-4"></hr>
      <div className="flex p-8 text-sm sm:w-2/5 w-full text-neutral-500">
        Follow us and use the following social media platforms to get in contact
        with us and to share your passion for the brand, products and services
        of Mercedes-Benz.
      </div>
      <div className="flex flex-wrap px-10 text-neutral-500">
        <svg
          clip-rule="evenodd"
          fill-rule="evenodd"
          stroke-linejoin="round"
          stroke-miterlimit="2"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          class="brandhub-icon mr-12 mb-4 cursor-pointer sm:h-12 sm:w-12 h-6 w-6"
        >
          <path
            d="M512 0c282.77 0 512 230.58 512 515.02 0 257.06-187.23 470.12-432 508.76V663.89h119.3L734 515.02l-1.243-.031.564-3.539-141.32-.002v-93.037c0-38.958 18.148-76.974 75.388-80.206l8.05-.222h64.562v-126.74l-.421-.071-.023-2.045s-60.882-10.011-119.09-10.011c-121.52 0-200.94 70.956-200.94 199.42v112.92h-135.08v152.45l135.05-.045.024 357.8C169.871 961.152 6.471 779.381.161 528.281l-.166-13.256c0-284.44 229.23-515.02 512-515.02V.004z"
            fill="gray"
          ></path>
        </svg>
        <svg
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          class="brandhub-icon mr-12 cursor-pointer sm:h-12 sm:w-12 h-6 w-6"
        >
          <path
            d="M32 6.076a13.025 13.025 0 01-3.771 1.033 6.581 6.581 0 002.887-3.632 13.144 13.144 0 01-4.169 1.594 6.556 6.556 0 00-4.792-2.073 6.565 6.565 0 00-6.565 6.565c0 .514.058 1.015.17 1.496A18.643 18.643 0 012.227 4.2a6.533 6.533 0 00-.889 3.301 6.563 6.563 0 002.92 5.464 6.54 6.54 0 01-2.974-.822l-.001.083a6.57 6.57 0 005.267 6.437 6.62 6.62 0 01-2.966.112 6.571 6.571 0 006.133 4.559 13.17 13.17 0 01-8.153 2.811 13.29 13.29 0 01-1.566-.092 18.576 18.576 0 0010.064 2.95c12.076 0 18.679-10.003 18.679-18.679 0-.284-.006-.568-.018-.85a13.307 13.307 0 003.275-3.397z"
            fill="gray"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          class="brandhub-icon mr-12 cursor-pointer sm:h-12 sm:w-12 h-6 w-6"
        >
          <path
            d="M31.68 9.556s-.313-2.221-1.272-3.199c-1.217-1.284-2.581-1.29-3.206-1.365-4.478-.326-11.195-.326-11.195-.326h-.014s-6.717 0-11.195.326c-.626.074-1.989.08-3.207 1.364C.632 7.334.32 9.554.32 9.554S0 12.162 0 14.77v2.445c0 2.608.32 5.216.32 5.216s.312 2.221 1.271 3.198c1.218 1.284 2.817 1.244 3.529 1.378 2.56.248 10.88.324 10.88.324s6.724-.01 11.202-.336c.625-.076 1.989-.081 3.206-1.366.959-.978 1.272-3.198 1.272-3.198s.32-2.607.32-5.216V14.77c0-2.607-.32-5.216-.32-5.216zM12.696 20.18l-.001-9.055 8.646 4.543-8.645 4.512z"
            fill="gray"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          class="brandhub-icon mr-12 cursor-pointer sm:h-12 sm:w-12 h-6 w-6"
        >
          <path
            d="M16 7.677c-4.516 0-8.258 3.677-8.258 8.258s3.677 8.258 8.258 8.258c4.581 0 8.258-3.742 8.258-8.258S20.516 7.677 16 7.677zm0 13.549c-2.903 0-5.29-2.387-5.29-5.29s2.387-5.29 5.29-5.29 5.29 2.387 5.29 5.29-2.387 5.29-5.29 5.29zM26.452 7.484a1.871 1.871 0 11-3.743 0 1.871 1.871 0 013.743 0z"
            fill="gray"
          ></path>
          <path
            d="M29.419 2.645C27.742.903 25.355 0 22.645 0H9.355C3.742 0 0 3.742 0 9.355v13.226c0 2.774.903 5.161 2.71 6.903C4.452 31.161 6.774 32 9.42 32h13.161c2.774 0 5.097-.903 6.774-2.516C31.097 27.807 32 25.42 32 22.645V9.355c0-2.71-.903-5.032-2.581-6.71zm-.258 20c0 2-.71 3.613-1.871 4.71s-2.774 1.677-4.71 1.677H9.419c-1.935 0-3.548-.581-4.71-1.677-1.161-1.161-1.742-2.774-1.742-4.774V9.355c0-1.935.581-3.548 1.742-4.71 1.097-1.097 2.774-1.677 4.71-1.677h13.29c1.935 0 3.548.581 4.71 1.742 1.097 1.161 1.742 2.774 1.742 4.645v13.29z"
            fill="gray"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          class="brandhub-icon mr-12 cursor-pointer sm:h-12 sm:w-12 h-6 w-6"
        >
          <path
            d="M25.604 30.968V18.852s-.359-3.241-3.495-3.241c-3.134 0-3.707 3.081-3.707 3.081v12.276h-4.459l.105-20.014h6.248l-.051 2.516s1.303-3.288 6.211-3.288c4.907 0 7.13 2.82 7.543 8.093v12.694h-4.396zM4.021 8.111C1.802 8.111 0 6.524 0 4.562s1.802-3.553 4.021-3.553S8.042 2.6 8.042 4.562 6.24 8.111 4.021 8.111zm3.986 22.881H.066V11.005l7.941-.051v20.038z"
            fill="gray"
          ></path>
        </svg>
      </div>
      <hr className="mx-6 my-12"></hr>
      <hr className="mx-6 mt-12"></hr>
      <div className="flex p-6 text-sm text-neutral-500">
        This is the International website of Mercedes-Benz AG. Visitors from the
        U.S., please visit our U.S. website www.mbusa.com.
      </div>
      <div className="flex sm:flex-row flex-col">
        <div className="sm:w-1/3 text-lg flex sm:justify-start justify-center w-full text-neutral-500 my-4">
          <label className="mx-4">Deutsch</label>
          <label>English</label>
        </div>
        <nav className="flex flex-row flex-wrap  sm:justify-end w-full text-sm w-2/3 mx-6 my-4 text-neutral-500">
          <li>
            <a
              href="#"
              class="md:dark:hover:text-blue-700 mx-6"
              aria-current="page"
            >
              Provider
            </a>
          </li>
          <li>
            <a href="#" class="md:dark:hover:text-blue-700 mx-6">
              Legal Notice
            </a>
          </li>
          <li>
            <a href="#" class="md:dark:hover:text-blue-700 mx-6">
              Cookies
            </a>
          </li>
          <li>
            <a href="#" class="md:dark:hover:text-blue-700 mx-6">
              Privacy statement
            </a>
          </li>
          <li>
            <a href="#" class="md:dark:hover:text-blue-700 mx-6">
              Newsfeed(RSS)
            </a>
          </li>
          <li>
            <a href="#" class="md:dark:hover:text-blue-700 mx-6">
              Contact
            </a>
          </li>
          <li>
            <a href="#" class="md:dark:hover:text-blue-700 mx-6">
              Careers
            </a>
          </li>
          <li>
            <a href="#" class="md:dark:hover:text-blue-700 mx-6">
              Investor Relations
            </a>
          </li>
          <li>
            <a href="#" class="md:dark:hover:text-blue-700 mx-6">
              Top
            </a>
          </li>
        </nav>
      </div>
    </div>
  );
}

export default Footer;
