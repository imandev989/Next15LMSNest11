import Image from "next/image";
import { Button } from "../button";

export const HomeHeroSection: React.FC = () => {
  return (
    <section className="bg-hero-pattern bg-no-repeat bg-center xl:bg-left mt-5 xl:mt-20">
      <div className="container flex flex-col-reverse items-center xl:flex-row">
        <div className="flex-1  flex flex-col gap-5 mt-12 pb-5 text-center xl:text-left">
          <h3 className="text-xl xl:text-2xl dark:text-info">Welcome to...</h3>
          <h1 className="text-3xl lg:text-5xl xl:text-5xl font-black gradient">
            The Path to the Summit of Programming
          </h1>
          <p className=" text-lg md:text-xl font-bold leading-8">
            Wherever you are in your programming journey, with the support of
            experienced Imanlearn instructors, you can reach higher peaks
            without limits.We've always got your back
          </p>
          <div className="mt-5 flex gap-4  mr-auto">
            <Button variant="neutral" size="large">
              Programming Consultation
            </Button>
            <Button variant="primary" size="large">
              JS Stack Courses
            </Button>
          </div>
          <Image
            src="/images/frameworks.png"
            className="p-2  mt-4 opacity-70  mr-auto  "
            width={412}
            height={39}
            alt="Frameworks"
          />
        </div>
        <Image
          src="/images/programmer-landing.svg"
          alt="Programmer Illustration"
          width={702}
          height={521}
        />
      </div>
    </section>
  );
};
