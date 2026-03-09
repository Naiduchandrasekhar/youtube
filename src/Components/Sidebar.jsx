import { useSelector } from "react-redux"
import homeIcon from "../assets/images/homeIcon.png"
import shortsIcon from "../assets/images/shortsIcon.jpg"
import subscribtionIcon from "../assets/images/subscribtion.png"
import userIcon from "../assets/images/userIcon.png"
import { sidebarText } from "../Utils/constants"

const sidebar = () => {
    const isMenuOpened = useSelector((store) => store?.app?.isMenuOpened)

     const selectedLanguage = useSelector((store) => store?.language?.selectedLanguage);

    const text = sidebarText[selectedLanguage] || sidebarText.en;
    console.log(text);
    

    return (
        <div className={`${isMenuOpened ? "p-5 w-60" : "p-3 w-30"} shadow-lg fontSize14`}>
      
      {isMenuOpened && (
        <div>
          <h1 className="font-bold py-1">{text.you}</h1>
          <ul className="p-2">
            <li>{text.history}</li>
            <li>{text.playlists}</li>
            <li>{text.history}</li>
            <li>{text.watchLater}</li>
            <li>{text.yourVideos}</li>
            <li>{text.downloads}</li>
          </ul>
        </div>
      )}

      <div>
        {isMenuOpened && <h1 className="font-bold py-1">{text.explore}</h1>}

        <ul className="p-2">
          <li className={`flex items-center ${isMenuOpened ? "flex-row py-1" : "flex-col py-3"}`}>
            <img src={homeIcon} alt="homeIcon" className="h-8 px-2" />
            {text.home}
          </li>

          <li className={`flex items-center ${isMenuOpened ? "flex-row py-1" : "flex-col py-3"}`}>
            <img src={shortsIcon} alt="shortsIcon" className="h-8 px-2" />
            {text.shorts}
          </li>

          <li className={`flex items-center ${isMenuOpened ? "flex-row py-1" : "flex-col py-3"}`}>
            <img src={subscribtionIcon} alt="shortsIcon" className="h-8 px-2" />
            {text.subscriptions}
          </li>

          <li className={`flex items-center ${isMenuOpened ? "flex-row py-1" : "flex-col py-3"}`}>
            <img src={userIcon} alt="shortsIcon" className="h-6 px-3" />
            {text.you}
          </li>
        </ul>
      </div>

      {isMenuOpened && (
        <div>
          <h1 className="font-bold py-1">{text.moreFromYT}</h1>
          <ul className="p-2">
            <li>{text.premium}</li>
            <li>{text.studio}</li>
            <li>{text.music}</li>
            <li>{text.kids}</li>
          </ul>
        </div>
      )}
    </div>
    )
}

export default sidebar
