import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import "./Video.css";
import video1 from "../../assets/video1.mp4";
import axios from "axios";

const Video = () => {
  const [selectedVideo, setSelectedVideo] = useState("");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          "https://api.pexels.com/videos/search?query=landscape&per_page=20",
          {
            headers: {
              Authorization:
                "Aq7FzDXzYqnAuFlYq208OFV7EeaH8KBk8oCWS7Da4Wf5KgpVY8xvgunK "
            }
          }
        );
        setVideos(response.data.videos);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);
  // State to keep track of the selected video
  const handleVideoClick = (videoUrl) => {
    setSelectedVideo(videoUrl);
  };

  return (
    <div className="video">
      <h1 className="text">React JS - Challenge 2</h1>
      <div className="player-wrapper">
        {selectedVideo ? (
          <ReactPlayer url={selectedVideo} playing controls width="100%" height="100%"/>
        ) : (
          <ReactPlayer url={video1} playing controls width="100%" height="100%"/>
        )}
      </div>
      <h3 className="text">
        Video Player using{" "}
        <a href="https://www.npmjs.com/package/react-player">react-player</a>{" "}
        NPM Package
      </h3>
      <div className="thumbnail-circles">
        {videos.map((video) => (
          <div
            key={video.id}
            onClick={() => handleVideoClick(video.video_files[0].link)}
          >
            <img
              src={video.image}
              alt={video.id}
              width={80}
              height={80}
              loading="lazy"
              className="thumbnail-circle"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Video;
