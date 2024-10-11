import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faMusic } from "@fortawesome/free-solid-svg-icons";
import bgmusic from "../assets/songs/bgmusic.mp3"; // Adjust the path to your audio file
import CardFrame from "./CardFrame";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <CardFrame className="relative flex justify-between items-center flex-row gap-4 px-6 w-full md:w-max">
      <div className="flex gap-4 items-center md:pr-16">
        <FontAwesomeIcon icon={faMusic} />
        <div>
          <h1 className="font-bold text-nowrap">go white boy go</h1>
          <h2 className="text-xs whitespace-nowrap text-white/80">saturn</h2>
        </div>
      </div>

      <button id="pause" className="flex justify-center" onClick={togglePlayPause}>
        <FontAwesomeIcon
          id="pauseicon"
          icon={isPlaying ? faPause : faPlay}
        />
        <audio id="song" ref={audioRef} src={bgmusic}></audio>
      </button>
    </CardFrame>

  );
};

export default AudioPlayer;
