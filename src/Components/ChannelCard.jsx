import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ChannelCard = ({ channel }) => {
  const isDarkMode = useSelector((store) => store?.mode?.isDarkMode);

  return (
    <div
      className={`rounded-xl p-5 transition-all duration-300 cursor-pointer
      transform hover:-translate-y-2 hover:scale-[1.03]
      ${
        isDarkMode
          ? "bg-neutral-900 shadow-lg shadow-black/40 hover:shadow-red-500/20"
          : "bg-white shadow-lg hover:shadow-xl"
      }`}
    >
      <div className="flex flex-col items-center text-center">

        <img
          src={channel.image}
          alt={channel.name}
          className="w-24 h-24 rounded-full object-cover border-4 border-red-500 mb-4"
        />

        <h2 className="text-lg font-semibold">{channel.name}</h2>

        <p className="text-sm opacity-80 mt-1">
          {channel.subscribers} subscribers
        </p>

        <p className="text-sm opacity-70">
          {channel.views} views
        </p>

        <Link to='/'> 
          <button
          className="mt-4 px-4 py-2 rounded-full text-sm font-medium cursor-pointer
          bg-red-600 text-white hover:bg-red-700 transition"
        >
          View Channel
        </button>
        </Link>
      </div>
    </div>
  );
};

export default ChannelCard;