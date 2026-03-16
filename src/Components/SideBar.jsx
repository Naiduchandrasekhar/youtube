// import { useSelector } from "react-redux"
// import homeIcon from "../assets/images/homeIcon.png"
// import shortsIcon from "../assets/images/shortsIcon.jpg"
// import subscribtionIcon from "../assets/images/subscribtion.png"
// import userIcon from "../assets/images/userIcon.png"
// import { sidebarText } from "../Utils/constants"
// import { Link } from "react-router-dom"

// const SideBar = () => {
//     const isMenuOpened = useSelector((store) => store?.app?.isMenuOpened)

//      const selectedLanguage = useSelector((store) => store?.language?.selectedLanguage);

//     const text = sidebarText[selectedLanguage] || sidebarText.en;

//     return (
//         <div className={`${isMenuOpened ? "p-5 w-60" : "p-3 w-30"} shadow-lg fontSize14`}>
      
//       {isMenuOpened && (
//         <div>
//           <h1 className="font-bold py-1">{text.you}</h1>
//           <ul className="p-2">
//             <li>{text.history}</li>
//             <li>{text.playlists}</li>
//             <li>{text.history}</li>
//             <li>{text.watchLater}</li>
//             <li>{text.yourVideos}</li>
//             <li>{text.downloads}</li>
//           </ul>
//         </div>
//       )}

//       <div>
//         {isMenuOpened && <h1 className="font-bold py-1">{text.explore}</h1>}

//         <ul className="p-2">
//           <Link to="/">
//           <li className={`flex items-center ${isMenuOpened ? "flex-row py-1" : "flex-col py-3"}`}>
//             <img src={homeIcon} alt="homeIcon" className="h-8 px-2" />
//             {text.home}
//           </li>
//           </Link>

//           <li className={`flex items-center ${isMenuOpened ? "flex-row py-1" : "flex-col py-3"}`}>
//             <img src={shortsIcon} alt="shortsIcon" className="h-8 px-2" />
//             {text.shorts}
//           </li>

//           <li className={`flex items-center ${isMenuOpened ? "flex-row py-1" : "flex-col py-3"}`}>
//             <img src={subscribtionIcon} alt="shortsIcon" className="h-8 px-2" />
//             {text.subscriptions}
//           </li>

//           <li className={`flex items-center ${isMenuOpened ? "flex-row py-1" : "flex-col py-3"}`}>
//             <img src={userIcon} alt="shortsIcon" className="h-6 px-3" />
//             {text.you}
//           </li>
//         </ul>
//       </div>

//       {isMenuOpened && (
//         <div>
//           <h1 className="font-bold py-1">{text.moreFromYT}</h1>
//           <ul className="p-2">
//             <li>{text.premium}</li>
//             <li>{text.studio}</li>
//             <li>{text.music}</li>
//             <li>{text.kids}</li>
//           </ul>
//         </div>
//       )}
//     </div>
//     )
// }

// export default SideBar


import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import homeIcon from "../assets/images/homeIcons.png";
import shortsIcon from "../assets/images/shortsIcon.jpg";
import subscribtionIcon from "../assets/images/subscribtion.png";
import userIcon from "../assets/images/userIcon.png";
import youtubeLiveIcon from "../assets/images/youtubeLiveIcon.png";
import { sidebarText } from "../Utils/constants";

const SideBar = () => {
  const isMenuOpened = useSelector((store) => store?.app?.isMenuOpened);
  const selectedLanguage = useSelector((store) => store?.language?.selectedLanguage);
  const isDarkMode = useSelector((store) => store?.mode?.isDarkMode);

  const text = sidebarText[selectedLanguage] || sidebarText.en;

  const menuItems = [
    { icon: homeIcon, label: text.home, link: "/" },
    { icon: shortsIcon, label: text.shorts },
    { icon: subscribtionIcon, label: text.subscriptions },
    { icon: userIcon, label: text.you },
    {icon: youtubeLiveIcon, label: text.live, link: "/Live" }
  ];

  const yourItems = [text.history, text.playlists, text.watchLater, text.yourVideos, text.downloads];
  const moreItems = [text.premium, text.studio, text.music, text.kids];

  const bgClass = isDarkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900";
  const hoverClass = isDarkMode ? "hover:bg-gray-800" : "hover:bg-gray-200";
  const sectionTitleClass = isDarkMode ? "text-gray-400" : "text-gray-600";

  return (
    <div
      className={`h-auto overflow-y-auto shadow-lg ${bgClass} 
      ${isMenuOpened ? "w-60 p-4" : "w-20 p-2"} transition-width duration-300`}
    >
      {/* Your Items Section */}
      {isMenuOpened && (
        <div className="mb-4">
          <h2 className={`font-semibold text-sm mb-2 uppercase ${sectionTitleClass}`}>{text.you}</h2>
          <ul className="space-y-1 text-sm">
            {yourItems.map((item, idx) => (
              <li
                key={idx}
                className={`px-2 py-1 rounded cursor-pointer transition ${hoverClass}`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Main Menu */}
      <div className="mb-4">
        {isMenuOpened && <h2 className={`font-semibold text-sm mb-2 uppercase ${sectionTitleClass}`}>{text.explore}</h2>}
        <ul className="space-y-1">
          {menuItems.map((item, idx) => (
            <Link key={idx} to={item.link || "#"}>
              <li
                className={`flex items-center gap-4 px-2 py-2 rounded cursor-pointer transition ${hoverClass}`}
              >
                <img
                  src={item.icon}
                  alt={item.label}
                  className={`h-8 w-8 ${isMenuOpened ? "mr-3" : ""}`} // bigger icons
                />
                {isMenuOpened && <span className="text-sm font-medium">{item.label}</span>}
              </li>
            </Link>
          ))}
        </ul>
      </div>

      {/* More From YouTube */}
      {isMenuOpened && (
        <div className="mt-4">
          <h2 className={`font-semibold text-sm uppercase ${sectionTitleClass}`}>{text.moreFromYT}</h2>
          <ul className=" text-sm">
            {moreItems.map((item, idx) => (
              <li
                key={idx}
                className={`px-2 py-1 rounded cursor-pointer transition ${hoverClass}`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SideBar;