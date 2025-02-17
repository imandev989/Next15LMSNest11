"use client";

import { useParams } from "next/navigation";
import { useCourseComments } from "../../_api/get-comments";
import { TextPlaceholder } from "@/app/_components/placeholders";
import { Comment } from "@/app/_components/comment";
import { Fragment, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { IconRefresh } from "@/app/_components/icons/icons";
import { Button } from "@/app/_components/button";

const CourseComments = () => {
  const { ref, inView } = useInView({});
  const { slug } = useParams();

  const {
    data: comments,
    error,
    isFetchingNextPage,
    isFetching,
    fetchNextPage,
    hasNextPage,
    refetch,
  } = useCourseComments({
    params: {
      slug: slug as string,
      page: 1,
    },
  });
  // console.log("COMMENTS====>", comments.pages);

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  if (error) {
    return (
      <>
        <p>Error connecting to the server</p>
        <div className="text-center mt-3">
          <Button
            variant="neutral"
            className="font-semibold"
            isOutline={true}
            shape="wide"
            onClick={() => refetch()}
          >
            <IconRefresh />
            Retry
          </Button>
        </div>
      </>
    );
  }

  return (
    <div>
      {comments?.pages?.map((currentPage) => (
        <Fragment key={`comment-page-${currentPage}`}>
          {currentPage.comments.map((comment) => (
            <Comment
              key={`comment-${comment.id}`}
              {...comment}
              variant="info"
            />
          ))}
        </Fragment>
      ))}

      {(isFetching || hasNextPage) && (
        <div ref={ref}>
          <TextPlaceholder />
        </div>
      )}
    </div>
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
