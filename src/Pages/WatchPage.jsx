
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import VideoCard from "../Components/VideoCard";
import { useEffect, useState } from "react";
import { fetchMostPopularVideos } from "../Utils/constants";
import { setAllVideos } from "../Utils/allVideosSlice";
import Loader from "../Components/Loader";
import CommentsContainer from "../Components/CommentsContainer";
import LiveChat from "../Components/LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  const location = useLocation()
  const routeSearchParam = useSearchParams()[0];
  const isLive = routeSearchParam.get("live") === 'true';

  const multipleVideos = location?.state?.multipleVideos
  const videos = useSelector((store) => store?.allVideos?.videos) || [];
  const [loading, setLoading] = useState(false)

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

  const videoId = searchParam.get("v");
  useEffect(() => {
    setLoading(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [videoId]);

  if (loading) return <Loader />

  const relatedVideos = isLive ? multipleVideos : videos;

  return (
    <div className="flex w-full">
      <div className="flex flex-col w-screen">
        <iframe height="650" src={`https://www.youtube.com/embed/${searchParam.get("v")}?si=RUcM18UgPoeCM2PV`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen aria-controls="true"></iframe>
        <div>
          <CommentsContainer />
        </div>
      </div>
      <div>
        <div>
          {isLive && <LiveChat />}
        </div>
        <div className="mt-3">
          <h1 className="text-2xl font-bold mb-4 px-3">Related Videos</h1>
          <div className="flex flex-wrap gap-4 px-3 overflow-auto w-87.5">
            {
              relatedVideos?.map((video, index) => (
                <div key={video?.id + index}>
                  <Link to={`/watch?v=${isLive ? video?.id?.videoId : video?.id}${isLive ? '&live=true' : ''}`}
                    {...(isLive ? { state: { multipleVideos } } : {})} >
                    <VideoCard video={video} />
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchPage;