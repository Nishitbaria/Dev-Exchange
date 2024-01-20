import Link from "next/link";
import React from "react";
import { Badge } from "../ui/badge";

interface Props {
  _id: string;
  name: string;
  totalQuestion?: number;
  showCount?: boolean;
}

export default function RenderTag({
  _id,
  totalQuestion,
  name,
  showCount,
}: Props) {
  return (
    <Link href={`/tags/${_id}`} className="flex justify-between gap-2">
      <Badge className="subtle-medium background-light800_dark300 text-light400_light500 rounded-md border-none px-4 py-2 uppercase">
        {name}
      </Badge>
      {showCount && (
        <p className="small-medium  text-dark500_light700">{totalQuestion}</p>
      )}
    </Link>
  );
}
