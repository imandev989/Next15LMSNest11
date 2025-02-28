import { readData } from "@/core/http-service/http-service";
import { CourseCommentList } from "../_types/course-comment.interface";
import { useInfiniteQuery } from "@tanstack/react-query";
import { API_URL } from "@/configs/global";

type GetCommentsOptions = {
  params: {
    slug: string;
    page: number;
  };
};

const getComments = ({
  params,
}: GetCommentsOptions): Promise<CourseCommentList> => {
  const { slug, page } = params;

  const url = `${API_URL}/courses/${slug}/comments?page=${page}`;
  // console.log("URL", url);
  return readData(url);
};

export const useCourseComments = ({ params }: GetCommentsOptions) => {
  const {
    data,
    error,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    refetch,
  } = useInfiniteQuery({
    queryKey: ["courseComments", params.slug],
    queryFn: ({ pageParam }) =>
      getComments({ params: { ...params, page: pageParam } }),
    getNextPageParam: (lastPage) => lastPage.nextPage,
    initialPageParam: 1,
    staleTime: 5 * 60 * 60 * 1000,
    gcTime: 6 * 60 * 68 * 1000,
  });
  // console.log("FETCH RESUALT", data);
  return {
    data,
    error,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    refetch,
  };
};

// export const useCourseComments = ({ params }: GetCommentsOptions) => {
//   const { data, isLoading } = useQuery({
//     queryKey: ["courseComments"],
//     queryFn: () => getComments({ params }),
//     staleTime: 5 * 60 * 60 * 1000,
//     gcTime: 6 * 60 * 68 * 1000,
//   });
//   console.log("FETCH RESUALT", data);
//   return { data, isLoading };
// };
