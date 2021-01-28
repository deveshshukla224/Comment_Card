import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = ()=>
{
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                author={"Sam"}
                timeAgo={"Yesterday at 6 PM "}
                comment={"I like this blog :)"}
                />
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail
                author={"Alex"}
                timeAgo={"Today at  PM 2:45 AM"}
                comment={"Decent Amount of information is available in this short post "}
            />
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail
                author={"Colt"}
                timeAgo={"26 Oct at 1 PM "}
                comment={"Good Job Buddy"}
            />
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail
                author={"Eile"}
                timeAgo={"1 November at 4 PM "}
                comment={"Thanks man for such info"}
            />
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail
                author={"Stokes"}
                timeAgo={"5 September at 6 PM"}
                comment={"This is as precious as gold....."}
            />
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(<App /> , document.querySelector("#root"));