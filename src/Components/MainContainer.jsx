import ButtonList from "./ButtonList"
import VideoContainer from "./VideoContainer"

const MainContainer = () => {
  return (
    <div className="flex-1 flex flex-col h-full min-w-0">
      {/* ButtonList stays at top */}
      <div className="flex-none">
        <ButtonList />
      </div>

      {/* VideoContainer fills remaining space and scrolls */}
      <div className="flex-1 overflow-y-auto">
        <VideoContainer />
      </div>
    </div>
  )
}

export default MainContainer