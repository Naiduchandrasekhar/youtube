import { useEffect, useRef, useState } from "react"
import { YOUTUBE_MOST_POPULAR_API } from "../Utils/constants"
import VideoCard from "./VideoCard"

const VideoContainer = () => {

  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(false);

  const observorRef = useRef(null);

  const fetchMostPopularVideos = async () => {
    if (loading) return; // Prevent multiple simultaneous fetches
    setLoading(true);

    try {
      const response = await fetch(YOUTUBE_MOST_POPULAR_API);

      // Check if HTTP status is OK
      if (!response.ok) {
        console.error("Failed to fetch videos:", response.status, response.statusText);
        setLoading(false);
        return;
      }

      const json = await response.json();
      setVideos((prevVideos) => [...prevVideos, ...(json.items || [])]); // Append new videos to existing list
    } catch (error) {
      console.error("Error fetching YouTube videos:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMostPopularVideos(); // initial fetch
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        fetchMostPopularVideos();
      }
    }, {root: null, rootMargin: "20px", threshold: 1 });
    
    if (observorRef.current) {
      observer.observe(observorRef.current);
    }

    return () => observer.disconnect();
  }, [videos, loading]);

  if (!videos.length) return <div className="flex justify-center items-center h-full">No videos available</div>


  return (
    <div className="video-container h-full p-3 flex-wrap gap-3 flex justify-between items-center">
      {videos.map((video, index) => (
        <VideoCard key={video.id + index} video={video} />
      ))}
      {/* Sentinel div at the bottom to trigger observer */}
      <div ref={observorRef} className="w-full h-1"></div>
      
      {loading && <p className="w-full flex justify-center items-center bg-blue-300">Loading more videos...</p>}
    </div>
  )
}

export default VideoContainer
