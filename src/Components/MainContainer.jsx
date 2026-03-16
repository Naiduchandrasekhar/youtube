import { useState } from "react"
import ButtonList from "./ButtonList"
import VideoContainer from "./VideoContainer"

const MainContainer = () => {
  const [videoCode, setVideoCode] = useState({ name: "Nthg", code: 0 })
  
  const handleGetCode = (videoCode) => {
   setVideoCode(videoCode)
  }
  
  return (
    <div className="flex-1 flex flex-col h-full min-w-0">
      {/* ButtonList stays at top */}
      <div className="flex-none">
        <ButtonList videoCode={videoCode} handleGetCode={handleGetCode} />
      </div>

      {/* VideoContainer fills remaining space and scrolls */}
      <div className="flex-1 overflow-y-auto">
        <VideoContainer videoCode={videoCode} />
      </div>
    </div>
  )
}

export default MainContainer