import { Outlet } from "react-router-dom"
import SideBar from "./SideBar"

const Body = () => {
    return (
        <div className="flex flex-row pt-24 h-full">
            <SideBar />

            <div className="flex-1 h-full overflow-y-auto">
                <Outlet />
            </div>
        </div>

    )
}

export default Body
