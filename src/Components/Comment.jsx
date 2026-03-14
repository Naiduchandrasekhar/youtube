import userIcon from "../assets/images/userIcon.png"
import likeIcon from "../assets/images/like.png"

const Comment = ({comment}) => {
    return (
        <div>
            <div  className="border border-gray-200 shadow-lg p-3 rounded-lg my-1">
                <div className="flex items-center">
                    <div>
                        <img src={userIcon} className="h-10 px-2" />
                    </div>
                    <div>
                        <p className="font-bold">{comment.name}</p>
                        <p>{comment.comment}</p>
                        <div className="text-sm text-gray-500 flex items-center">
                            <div>
                                <img src={likeIcon} className="h-4 px-2" />
                            </div>
                            <div>{comment.likeCount}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comment
