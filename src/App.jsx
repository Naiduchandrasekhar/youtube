import './App.css'
import Header from './Components/Header'
import { useSelector } from 'react-redux'
import Body from './Components/Body';
import WatchPage from './Pages/WatchPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './Components/MainContainer';
import Live from './Pages/Live';
import { ToastContainer } from 'react-toastify';

function App() {

  const isDarkMode = useSelector((store) => store?.mode?.isDarkMode);

  const appRouter = createBrowserRouter([{
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />
      },
      {
      path: "/watch",
      element: <WatchPage />
    },
    {
      path:"/live",
      element: <Live />
    }
  ]
  },])

  return (
    <div
      className={`h-screen overflow-hidden transition-colors duration-300 
      ${isDarkMode ? "bg-[#0f0f0f] text-white" : "bg-white text-black"}`}
    >
      <ToastContainer newestOnTop />
      {/* Fixed header */}
      {/* <Header /> */}

      {/* Main layout */}
     <RouterProvider router={appRouter} />

    </div>
  )
}

export default App