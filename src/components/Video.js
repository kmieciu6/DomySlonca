import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({embedId}) => (
    <div className="video">
        <iframe
            width="50%"
            src={`https://www.youtube.com/embed/${embedId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title='Budowa jurty'
        />
    </div>
);

YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;