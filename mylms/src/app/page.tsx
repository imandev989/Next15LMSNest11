import { CourseSummary } from "@/types/course-summary.interface";
import { HomeHeroSection } from "./_components/home-hero-section/home-hero-section";
import { CourseCardList } from "./(courses)/_components/course-card-list";

async function getNewestCourses(count: number): Promise<CourseSummary[]> {
  const res = await fetch(`http://localhost:3001/api/courses/newest/${count}`, {
    next: { revalidate: 24 * 60 * 60 },
  });
  return res.json();
}

export default async function Home() {
  const newestCourses = await getNewestCourses(8);
  return (
    <>
      <HomeHeroSection />
      <section className="container pt-20">
        <div className="text-center xl:text-left">
          <h2 className="text-2xl font-extrabold">
            Latest Educational Courses
          </h2>
          <p className="mt-3 text-lg">
            To stay up-to-date, learning new tips is essential!
          </p>
        </div>
        <CourseCardList courses={newestCourses} />
      </section>
    </>
  );
}
