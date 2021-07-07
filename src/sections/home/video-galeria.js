import React, { useState } from "react";
import "react-modal-video/scss/modal-video.scss";
import ModalVideo from "react-modal-video";

const VideoGalery = ({ src, title, id }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="video__container">
      <div className="video-item" onClick={() => setOpen(true)}>
        <iframe
          width="320"
          height="260"
          src={src}
          title="YouTube video player"
          frameborder="2"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
        <p>{title}</p>
      </div>

      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId={id}
        onClose={() => setOpen(false)}
      />
      {/* <button className="btn-primary">
          Ver video
        </button> */}
    </div>
  );
};

export default VideoGalery;
