import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";

import { Comment } from "../comment";

import { HiOutlinePaperAirplane } from "react-icons/hi";

export interface CommentModel {
  name: string;
  comment: string;
  emoji: string;
  avatar: string;
  date: Date;
}

export const ReactionComponent = () => {
  const [comments, setComments] = useState<Array<CommentModel>>([]);
  const [currentComment, setCurrentComment] = useState<string>();

  const getRandomFirstComment = async () => {
    const response = await fetch("https://randomuser.me/api");
    const data = await response.json();

    setComments([
      ...comments,
      {
        name: data.results[0].name.first,
        comment: faker.random.words(10),
        emoji: "👍",
        avatar: data.results[0].picture.medium,
        date: faker.date.past(),
      },
    ]);
  };

  const handleOnClickSubmit = () => {
    if (currentComment) {
      setComments([
        ...comments,
        {
          name: "Test user",
          comment: "test comment",
          emoji: "👍",
          avatar: "/images/avatar-1.jpg",
          date: new Date(),
        },
      ]);
      setCurrentComment("");
    }
  };

  useEffect(() => {
    getRandomFirstComment();
  }, []);

  return (
    <div className="p-4  bg-slate-800 rounded-lg shadow-2xl">
      <div>
        {comments.map((comment, i) => (
          <Comment comment={comment} key={i} />
        ))}
      </div>

      <div className="pl-4 mt-4">
        <h3 className="text-white">Add your reaction here</h3>
        <div className="flex">
          <input
            className="p-2 rounded-lg bg-slate-500 mr-2"
            onChange={(e) => {
              setCurrentComment(e.target.value);
            }}
          />
          <button
            className="p-4 rounded-full h-10 flex items-center justify-center bg-slate-900 text-white"
            onClick={() => handleOnClickSubmit()}
          >
            <span className="mr-2">Send</span>

            <HiOutlinePaperAirplane />
          </button>
        </div>
      </div>
    </div>
  );
};
