import { useEffect, useRef, useState } from "react"
import { fetchMostPopularVideos, YOUTUBE_MOST_POPULAR_API } from "../Utils/constants"
import VideoCard from "./VideoCard"
import Loader from "./Loader"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { setAllVideos } from "../Utils/allVideosSlice"

const VideoContainer = () => {
  const dispatch = useDispatch();
  // const [videos, setVideos] = useState([])
  const videos = useSelector((store) => store?.allVideos?.videos) || [];
  const [loading, setLoading] = useState(false);

  const observorRef = useRef(null);

  const loadVideos = async () => {
    if (loading) return;
    setLoading(true);
    const newVideos = await fetchMostPopularVideos();
    dispatch(setAllVideos([...videos, ...newVideos]));
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      loadVideos();
    }, 2000); // Simulate network delay
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setLoading(true);
        setTimeout(() => {
          loadVideos();
        }, 2000); // Simulate network delay
      }
    }, { root: null, rootMargin: "20px", threshold: 1 });

    if (observorRef.current) {
      observer.observe(observorRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="video-container h-full p-3 flex-wrap gap-3 flex justify-between items-center">
      {videos.map((video, index) => (
        <Link to={`/watch?v=${video.id}`} key={index + video} >
          <VideoCard video={video} />
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
