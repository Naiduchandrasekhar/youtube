import { useEffect, useRef, useState } from "react";
import userIcon from "../assets/images/userIcon.png"
import sendImage from "../assets/images/sendImage.png"
import closeIcon from "../assets/images/close.png"
import emojiIcon from "../assets/images/emojiIcon.png"
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../Utils/chatSlice";
import { chatData, emojiList } from "../Utils/constants"

const LiveChat = () => {
  const dispatch = useDispatch()
  const storeChatData = useSelector((store) => store?.chat?.messages)
  const isDarkMode = useSelector((store) => store?.mode?.isDarkMode);
  // Ref to the scrollable messages div
  const messagesContainerRef = useRef(null);
  const [localMessage, setLocalMessage] = useState("")
  const [closeChat, setCloseChat] = useState(false)
  const [showEmoji, setShowEmoji] = useState(false)

  useEffect(() => {
    //API Polling
    const interval = setInterval(() => {
      const chatDataNumber = Math.floor(Math.random() * chatData?.length)
      const userMessage = chatData[chatDataNumber]
      dispatch(addMessage({ ...userMessage }))
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  // Auto-scroll the container to bottom on new messages
  useEffect(() => {
    const container = messagesContainerRef.current

    if (container) {
      container.scrollTop = container.scrollHeight; // scroll to bottom
    }
  }, [storeChatData])

  const handleSendMessage = () => {
    if (localMessage?.length === 0) return
    const messageObject = {
      name: "Chandra Sekhar",
      comment: localMessage
    }
    dispatch(addMessage({ ...messageObject }))
    setLocalMessage("")
  }

  const handleEnterMessage = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage()
    }
  }

  const inputRef = useRef(null);
  if (closeChat) return

  return (
    <div className="px-2">
      <div className={`border rounded-lg shadow-lg flex flex-col h-[71vh]
      ${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-300'}`}>

        {/* Header */}
        <div className={`border-b px-3 py-2 font-semibold rounded-t-lg
        ${isDarkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-gray-50 border-gray-300 text-gray-700'}`}>
          <div className="flex justify-between items-center">
            <div>💬 Top Chat</div>
            <div className="cursor-pointer" onClick={() => setCloseChat(true)}>
              <img src={closeIcon} alt="user" className="h-4 w-4 rounded-full" />
            </div>
          </div>
        </div>

        {/* Chat messages */}
        <div ref={messagesContainerRef} className="flex-1 overflow-y-scroll p-2 space-y-2">
          {storeChatData?.length > 0 && storeChatData?.map((chat, index) => (
            <div key={index} className={`flex items-center gap-2 p-1 rounded-md transition
            ${isDarkMode ? 'hover:bg-gray-800 bg-gray-900' : 'hover:bg-gray-100 bg-white'}`}>

              <img src={userIcon} alt="user" className="h-7 w-7 rounded-full" />

              <div className="text-sm">
                <span className={`font-semibold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  {chat.name}
                </span>
                <span className={`ml-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {chat.comment}
                </span>
              </div>
            </div>
          ))}
        </div>

        {
          showEmoji && <div className={`relative border-t px-3 rounded-b-lg ${isDarkMode ? "bg-gray-800 border-gray-700" : "bg-gray-50 border-gray-300"}`}>
            {/* Emoji Picker */}

            <div className={`absolute bottom-full mb-2 w-64 rounded-lg shadow-lg p-2 flex flex-wrap gap-1
              ${isDarkMode ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-300"}`}>
              {emojiList.map((emoji, index) => (
                <span
                  key={index}
                  className="cursor-pointer text-xl hover:bg-gray-300 dark:hover:bg-gray-700 rounded p-1"
                  onClick={() => setLocalMessage(prev => prev + emoji)}
                >
                  {emoji}
                </span>
              ))}
            </div>
          </div>
        }

        {/* Input */}
        <div className={`relative flex px-3 py-2 rounded-b-lg
        ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-300'}`}>
          <input
            ref={inputRef}
            type="text"
            value={localMessage}
            onFocus={() => inputRef?.current?.focus()}
            onKeyUp={handleEnterMessage}
            onChange={(e) => setLocalMessage(e.target.value)}
            className={`w-full px-2 py-1 pr-18 rounded-lg border
            ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none' :
                'border-slate-400 bg-stone-200 text-gray-800 placeholder-gray-500 focus:outline-none'}`}
            placeholder="Type a message..."
          />
          <button
            className="flex absolute top-1/2 right-3 -translate-y-1/2 px-2 py-1 cursor-pointer"
          >
            <img onClick={() => setShowEmoji(!showEmoji)} src={emojiIcon} alt="send" className="h-6 mx-2" />
            <img onClick={handleSendMessage} src={sendImage} alt="send" className="h-6" />
          </button>
        </div>

      </div>
    </div>
  )
}

export default LiveChat