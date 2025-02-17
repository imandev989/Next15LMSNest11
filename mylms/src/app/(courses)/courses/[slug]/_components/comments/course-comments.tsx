"use client";

import { useParams } from "next/navigation";
import { useCourseComments } from "../../_api/get-comments";
import { TextPlaceholder } from "@/app/_components/placeholders";
import { Comment } from "@/app/_components/comment";

const CourseComments = () => {
  const { slug } = useParams();

  const {
    data: comments,
    error,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    refetch,
  } = useCourseComments({
    params: {
      slug: slug as string,
      page: 1,
    },
  });

  return (
    <>
      {comments?.comments.map((comment) => (
        <Comment key={`comment-${comment.id}`} {...comment} variant="info" />
      ))}
    </>
  );
};

export default CourseComments;

// const CourseComments = () => {
//   const { slug } = useParams();

//   const { data: comments, isLoading } = useCourseComments({
//     params: {
//       slug: slug as string,
//       page: 1,
//     },
//   });
//   // console.log("CLENT FETCH", comments.comments);
//   // if (!comments || !comments.comments) {
//   //   return <p>No comments available</p>;
//   // }
//   return (
//     <>
//       {comments?.comments.map((p) => (
//         <p key={p.id} className="mb-8">
//           {p.commentText}
//         </p>
//       ))}
//       {isLoading && <TextPlaceholder />}
//     </>
//   );
// };

// export default CourseComments;
