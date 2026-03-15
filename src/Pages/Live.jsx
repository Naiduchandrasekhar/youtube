import { useEffect, useState } from "react"
import { YOUTUBE_MULTIPLE_POPULAR_API } from "../Utils/constants";
import { Link } from "react-router-dom";
import VideoCard from "../Components/VideoCard";

const Live = () => {
  const [multipleVideos, setMultipleVideos] = useState([])

  const fetchMultipleVideos = async () => {
    try {
      const response = await fetch(YOUTUBE_MULTIPLE_POPULAR_API);

      if (!response.ok) {
        throw new Error("Failed to fetch videos");
      }

      const data = await response.json();
      setMultipleVideos(data?.items)

    } catch (error) {
      console.error("Error fetching videos:", error);
      return null; // or handle it however you want
    }
  };

  useEffect(() => {
    fetchMultipleVideos()
  }, [])

  return (
    <div className="flex justify-between items-center flex-wrap  gap-4 i p-3">
      {multipleVideos?.length > 0 && multipleVideos?.map((video, index) => (
        <Link to={`/watch?v=${video?.id?.videoId}&live=true`} state={{ multipleVideos: multipleVideos }} key={index + video} >
          <VideoCard video={video} />
        </Link>
      ))}
    </div>
  )
}

export default Live
