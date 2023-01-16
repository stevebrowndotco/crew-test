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
    }
  };

  const [currentComment, setCurrentComment] = useState<string>();
  //add a text input

  useEffect(() => {
    getRandomFirstComment();
  }, []);

  return (
    <div className="p-4  bg-slate-800 rounded-lg">
      <div>
        {comments.map((comment) => (
          <Comment comment={comment} />
        ))}
      </div>

      <div className="flex">
        <input
          className="p-2 rounded-lg bg-slate-500"
          onChange={(e) => {
            setCurrentComment(e.target.value);
          }}
        />
        <button
          className="p-4 rounded-full w-10 h-10 flex items-center justify-center bg-slate-900 text-white"
          onClick={() => handleOnClickSubmit()}
        >
          <HiOutlinePaperAirplane />
        </button>
      </div>
    </div>
  );
};
