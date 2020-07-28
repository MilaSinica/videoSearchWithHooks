import {useState, useEffect} from 'react';
import youtube from "../../api/youtube";


const useVideo = defaultTerm => {
    const [videos, setVideos] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        onSearch(defaultTerm);
    }, [defaultTerm])

    const onSearch = async term => {
        try {
            const response = await youtube.get('/search', {
                params: {
                    q: term
                },

            });
            setVideos(response.data.items);
        } catch (err) {
            setError(err.message);
        }
    }

    //could return array, which is more React-like way
    return {
        videos: videos, 
        onSearch: onSearch, 
        error: error
    };
}

export default useVideo;