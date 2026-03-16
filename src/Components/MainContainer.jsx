import { useState } from "react"
import ButtonList from "./ButtonList"
import VideoContainer from "./VideoContainer"
import { useDispatch, useSelector } from "react-redux"
import { addVideoCodeDetails } from "../Utils/videoCodeSlice"

const MainContainer = () => {
  // const [videoCode, setVideoCode] = useState({ name: "Nthg", code: 0 })
  const dispatch = useDispatch()
  const videoCode = useSelector((store) => store?.videoCode)
  
  const handleGetCode = (videoCodeDetails) => {
  //  setVideoCode(videoCodeDetails)
   dispatch(addVideoCodeDetails(videoCodeDetails))
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