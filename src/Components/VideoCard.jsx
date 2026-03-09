import { useSelector } from "react-redux";

const VideoCard = ({ video }) => {
  const isDarkMode = useSelector((store) => store?.mode?.isDarkMode);

  const defaultThumbnail =
    "https://i.ytimg.com/vi/QKHGmFvzjJ4/mqdefault.jpg";

  return (
    <div
      className={`h-50 w-75 rounded-lg overflow-hidden shadow-md transition-colors duration-300
      ${
        isDarkMode
          ? "bg-[#1f1f1f] text-white hover:bg-[#2a2a2a]"
          : "bg-gray-100 text-black hover:bg-gray-200"
      }`}
    >
      <img
        className="w-full"
        src={video.snippet?.thumbnails?.medium?.url || defaultThumbnail}
        alt={video.snippet?.title || "Video thumbnail"}
        onError={(e) => {
          e.target.src = defaultThumbnail;
        }}
      />
      <h3 className="p-2 font-medium text-sm">
        {video.snippet?.title || "Untitled Video"}
      </h3>
    </div>
  );
};

export default VideoCard;