import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogPostSummary } from "@/types/blog-post-summary.interface";
import { Badge } from "@/app/_components/badge";
import {
  IconCalendar,
  IconClock,
  IconComment,
  IconEye,
  IconUserProfile,
} from "@/app/_components/icons/icons";

export type BlogPostCardProps = BlogPostSummary & {};

export const BlogPostCard: React.FC<BlogPostCardProps> = ({
  title,
  thumbnailUrl,
  studyTime,
  author,
  postDate,
  numberOfViews,
  numberOfComments,
  isNew,
  slug,
}) => {
  return (
    <div className="card rounded-2xl shadow-lg bg-white dark:bg-gray-800 transition-transform hover:-translate-y-1 hover:shadow-2xl overflow-hidden relative">
      {isNew && (
        <Badge
          variant="success"
          size="small"
          className="absolute right-3 top-3 !opacity-100"
        >
          New
        </Badge>
      )}

      <figure className="relative">
        <Image
          src={thumbnailUrl}
          alt={title}
          width={550}
          height={327}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
        />
      </figure>

      <div className="p-4">
        <Link href={`/blog/${slug}`}>
          <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 hover:text-blue-500 transition-colors">
            {title}
          </h3>
        </Link>

        <div className="flex items-center justify-between mt-3 text-sm text-gray-600 dark:text-gray-300">
          <div className="flex items-center gap-1">
            <IconUserProfile width={16} height={16} />
            {author}
          </div>
          <div className="flex items-center gap-1">
            <IconCalendar width={16} height={16} />
            {postDate}
          </div>
        </div>
      </div>

      <div className="p-4 border-t border-gray-200 dark:border-gray-700 text-xs flex justify-between items-center">
        <div className="flex gap-2">
          <Badge variant="warning" className="flex items-center gap-1">
            <IconEye width={16} height={16} />
            {numberOfViews}
          </Badge>
          <Badge variant="accent" className="flex items-center gap-1">
            <IconComment width={16} height={16} />
            {numberOfComments}
          </Badge>
        </div>
        <span className="flex items-center gap-1 text-gray-600 dark:text-gray-300">
          <IconClock width={16} height={16} />
          Study Time: {studyTime} min
        </span>
      </div>
    </div>
  );
};

// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { BlogPostSummary } from "@/types/blog-post-summary.interface";
// import { Badge } from "@/app/_components/badge";
// import {
//   IconCalendar,
//   IconClock,
//   IconComment,
//   IconEye,
//   IconUserProfile,
// } from "@/app/_components/icons/icons";

// export type BlogPostCardProps = BlogPostSummary & {};

// export const BlogPostCard: React.FC<BlogPostCardProps> = ({
//   title,
//   thumbnailUrl,
//   studyTime,
//   author,
//   postDate,
//   numberOfViews,
//   numberOfComments,
//   isNew,
//   slug,
// }) => {
//   return (
//     <div className="card">
//       {isNew && (
//         <Badge
//           variant="ghost"
//           size="small"
//           className="absolute right-2 top-2 !opacity-100"
//         >
//           New
//         </Badge>
//       )}
//       <figure>
//         <Image src={thumbnailUrl} alt={title} width={550} height={327} />
//       </figure>
//       <div className="card-body">
//         <Link href={`/blog/${slug}`} className="card-title mb-auto">
//           {title}
//         </Link>

//         <div className="flex items-center justify-between mt-2">
//           <Badge variant="info" size="tiny">
//             <IconUserProfile width={16} height={16} />
//             {author}
//           </Badge>
//           <Badge variant="neutral">
//             <IconCalendar width={16} height={16} />
//             {postDate}
//           </Badge>
//         </div>
//       </div>

//       <div className="card-footer text-xs justify-between">
//         <div className="flex gap-1">
//           <Badge variant="warning">
//             <IconEye width={16} height={16} />
//             {numberOfViews}
//           </Badge>
//           <Badge variant="accent">
//             <IconComment width={16} height={16} />
//             {numberOfComments}
//           </Badge>
//         </div>
//         <span className="flex items-center gap-1">
//           <IconClock width={16} height={16} />
//           Study Time : {studyTime} Min
//         </span>
//       </div>
//     </div>
//   );
// };
