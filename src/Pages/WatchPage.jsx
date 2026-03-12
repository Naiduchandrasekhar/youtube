
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import VideoCard from "../Components/VideoCard";
import { useEffect } from "react";
import { fetchMostPopularVideos } from "../Utils/constants";
import { setAllVideos } from "../Utils/allVideosSlice";

const WatchPage = () => {
  const dispatch = useDispatch();
  const videos = useSelector((store) => store?.allVideos?.videos) || [];

  const [searchParam] = useSearchParams();

  const loadVideos = async () => {
    try {
      const newVideos = await fetchMostPopularVideos();
      dispatch(setAllVideos([...videos, ...newVideos]));
    } catch (error) {
      console.error("Error loading videos:", error);
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    loadVideos()
  }, []);
  
  
  return (
    <div className="flex w-full">
      <div className="flex flex-col w-screen">
        <iframe height="650" src={`https://www.youtube.com/embed/${searchParam.get("v")}?si=RUcM18UgPoeCM2PV`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen aria-controls="true"></iframe>
      </div>
      <div className="">
        <h1 className="text-2xl font-bold mb-4 px-3">Related Videos</h1>
        <div className="flex flex-wrap gap-4 px-3 overflow-auto w-87.5">
          {videos?.map((video, index) => (
            <div key={video?.id + index}>
              <Link to={`/watch?v=${video.id}`} >
                <VideoCard video={video} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WatchPage;