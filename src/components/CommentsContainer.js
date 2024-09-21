import React from "react";
const commentData = [
  {
    name: "Rushikesh Gauekar",
    text: "Lorwm fwhi haiac hcha",
    replies: [
        {
            name: "Yash gaurkar",
            text: " Hello Rushikesh Gaurkar",
            replies: [],
          },
    ],
  },
  {
    name: "Rushikesh Gauekar",
    text: "Lorwm fwhi haiac hcha",
    replies: [
      {
        name: "Yash gaurkar",
        text: " Hello Rushikesh Gaurkar",
        replies: [],
      },
      {
        name: "Yash gaurkar",
        text: " Hello Rushikesh Gaurkar",
        replies: [],
      },
      {
        name: "Yash gaurkar",
        text: " Hello Rushikesh Gaurkar",
        replies: [],
      },
      {
        name: "Yash gaurkar",
        text: " Hello Rushikesh Gaurkar",
        replies: [],
      },
    ],
  },
  {
    name: "Rushikesh Gauekar",
    text: "Lorwm fwhi haiac hcha",
    replies: [],
  },
  {
    name: "Rushikesh Gauekar",
    text: "Lorwm fwhi haiac hcha",
    replies: [
      {
        name: "Yash gaurkar",
        text: " Hello Rushikesh Gaurkar",
        replies: [],
      },
      {
        name: "Yash gaurkar",
        text: " Hello Rushikesh Gaurkar",
        replies: [],
      },
    ],
  },
];
const CommentList = ({ data }) => {
    return (
      <>
        {data.map((comment) => (
          <>
            <Comment data={comment} />
            <div className="pl-5 border border-1-black ml-5">
            {comment.replies && <CommentList data={comment.replies} />}
            </div>
          </>
        ))}
      </>
    );
  };
const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex">
      <img
        className="w-12 h-12"
        alt="user"
        src="https://tse4.mm.bing.net/th?id=OIP.A6pGHZJj2xtuTMzyzfDhdgHaGs&pid=Api&P=0&h=180"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>Comment:{text}</p>
      </div>
    </div>
  );
};
const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentList data={commentData}></CommentList>
    </div>
  );
};

export default CommentsContainer;
