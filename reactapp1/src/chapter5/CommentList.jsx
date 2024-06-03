import React from "react";
import Comment from "./Comment";

// 아래처럼 하면, 이제 반복문처럼 가능해지고, 코드도 짧아짐 - 메인 CommentList함수는!
const comments = [
    {
        name: "화성",
        comment: "갈끄니끄아~",
    },
    {
        name: "도지800층",
        comment: "하 존나 춥네.."
    },
    {
        name: "리플",
        comment: "1달러 갑니다;;"
    }
]

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                )     
            })}
        </div>
    )
}

export default CommentList;