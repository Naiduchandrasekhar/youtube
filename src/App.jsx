import './App.css'
import Header from './Components/Header'
import Sidebar from './Components/sidebar'
import MainContainer from './Components/MainContainer'
import { useSelector } from 'react-redux'

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
        <Sidebar />

        <div className="flex-1 h-full overflow-y-auto">
          <MainContainer />
        </div>
      </div>

    </div>
  )
}

export default App