"use client";

import { useParams } from "next/navigation";
import { useCourseComments } from "../../_api/get-comments";

const CourseComments = () => {
  const { slug } = useParams();

  const { data: comments } = useCourseComments({
    params: {
      slug: slug as string,
      page: 1,
    },
  });
  // console.log("CLENT FETCH", comments.comments);
  // if (!comments || !comments.comments) {
  //   return <p>No comments available</p>;
  // }
  return (
    <>
      {comments?.comments.map((p) => (
        <p key={p.id} className="mb-8">
          {p.commentText}
        </p>
      ))}
    </>
  );
};

export default CourseComments;
