import { Badge } from "@/app/_components/badge";
import { IconArrowRight, IconClock } from "@/app/_components/icons/icons";
import { Price } from "@/app/_components/price/price";
import { CourseSummary } from "@/types/course-summary.interface";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export type CourseCardProps = CourseSummary & {};

export const CourseCard: React.FC<CourseCardProps> = ({
  coverImageId,
  title,
  subTitle,
  level,
  recordStatus,
  basePrice,
  duration,
  slug,
}: CourseCardProps) => {
  return (
    <div className="card rounded-2xl shadow-lg bg-white dark:bg-gray-800 transition-transform hover:-translate-y-1 hover:shadow-2xl overflow-hidden">
      <figure className="relative">
        <Image
          src={`http://localhost:3001/static/courses/${coverImageId}.webp`}
          alt={title}
          width={550}
          height={327}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
        />
      </figure>

      <div className="p-4">
        <div className="flex gap-2 mb-3">
          <Badge variant="info" className="text-sm">
            {recordStatus}
          </Badge>
          <Badge variant="accent" className="text-sm">
            {level}
          </Badge>
        </div>

        <Link href={`/course/${slug}`}>
          <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 hover:text-blue-500 transition-colors">
            {title}
          </h3>
        </Link>

        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 line-clamp-2">
          {subTitle}
        </p>

        <div className="flex items-center justify-between mt-4">
          <Badge variant="warning" className="flex items-center gap-1 text-xs">
            <IconClock width={16} height={16} />
            {duration}
          </Badge>
          <Price price={basePrice} size="small" />
        </div>
      </div>

      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <Link
          href={`/courses/${slug}`}
          className="flex items-center justify-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
        >
          View Course Details
          <IconArrowRight fill="currentColor" />
        </Link>
      </div>
    </div>
  );
};

// import { Badge } from "@/app/_components/badge";
// import { IconArrowRight, IconClock } from "@/app/_components/icons/icons";
// import { Price } from "@/app/_components/price/price";
// import { CourseSummary } from "@/types/course-summary.interface";
// import Image from "next/image";
// import Link from "next/link";
// export type CourseCardProps = CourseSummary & {};

// export const CourseCard: React.FC<CourseCardProps> = ({
//   coverImageId,
//   title,
//   subTitle,
//   level,
//   recordStatus,
//   basePrice,
//   duration,
//   slug,
// }: CourseCardProps) => {
//   return (
//     <div className="card">
//       <figure>
//         <Image
//           src={`http://localhost:3001/static/courses/${coverImageId}.webp`}
//           alt={title}
//           width={550}
//           height={327}
//         />
//       </figure>
//       <div className="mt-2 flex gap-2 font-semibold dark:text-info px-1 py-2">
//         <Badge variant="info" className="text-nowrap">
//           {recordStatus}
//         </Badge>
//         <Badge variant="accent" className="text-nowrap">
//           {level}
//         </Badge>
//       </div>
//       <div className="card-body">
//         <Link href={`/course/${slug}`}>{title}</Link>
//         <p>{subTitle}</p>
//         <div className="flex items-center justify-between mt-3">
//           <Badge variant="warning">
//             <IconClock width={16} height={16} />
//             {duration}
//           </Badge>
//           <Price price={basePrice} size="small" />
//         </div>
//         <Link
//           href={`/courses/${slug}`}
//           className="card-footer justify-center animated-icon"
//         >
//           View Course Details
//           <IconArrowRight fill="currentColor" />
//         </Link>
//       </div>
//     </div>
//   );
// };
