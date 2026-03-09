import './App.css'
import Header from './Components/Header'
import MainContainer from './Components/MainContainer'
import { useSelector } from 'react-redux'
import SideBar from './Components/sidebar';

function App() {

  const isDarkMode = useSelector((store) => store?.mode?.isDarkMode);

  return (
    <div
      className={`h-screen overflow-hidden transition-colors duration-300 
      ${isDarkMode ? "bg-[#0f0f0f] text-white" : "bg-white text-black"}`}
    >

      {/* Fixed header */}
      <Header />

      {/* Main layout */}
      <div className="flex flex-row pt-24 h-full">
        <SideBar />

        <div className="flex-1 h-full overflow-y-auto">
          <MainContainer />
        </div>
      </div>

    </div>
  )
}

export default App