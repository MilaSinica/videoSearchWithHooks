import React, {useState, useEffect} from 'react';
import VideoList from "./VideoList";
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';


const App = () => {
    const [selectedVideo, setSelectedVideo] = useState();

    //custom hook to move reusable logic outside
    const {videos, onSearch, error} = useVideos("cat");

    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos])

    return (
        <div className="ui container" style={{marginTop: '10px'}}>
            {error && <h2>{error}</h2>}
            <SearchBar myOnSubmit={onSearch}/>
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail selectedVideo={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default App;