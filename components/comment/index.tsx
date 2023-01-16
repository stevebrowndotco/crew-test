import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import { CommentModel } from "../reaction-component";

interface Props {
  comment: CommentModel;
}

export const Comment = ({ comment }: Props) => {
  const { name, comment: commentText, emoji, avatar } = comment;

  return (
    <div className="text-white flex items-center">
      <div className="w-10 h-10 rounded-full overflow-hidden mr-4">
        <img src={avatar} />
      </div>
      <p>{commentText}</p>
    </div>
  );
};
