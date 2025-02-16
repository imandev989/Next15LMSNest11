import { CourseSummary } from "@/types/course-summary.interface";
import { HomeHeroSection } from "./_components/home-hero-section/home-hero-section";
import { CourseCardList } from "./(courses)/_components/course-card-list";
import { homeFeatures } from "@/data/home-features";
import Feature from "./_components/feature/feature";
import { API_URL } from "@/configs/global";
import { IconArrowRightFill } from "./_components/icons/icons";
import { Button } from "./_components/button";
import { BlogPostSummary } from "@/types/blog-post-summary.interface";
import { BlogPostCardList } from "./(blog)/_components/blog-post-card-list";
import { Suspense } from "react";
import { CardPlaceholder } from "./_components/placeholders/card/card-placeholder";
import { testimonials } from "@/data/testimonial";
import { TestimonialList } from "./_components/testimonial/testimonial-list";

async function getNewestCourses(count: number): Promise<CourseSummary[]> {
  const res = await fetch(`${API_URL}/courses/newest/${count}`, {
    next: { revalidate: 24 * 60 * 60 },
  });
  return res.json();
}

async function getNewestPosts(count: number): Promise<BlogPostSummary[]> {
  const res = await fetch(`${API_URL}/blog/newest/${count}`);
  return res.json();
}

export default async function Home() {
  const newestCoursesData = getNewestCourses(8);
  const newestBlogPostsData = getNewestPosts(8);
  // Wait for the promises to resolve
  const [newestCourses, newestBlogPosts] = await Promise.all([
    newestCoursesData,
    newestBlogPostsData,
  ]);
  // console.log(newestBlogPosts);
  return (
    <>
      <HomeHeroSection />
      <section className="dark:bg-base-75 mt-10">
        <div className="container py-10 flex flex-col lg:flex-row gap-10 xl:gap-5">
          {homeFeatures.map((feature) => (
            <Feature key={`feature-${feature.id}`} feature={feature} />
          ))}
        </div>
      </section>
      <section className="container pt-20">
        <div className="text-center xl:text-left">
          <h2 className="text-2xl font-extrabold">
            Latest Educational Courses
          </h2>
          <p className="mt-3 text-lg">
            To stay up-to-date, learning new tips is essential!
          </p>
        </div>
        <Suspense fallback={<CardPlaceholder count={8} className="mt-5" />}>
          <CourseCardList courses={newestCourses} />
        </Suspense>
      </section>
      <section className="container my-40">
        <div className="relative pt-0 text-center">
          <div className="bg-primary pointer-events-none absolute left-1/2 aspect-square w-1/2 -translate-x-1/2 -top-96 rounded-full opacity-10 blur-3xl"></div>

          <h2
            lang="en"
            className="gradient leading-[1.3] relative z-10 mx-auto inline-block text-[clamp(2rem,6vw,5.5rem)] font-black"
          >
            Next.JS & Nest.JS
          </h2>
          <p className="text-base-content/70 relative z-[2] py-4 m-auto md:text-3xl max-w-5xl font-light !leading-[1.7]">
            Next.js and Nest.js are the top JavaScript libraries, dominating the
            web world! Here, you can find the most advanced topics. So, start
            learning right now! We’ll be with you from the beginning of your
            journey with specialized and highly practical training.
          </p>
          <div className="flex flex-col lg:flex-row items-center gap-3 justify-center">
            <Button
              variant="primary"
              size="large"
              className="mt-7"
              animatedIcon={true}
            >
              Next.js and Nest.js Courses
              <IconArrowRightFill fill="currentColor" />
            </Button>
            <Button
              variant="neutral"
              size="large"
              className="mt-7"
              animatedIcon={true}
            >
              Next.js and Nest.js Articles
            </Button>
          </div>
        </div>
      </section>
      <section className="container  px-2">
        <div className=" flex flex-col xl:flex-row gap-4 justify-center xl:justify-between items-center">
          <div className="text-center xl:text-left">
            <h2 className="text-2xl font-extrabold">
              Latest Educational Articles
            </h2>
            <p className="mt-3 text-lg">
              We provide you with the most up-to-date articles in the world of
              technology for free because your progress matters to us!
            </p>
          </div>
          <Button
            variant="neutral"
            className="font-semibold"
            animatedIcon={true}
          >
            All Articles
            <IconArrowRightFill fill="currentColor" />
          </Button>
        </div>
        <BlogPostCardList posts={newestBlogPosts} />
      </section>
      <div className="relative mt-32 ltr">
        <div className="bg-primary pointer-events-none absolute bottom-0 left-1/2 aspect-square w-1/2 -translate-x-1/2 rounded-full opacity-5 -top-52 blur-3xl"></div>
        <h2 className="text-info relative z-0 mx-auto text-3xl font-extrabold block w-fit">
          <span className="-z-10 w-8 h-8 absolute bg-info opacity-25 -top-2 rounded-full inline-block -right-3"></span>
          ImanLearn Student Experiences
        </h2>
        <p className="mb-32 text-lg text-center mt-2">
          You're not alone here. See what other students think about
          Imanlearns's courses.
        </p>
        <TestimonialList testimonials={testimonials} />
      </div>
    </>
  );
}
