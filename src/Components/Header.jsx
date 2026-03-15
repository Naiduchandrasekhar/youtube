import hamburgerMenu from "../assets/images/hamburgerMenu.png"
import darkMenubar from "../assets/images/darkhamburgermenu.png"
import youtubeLogo from "../assets/images/youtubeLogo.jpg"
import userIcon from "../assets/images/userIcon.png"
import { useDispatch, useSelector } from "react-redux"
import { toggleMenu } from "../Utils/appSlice"
import { changeLanguage } from "../Utils/languageSlice"
import { toggleMode } from "../Utils/modeSlice"
import youtube_logo_dark from "../assets/images/youtube_logo_dark.webp"
import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { cacheResults } from "../Utils/searchSlice"

const Header = () => {
  const isDarkMode = useSelector((store) => store?.mode?.isDarkMode);
  const searchCache = useSelector((store) => store?.search)

  const dispatch = useDispatch()
  const suggestRef = useRef(null)
  const navigate = useNavigate()

  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleMenu = () => {
    dispatch(toggleMenu())
  }

  const handleChangeLanguage = (e) => {
    const currentLanguage = e.target.value;
    dispatch(changeLanguage(currentLanguage))
  }

  const callSearchAPI = async (searchTerm) => {
    const response = await fetch(
      `https://corsproxy.io/?http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${searchTerm}`
    );

    const data = await response.json();
    try {
      if (data?.[1]) {
        setSearchResults(data[1]);
        console.log("hjh");

        dispatch(cacheResults({ [searchTerm]: data[1] }));
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  }

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      // Perform search or API call with searchTerm
      if (searchTerm) {
        if (searchCache?.[searchTerm]) {
          setSearchResults(searchCache[searchTerm]);
        } else {
          callSearchAPI(searchTerm);
        }
      }
      if (searchTerm && !showSuggestions) {
        setShowSuggestions(true);
      }
    }, 300); // Adjust the debounce delay as needed

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (suggestRef.current && !suggestRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearch = (result) => {
    setSearchTerm(result);
    navigate(`/watch?v=${result}`);
    setTimeout(() => {
      setShowSuggestions(false);
    }, 100);
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
        <img onClick={handleMenu} src={isDarkMode ? darkMenubar : hamburgerMenu} className="h-9 cursor-pointer" />
        <img src={isDarkMode ? youtube_logo_dark : youtubeLogo} className="h-20 max-w-full" />
      </div>

      <div>
        <div className="flex items-center gap-0">
          <input
            type="search"
            placeholder="Search..."
            value={searchTerm}
            className={`px-4 w-64 md:w-96 border rounded-l-full p-1 outline-none transition-colors duration-300
        ${isDarkMode
                ? "bg-[#1f1f1f] text-white border-gray-700 placeholder-gray-400"
                : "bg-white text-black border-gray-400 placeholder-gray-500"
              }`}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => searchTerm && setShowSuggestions(true)}
          />
          <button className="border border-gray-400 rounded-r-full p-1 cursor-pointer">🔍</button>
        </div>
        <div className="fixed" ref={suggestRef}>
          {showSuggestions && searchResults?.length > 0 && (
            <ul className={`absolute mt-1 w-64 md:w-96  border border-gray-300 rounded-md shadow-lg z-1 transition-colors duration-300
              ${isDarkMode
                ? "bg-[#141212] text-white border-gray-700 placeholder-gray-400"
                : "bg-white text-black border-gray-400 placeholder-gray-500"
              }`}>
              {searchResults?.map((result, index) => (
                <li onClick={() => handleSearch(result)} key={index} className={`px-4 py-2 ${isDarkMode ? 'hover:bg-zinc-800' : 'hover:bg-gray-200'} cursor-pointer transition-colors duration-300`}>
                  🔍 {result}
                </li>
              ))}
            </ul>
          )}
        </div>
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
