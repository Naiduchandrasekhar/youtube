import { Outlet } from "react-router-dom"
import SideBar from "./SideBar"
import Header from "./Header"

const Body = () => {
    return (
        <div className="flex flex-row pt-24 h-full body">
            <SideBar />
            

            <div className="flex-1 h-full overflow-y-auto">
                <Header />
                <Outlet />
            </div>
        </div>

    )
}

export default Body
