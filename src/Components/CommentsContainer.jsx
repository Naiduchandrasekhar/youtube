import { useState } from "react";
import Comment from "./Comment";
import { comments } from "../Utils/constants"

const CommentsContainer = () => {
    const [openReplies, setOpenReplies] = useState({});

    const toggleReplies = (id) => {
        setOpenReplies((prev) => ({
            ...prev,
            [id]: !prev[id]
        }))
    }

    console.log(openReplies);
    

    const CommentList = ({ comments }) => {
        return comments?.map((comment) => (
            <div key={comment?.id}>
                <Comment comment={comment} />
                <div>
                    {comment?.replies?.length > 0 && (
                        openReplies[comment?.id] ?
                            <div className="ml-4 my-2">
                                <button className="cursor-pointer px-2 py-1 text-blue-600" onClick={() => toggleReplies(comment?.id)}>Hide Replies</button>
                                <CommentList comments={comment.replies} />
                            </div>
                            :
                            <button className="cursor-pointer px-2 py-1 text-blue-600" onClick={() => toggleReplies(comment?.id)}>{comment?.replies?.length} Replies</button>
                    )}
                </div>
            </div>
        ))
    }

    return (
        <div>
            <h1 className="text-2xl font-bold my-2 px-3">{comments.length} Comments</h1>
            <div className="flex flex-col gap-2 px-3">
                <CommentList comments={comments} />
            </div>
        </div>
    )
}

export default CommentsContainer
