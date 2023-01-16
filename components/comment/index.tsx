import { faker } from "@faker-js/faker";
import { formatDistance } from "date-fns";
import { useEffect, useState } from "react";
import { CommentModel } from "../reaction-component";

interface Props {
  comment: CommentModel;
}

export const Comment = ({ comment }: Props) => {
  const { name, comment: commentText, emoji, avatar, date } = comment;

  return (
    <div className="text-white">
      <div className="flex items-center pb-2">
        <div className="w-10 h-10 rounded-full overflow-hidden mr-4">
          <img src={avatar} />
        </div>
        <p>{name}</p>
      </div>
      <div>
        <p>{commentText}</p>
        <p className="text-slate-500">
          {formatDistance(date, new Date(), { addSuffix: true })}
        </p>
      </div>
    </div>
  );
};
