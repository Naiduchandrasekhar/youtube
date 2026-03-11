import { useEffect, useRef, useState } from "react"
import { YOUTUBE_MOST_POPULAR_API } from "../Utils/constants"
import VideoCard from "./VideoCard"
import Loader from "./Loader"
import { Link } from "react-router-dom"

const VideoContainer = () => {

  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(false);

  const observorRef = useRef(null);

  const fetchMostPopularVideos = async () => {
    if (loading) return; // Prevent multiple simultaneous fetches
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
    setLoading(true);
    setTimeout(() => {
      fetchMostPopularVideos();
    }, 2000); // Simulate network delay
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setLoading(true);
        setTimeout(() => {
          fetchMostPopularVideos();
        }, 2000); // Simulate network delay
      }
    }, { root: null, rootMargin: "20px", threshold: 1 });

    if (observorRef.current) {
      observer.observe(observorRef.current);
    }

    return () => observer.disconnect();
  }, [videos, loading]);

  return (
    <div className="video-container h-full p-3 flex-wrap gap-3 flex justify-between items-center">
      {videos.map((video, index) => (
        <Link to={`/watch?v=${video.id}`}>
          <VideoCard key={video.id + index} video={video} />
        </Link>
      ))}

      {/* Loader */}
      {loading && (
        <div className="w-full flex justify-center items-center py-6">
          <Loader />
        </div>
      )}

      {/* Sentinel div at the bottom to trigger observer */}
      <div ref={observorRef} className="w-full h-1"></div>
    </div>
  )
}

export default VideoContainer
