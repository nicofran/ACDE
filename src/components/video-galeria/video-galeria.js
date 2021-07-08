import React, { useState } from "react";
import "react-modal-video/scss/modal-video.scss";
import ModalVideo from "react-modal-video";

const VideoGalery = ({ src, title, id }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="video__container">
      <div className="video__item">
        <iframe
          width="365"
          height="260"
          src={src}
          title="YouTube video player"
          frameborder="2"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
      <p className="video__title">{title}</p>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId={id}
        onClose={() => setOpen(false)}
      />
      <button className="button__video" onClick={() => setOpen(true)}>
        Ver video
      </button>
    </div>
  );
};

export default VideoGalery;
