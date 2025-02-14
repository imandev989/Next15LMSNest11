import { Price } from "@/app/_components/price/price";
import { CourseAsideProps } from "./course-aside.types";
import { Rating } from "@/app/_components/rating";
import {
  IconArrowRightFill,
  IconClock,
  IconComment,
  IconDoc,
  IconDownload,
  IconLevel,
  IconRecord,
  IconStudents,
} from "@/app/_components/icons/icons";
import { Progress } from "@/app/_components/progress";
import { CourseLevel } from "@/enums/course-level.enum";
import { Variant } from "@/app/_components/types/variant.type";
import { Avatar } from "@/app/_components/avatar";
import { API_URL } from "@/configs/global";
import { Button } from "@/app/_components/button/button";

const levelVariant: Record<CourseLevel, Variant> = {
  0: "warning",
  1: "info",
  2: "success",
};

const levelProgress: Record<CourseLevel, number> = {
  0: 25,
  1: 50,
  2: 100,
};

export const CourseAside: React.FC<CourseAsideProps> = ({
  basePrice,
  numberOfLectures,
  numOfStudents,
  duration,
  recordStatus,
  isDownloadable,
  averageReviewRating,
  level,
  numOfReviews,
  authorName,
  authorSpecialty,
  profileImageId,
  levelNumber,
}) => {
  return (
    <aside className="flex flex-col gap-5 sticky top-5" dir="ltr">
      <div className="flex items-center justify-between">
        <Price price={basePrice} text="Free Course" />
        <Rating rate={averageReviewRating} />
      </div>
      <div className="flex border rounded-lg dark:border-base-content/10 mb-4">
        <div className="flex-1 border-l dark:border-base-content/10 p-3 flex gap-2 items-center">
          <IconStudents width={22} />
          <span className="font-bold">{numOfStudents}</span>
          Participants
        </div>
        <div className="flex-1 p-3 flex flex-col gap-2">
          <div className="flex gap-2">
            <IconLevel width={22} />
            {level}
          </div>
          <Progress
            size="tiny"
            variant={levelVariant[levelNumber!]}
            value={levelProgress[levelNumber!]}
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <IconDoc width={22} />
        <div className="flex items-center gap-2">
          <span className="dark:text-base-content/80">
            Number of Lectures:{" "}
          </span>
          <span className="dark:text-info">{numberOfLectures}</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <IconClock width={22} />
        <div className="flex items-center gap-2">
          <span className="dark:text-base-content/80">Duration: </span>
          <span className="dark:text-info">{duration}</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <IconRecord width={22} />
        <div className="flex items-center gap-2">
          <span className="dark:text-base-content/80">Recording Status: </span>
          <span className="dark:text-info">{recordStatus}</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <IconDownload width={22} />
        <div className="flex items-center gap-2">
          <span className="dark:text-base-content/80">Downloadable: </span>
          <span className="dark:text-info">
            {isDownloadable ? "Yes" : "No"}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <IconComment width={22} />
        <div className="flex items-center gap-2">
          <span className="dark:text-base-content/80">Number of Reviews: </span>
          <span className="dark:text-info">{numOfReviews}</span>
        </div>
      </div>
      <div>Enrollment in course component</div>
      <div className="border-t border-dashed dark:border-base-content/20 my-5 pt-8 mb-0 flex gap-4 items-center">
        <Avatar src={`${API_URL}/picture/${profileImageId}`} />
        <div>
          <span className="font-semibold">{authorName}</span>
          <p className="dark:text-base-content/60 font-semibold">
            {authorSpecialty}
          </p>
        </div>
      </div>
      <Button
        variant="neutral"
        shape="full"
        className="font-semibold"
        animatedIcon={true}
      >
        View Profile
        <IconArrowRightFill fill="currentColor" />
      </Button>
    </aside>
  );
};
