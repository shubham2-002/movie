import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ genre, image, rating, id, title }) => {
  return (
    <div>
      <div class="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-72">
        <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-72">
          <img
            src={image?.medium}
            alt="card-image"
            class="object-cover w-full h-full"
          />
        </div>
        <div class="p-6">
          <div class="flex items-center justify-between mb-2">
            <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
              {title}
            </p>
            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
            {rating?.average ||11}/10
            </p>
          </div>
          <p class="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
            {genre.toString()}
          </p>
        </div>
        <Link to={`shows/${id}`}>
          <div class="p-6 pt-0">
            <button
              className=" text-center w-full bg-slate-800 p-2 rounded-md text-white"
              type="button"
            >
              Show More
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
