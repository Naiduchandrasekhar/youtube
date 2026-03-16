import { useSelector } from "react-redux";
import ChannelCard from "./ChannelCard";
import {channels } from "../Utils/constants"
import { useEffect, useState } from "react";
import ShimmerLoader from "./ShimmerLoader";

const Subscriptions = () => {
    const isDarkMode = useSelector((store) => store?.mode?.isDarkMode);
    const [loaidng, setLoading] = useState(false)

    useEffect(() => {
    setLoading(true)
     const i =  setTimeout(() => {
        setLoading(false)
      }, 2000)

      return () => {
        clearTimeout(i)
      }
    }, [])

    if(loaidng) return <ShimmerLoader />

    return (
        <div
            className={`min-h-screen p-6 transition-colors duration-300 ${isDarkMode ? "bg-black text-white" : "bg-gray-100 text-gray-900"
                }`}
        >
            <h1 className="text-2xl font-bold mb-6">Subscriptions</h1>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {channels.map((channel) => (
                    <ChannelCard key={channel.id} channel={channel} />
                ))}
            </div>
        </div>
    );
};

export default Subscriptions;