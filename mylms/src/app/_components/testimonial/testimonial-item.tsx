import Image from "next/image";
import { TestimonialProps } from "./testimonial.types";

const TestimonialItem: React.FC<TestimonialProps> = ({
  testimonial: { image, name, skills, description },
}) => {
  return (
    <div className="border border-base-content/10 p-4 rounded-2xl shadow-sm transition-transform hover:-translate-y-1">
      <div className="flex items-center gap-3">
        <Image
          loading="lazy"
          src={image}
          alt={name}
          width={48}
          height={48}
          className="rounded-full shadow-md transition-transform hover:scale-105"
        />
        <div className="flex flex-col">
          <div className="text-base font-semibold text-info">{name}</div>
          <div className="text-sm text-base-content/60">{skills}</div>
        </div>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-base-content/80">
        {description}
      </p>
    </div>
  );
};

export default TestimonialItem;

// import Image from "next/image";
// import { TestimonialProps } from "./testimonial.types";

// const TestimonialItem: React.FC<TestimonialProps> = ({
//   testimonial: { image, name, skills, description },
// }) => {
//   return (
//     <div className="border-base-content/5 border p-4 rounded-2xl text-sm ">
//       <div className="flex items-center gap-2">
//         <Image
//           loading="lazy"
//           src={image}
//           alt={name}
//           width="48"
//           height="48"
//           className="pointer-events-none rounded-full grayscale"
//         />
//         <div className="flex flex-col items-start font-semibold">
//           <div className="text-info/80">{name}</div>
//           <div className="text-base-content/60">{skills}</div>
//         </div>
//       </div>
//       <p className="mt-3 leading-6 ">{description}</p>
//     </div>
//   );
// };

// export default TestimonialItem;
