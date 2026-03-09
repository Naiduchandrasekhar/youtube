import hamburgerMenu from "../assets/images/hamburgerMenu.png"
import hamburgerMenuLight from "../assets/images/hamburgerMenuLight.png"
import youtubeLogo from "../assets/images/youtubeLogo.jpg"
import userIcon from "../assets/images/userIcon.png"
import { useDispatch, useSelector } from "react-redux"
import { toggleMenu } from "../Utils/appSlice"
import { changeLanguage } from "../Utils/languageSlice"
import { toggleMode } from "../Utils/modeSlice"
import youtube_logo_dark from "../assets/images/youtube_logo_dark.webp"

const Header = () => {
  const isDarkMode = useSelector((store) => store?.mode?.isDarkMode);
  const dispatch = useDispatch()
  const handleMenu = () => {
    dispatch(toggleMenu())
  }

  const handleChangeLanguage = (e) => {
    const currentLanguage = e.target.value;
    dispatch(changeLanguage(currentLanguage))
  }

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-20 
  flex justify-between items-center p-1 overflow-hidden 
  shadow-md transition-colors duration-300
  ${isDarkMode
          ? "bg-[#0f0f0f] text-white border-b border-gray-800"
          : "bg-white text-black border-b border-gray-200"
        }`}
    >
      <div className="flex items-center gap-3">
        <img onClick={handleMenu} src={hamburgerMenu} className="h-9 cursor-pointer" />
        <img src={isDarkMode ? youtube_logo_dark : youtubeLogo} className="h-20 max-w-full" />
      </div>

      <div className="flex items-center gap-0">
        <input
          type="search"
          placeholder="Search..."
          className={`px-2 w-64 md:w-96 border rounded-l-full p-1 outline-none transition-colors duration-300
      ${isDarkMode
              ? "bg-[#1f1f1f] text-white border-gray-700 placeholder-gray-400"
              : "bg-white text-black border-gray-400 placeholder-gray-500"
            }`}
        />
        <button className="border border-gray-400 rounded-r-full p-1 cursor-pointer">🔍</button>
      </div>

      <div className="flex items-center">
        <select
          onChange={handleChangeLanguage}
          className={`rounded-full p-1 cursor-pointer outline-none transition-colors duration-300
  ${isDarkMode
              ? "bg-[#1f1f1f] text-white border border-gray-700"
              : "bg-white text-black border border-gray-400"
            }`}
        >
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="te">Telugu</option>
        </select>
        <div>
          {isDarkMode ? <button onClick={() => dispatch(toggleMode())} className="ml-4 p-1 border border-gray-400 rounded-full cursor-pointer">🌙</button> : <button onClick={() => dispatch(toggleMode())} className="ml-4 p-1 border border-gray-400 rounded-full cursor-pointer">☀️</button>}
        </div>
        <img src={userIcon} className="h-10 px-2" />
      </div>
    </div>
  )
}

export default Header
