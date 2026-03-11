import { useSelector } from "react-redux";

const VideoCard = ({ video }) => {
  const isDarkMode = useSelector((store) => store?.mode?.isDarkMode);

  const { snippet, statistics } = video;
  const { title, thumbnails, channelTitle } = snippet;
  

  const defaultThumbnail =
    "https://img.freepik.com/premium-vector/youtube-thumbnail-background-design-with-text-editable_672856-143.jpg";

  return (
    <div
      className={`h-64 p-2 w-75 rounded-lg overflow-hidden shadow-lg transition-colors duration-300
      ${
        isDarkMode
          ? "bg-[#1f1f1f] text-white hover:bg-[#2a2a2a]"
          : "bg-gray-100 text-black hover:bg-gray-200"
      }`}
    >
      <img
       className="h-36 object-cover w-full mb-2 rounded-lg"
        src={thumbnails?.medium?.url || defaultThumbnail}
        alt={title || "Video thumbnail"}
        onError={(e) => {
          e.target.src = defaultThumbnail;
        }}
      />
      <ul>
        <li className="font-bold">{title}</li>
        <li className="font-medium">{channelTitle}</li>
        <li className="font-semibold">{Number(statistics?.viewCount).toLocaleString() !== 'NaN' ? Number(statistics?.viewCount).toLocaleString() : '0'} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;