import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video pt-[13%] px-12 absolute text-white bg-gradient-to-r from-black z-10">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/3">{overview}</p>
      <div className="">
        <button className="bg-white text-black p-3 px-12 text-lg rounded-lg">
          Play
        </button>
        <button className="bg-gray-500 text-white p-3 px-12 text-lg bg-opacity-50 rounded-lg mx-2">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
