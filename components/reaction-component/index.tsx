import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";

import { Comment } from "../comment";

export interface CommentModel {
  name: string;
  comment: string;
  emoji: string;
  avatar: string;
}

interface Props {}

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
      },
    ]);
  };

  //make a rest call to randomuser.me

  useEffect(() => {
    getRandomFirstComment();
  }, []);

  return (
    <div className="p-4 flex justify-center items-center bg-slate-800 rounded-lg">
      {comments.map((comment) => (
        <Comment comment={comment} />
      ))}
    </div>
  );
};
