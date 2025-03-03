import Image from "next/image";

export default function AuthTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="fade-in container pl-0 flex max-w-6xl dark:bg-base-50 mt-16 rounded-lg border dark:border-base-content dark:border-opacity-10 shadow-md dark:bg-opacity-20 text-left">
      <section className="flex-1 p-10 flex flex-col">{children}</section>
      <section className="flex-1 p-10">
        <div className="dark:bg-primary-focus rounded-lg shadow-lg dark:text-white flex flex-col items-center justify-around text-center p-6">
          <h5 className="text-xl">
            ImanLearn; A Different Way to Learn Programming
          </h5>
          <div className="dark:bg-primary dark:bg-opacity-50 p-2 rounded-full w-80 h-80 my-8 flex justify-center items-center">
            <div className="dark:bg-primary dark:bg-opacity-90 p-2 rounded-full w-72 h-72 my-6 flex justify-center dark:border-white border dark:border-opacity-10 relative">
              <Image
                priority
                fill
                src="/images/programmer.svg"
                alt="Frontend training, React training, React courses, React educational courses"
              />
            </div>
          </div>
          <div>
            <h4 className="text-xl">Learn Programming in the Shortest Time</h4>
            <h6 className="mt-3">
              Here, we get straight to the point quickly!
            </h6>
          </div>
        </div>
      </section>
    </div>
  );
}
