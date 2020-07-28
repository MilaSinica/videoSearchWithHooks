import React from 'react';

const VideoDetail = ({selectedVideo}) => {
    if(!selectedVideo) {
        return (
            <div>Loading...</div>
        )
    }
    const videoUrl = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`
    return (
        <div>
            <div className="ui segment">
                <div className="ui embed">
                    <iframe src={videoUrl} title={selectedVideo.snippet.title} />
                </div>
                <h4 className="ui header">{selectedVideo.snippet.title}</h4>
                <p>{selectedVideo.snippet.description}</p>
            </div>
        </div>
    )

}

export default VideoDetail;