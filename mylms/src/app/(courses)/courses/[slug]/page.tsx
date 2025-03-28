import { Progress } from "@/app/_components/progress";
import { Rating } from "@/app/_components/rating";
import { API_URL } from "@/configs/global";
import { CourseDetails } from "@/types/course-details.interface";
import { CourseAside } from "./_components/course-aside";
import { Tab } from "@/types/tab.type";
import { Tabs } from "@/app/_components/tabs";
import { Accordion } from "@/app/_components/accordion";
import { Accordion as AccordionType } from "@/types/accordion";
import CourseComments from "./_components/comments/course-comments";
import { CourseChapter } from "@/types/course-chapter.interface";
import { CourseCurriculum } from "./_components/curriculum/course-curriculum";
import Image from "next/image";
import { VideoPlayer } from "@/app/_components/video-player";

export async function generateStaticParams() {
  const slugs = await fetch(`${API_URL}/courses/slugs`).then((res) =>
    res.json()
  );

  return (slugs as string[]).map((slug) => ({
    slug: slug,
  }));
}

async function getCourse(slug: string): Promise<CourseDetails> {
  const res = await fetch(`${API_URL}/courses/${slug}`);
  return res.json();
}

async function getCurriculum(slug: string): Promise<CourseChapter[]> {
  const res = await fetch(`${API_URL}/courses/${slug}/curriculum`);
  return res.json();
}

export default async function CourseDetails({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const courseData = getCourse(slug);
  const courseCurriculumData = getCurriculum(slug);

  const [course, courseCurriculum] = await Promise.all([
    courseData,
    courseCurriculumData,
  ]);

  const faqs: AccordionType[] = course.frequentlyAskedQuestions.map((faq) => ({
    id: faq.id,
    title: faq.question,
    content: faq.answer,
  }));

  const tabs: Tab[] = [
    {
      label: "Course Specifications",
      content: course.description,
    },
    {
      label: "Reviews and Questions",
      content: <CourseComments />,
    },
    {
      label: "Frequently Asked Questions",
      content: <Accordion data={faqs} />,
    },
  ];

  return (
    <div className="container grid grid-cols-10 grid-rows-[1fr 1fr] gap-10 py-10">
      <div className="dark:bg-primary pointer-events-none absolute left-0 aspect-square w-1/2 rounded-full opacity-10 blur-3xl"></div>
      <div className="col-span-10 xl:col-span-7">
        <h1 className="text-center xl:text-left text-2xl lg:text-3xl xl:text-4xl font-black leading-10">
          {course.title}
        </h1>
        <h2 className="mt-4 text-center xl:text-left text-lg leading-9">
          {course.subTitle}
        </h2>

        <div className=" mt-5">
          {course.videoUrl ? (
            <VideoPlayer
              src={course.videoUrl}
              poster={`${API_URL}/picture/${course.coverImageId}.webp`}
            />
          ) : (
            <Image
              // src={`https://api.classbon.com/api/picture/${course.coverImageId}`}
              src={`http://localhost:3001/static/courses/${coverImageId}.webp`}
              alt={course.title}
              width={550}
              height={327}
              className="w-full"
            />
          )}
        </div>
      </div>
      <div className="col-span-10 xl:col-span-3">
        <CourseAside {...course} />
      </div>
      <div className="col-span-10 xl:col-span-6">
        <Tabs tabs={tabs} />
      </div>
      <div className="col-span-10 xl:col-span-4">
        <div className="sticky top-5">
          <h2 className="mb-5 text-xl">Course Curriculum</h2>
          <CourseCurriculum data={courseCurriculum} />
        </div>
      </div>
    </div>
  );
}

// import { Progress } from "@/app/_components/progress";
// import { Rating } from "@/app/_components/rating";
// import { API_URL } from "@/configs/global";
// import type { CourseDetails } from "@/types/course-details.interface";
// import { Tab } from "@/types/tab.type";
// import { Tabs } from "@/app/_components/tabs/tabs";
// import { Accordion } from "@/app/_components/accordion";
// import { Accordion as AccordionType } from "@/types/accordion";
// import { CourseAside } from "./_components/course-aside";
// import CourseComments from "./_components/comments/course-comments";

// export async function generateStaticParams() {
//   const slugs = await fetch(`${API_URL}/courses/slugs`).then((res) =>
//     res.json()
//   );

//   return (slugs as string[]).map((slug) => ({
//     slug: slug,
//   }));
// }

// async function getCourse(slug: string): Promise<CourseDetails> {
//   const res = await fetch(`${API_URL}/courses/${slug}`);
//   return res.json();
// }
// export default async function CourseDetails({
//   params,
// }: {
//   params: { slug: string };
// }) {
//   const { slug } = await params;
//   const course = await getCourse(slug);
//   // console.log("COUSRES==>", course);
//   // console.log("faqs==>", course);

//   const faqs: AccordionType[] = course.frequentlyAskedQuestions.map((faq) => ({
//     id: faq.id,
//     title: faq.question,
//     content: faq.answer,
//   }));
//   const tabs: Tab[] = [
//     {
//       label: "Course Details",
//       content: course.description,
//     },
//     {
//       label: "Reviews and Questions",
//       content: <CourseComments />,
//     },
//     {
//       label: "Frequently Asked Questions",
//       content: <Accordion data={faqs} />,
//     },
//   ];

//   return (
//     <div className="h-96 container grid grid-cols-10 grid-rows-[1fr 1fr] gap-10 py-10">
//       <div className="bg-primary pointer-events-none absolute right-0 aspect-square w-1/2   rounded-full opacity-10 blur-3xl"></div>
//       <div className="col-span-10 xl:col-span-7">
//         <h1 className="text-center xl:text-left text-2xl lg:text-3xl xl:text-4xl font-black leading-10">
//           {course.title}
//         </h1>
//         <h2 className="mt-4 text-center xl:text-left text-lg  leading-9">
//           {course.subTitle}
//         </h2>

//         <div className=" mt-5">Video Player Component</div>
//       </div>
//       <div className="col-span-10 xl:col-span-3">
//         <Rating rate={3} size="small" variant="info" />
//         <Progress value={75} />
//         <Progress value={75} variant="warning" size="tiny" />
//         <Progress value={75} variant="error" size="tiny" />
//         <Progress value={75} variant="info" size="tiny" />
//       </div>
//       <div className="col-span-10 xl:col-span-6">
//         <div className="col-span-10 xl:col-span-3">
//           <Tabs tabs={tabs} />
//         </div>
//       </div>
//       <div className="col-span-10 xl:col-span-4 ">
//         <CourseAside {...course} />
//       </div>
//     </div>
//   );
// }
