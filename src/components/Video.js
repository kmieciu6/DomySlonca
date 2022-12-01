import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({embedId}) => (
    <div className="video">
        <iframe
            width="50%"
            height="auto"
            src={`https://www.youtube.com/embed/${embedId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title='video'
        />
    </div>
);

YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;