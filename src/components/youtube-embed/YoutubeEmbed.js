import React from "react";

function YoutubeEmbed({ embedId }) {
  return (
    <div className="youtube-embed">
      <iframe
        width="450"
        height="300"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
}

export default YoutubeEmbed;
