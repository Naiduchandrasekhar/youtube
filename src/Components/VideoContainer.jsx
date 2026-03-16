import { useEffect, useRef, useState } from "react"
import { fetchMostPopularVideos } from "../Utils/constants"
import VideoCard from "./VideoCard"
import Loader from "./Loader"
import ShimmerLoader from "./ShimmerLoader"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { setAllVideos, appendVideos } from "../Utils/allVideosSlice"

const VideoContainer = ({videoCode}) => {
  const dispatch = useDispatch();
  // const [videos, setVideos] = useState([])
  const videos = useSelector((store) => store?.allVideos?.videos) || [];
  const [loading, setLoading] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);

  const observorRef = useRef(null);
  const loadMoreTimerRef = useRef(null);

  const loadVideos = async (append = false) => {
    const newVideos = await fetchMostPopularVideos(videoCode);

    if (append) {
      dispatch(appendVideos(newVideos));
    } else {
      dispatch(setAllVideos(newVideos));
    }
  };

  useEffect(() => {
    setInitialLoad(true);

    const timer = setTimeout(async () => {
      await loadVideos(false);
      setInitialLoad(false);
    }, 2000); // Simulate network delay

    return () => clearTimeout(timer);
  }, [videoCode]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !loading && !initialLoad) {
        setLoading(true);

        loadMoreTimerRef.current = setTimeout(async () => {
          await loadVideos(true);
          setLoading(false);
          window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
        }, 2000); // Simulate network delay
      }
    }, { root: null, rootMargin: "100px", threshold: 1 });

    if (observorRef.current) {
      observer.observe(observorRef.current);
    }

    return () => {
      observer.disconnect();
      if (loadMoreTimerRef.current) clearTimeout(loadMoreTimerRef.current);
    };
  }, [loading, initialLoad]);

  if (initialLoad) return <ShimmerLoader />;

  console.log("videoCode", videoCode);
  
  return (
    <div className="video-container h-full p-3 flex-wrap gap-3 flex justify-between items-center">
      {videos.map((video, index) => (
        <Link to={`/watch?v=${video.id}`} key={index + video}  >
          <VideoCard video={video} />
        </Link>
      ))}

      {/* Loader */}
      {loading && (
        <div className="w-full flex justify-center items-center">
          <Loader />
        </div>
      )}

      {/* Sentinel div at the bottom to trigger observer */}
      <div ref={observorRef} className="w-full h-1"></div>
    </div>
  )
}

export default VideoContainer

