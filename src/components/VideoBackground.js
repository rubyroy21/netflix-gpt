import React from "react";
import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store?.movies?.trailerVideo);
  useTrailerVideo(movieId);

  return (
    <div
      className="relative w-full h-0 overflow-hidden"
      style={{ paddingBottom: "56.25%" }}
    >
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&modestbranding=1&controls=0&showinfo=0&rel=0`}
        allowFullScreen
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        style={{
          transform: "scale(1.2)", // Increase this value to make the video bigger
          width: "120%", // Increase width to go beyond the container
          height: "120%", // Increase height to go beyond the container
          objectFit: "cover",
          zIndex: "-1", // Ensure the video stays behind the title
        }}
      ></iframe>
    </div>
  );
};

export default VideoBackground;
