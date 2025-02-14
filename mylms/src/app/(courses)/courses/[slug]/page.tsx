import { Progress } from "@/app/_components/progress";
import { Rating } from "@/app/_components/rating";
import { API_URL } from "@/configs/global";
import type { CourseDetails } from "@/types/course-details.interface";
import { CourseAside } from "./_components";
import { Tab } from "@/types/tab.type";
import { Tabs } from "@/app/_components/tabs/tabs";
import { Accordion } from "@/app/_components/accordion";
import { Accordion as AccordionType } from "@/types/accordion";

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
export default async function CourseDetails({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const course = await getCourse(slug);
  // console.log("COUSRES==>", course);
  console.log("faqs==>", course);

  const faqs: AccordionType[] = course.frequentlyAskedQuestions.map((faq) => ({
    id: faq.id,
    title: faq.question,
    content: faq.answer,
  }));
  const tabs: Tab[] = [
    {
      label: "Course Details",
      content: course.description,
    },
    {
      label: "Reviews and Questions",
      content: "course comments",
    },
    {
      label: "Frequently Asked Questions",
      content: <Accordion data={faqs} />,
    },
  ];

  return (
    <div className="h-96 container grid grid-cols-10 grid-rows-[1fr 1fr] gap-10 py-10">
      <div className="bg-primary pointer-events-none absolute right-0 aspect-square w-1/2   rounded-full opacity-10 blur-3xl"></div>
      <div className="col-span-10 xl:col-span-7">
        <h1 className="text-center xl:text-left text-2xl lg:text-3xl xl:text-4xl font-black leading-10">
          {course.title}
        </h1>
        <h2 className="mt-4 text-center xl:text-left text-lg  leading-9">
          {course.subTitle}
        </h2>

        <div className=" mt-5">Video Player Component</div>
      </div>
      <div className="col-span-10 xl:col-span-3">
        <Rating rate={3} size="small" variant="info" />
        <Progress value={75} />
        <Progress value={75} variant="warning" size="tiny" />
        <Progress value={75} variant="error" size="tiny" />
        <Progress value={75} variant="info" size="tiny" />
      </div>
      <div className="col-span-10 xl:col-span-6">
        <div className="col-span-10 xl:col-span-3">
          <Tabs tabs={tabs} />
        </div>
      </div>
      <div className="col-span-10 xl:col-span-4 ">
        <CourseAside {...course} />
      </div>
    </div>
  );
}
