// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "cdn.intuji.com",
//         pathname: "/2022/09/Nestjs_hero1.png",
//       },
//       {
//         protocol: "https",
//         hostname: "images.ctfassets.net",
//         pathname:
//           "/23aumh6u8s0i/3jY4eCzPqbJ8bP7RX8SnTe/d6252025eff38698a5ed4ffdbd02f580/nextjs_hero",
//       },
//       {
//         protocol: "https",
//         hostname: "sourcebae.com",
//         pathname: "/blog/wp-content/uploads/2023/08/Benefits-of-ReactJS.jpg",
//       },
//       {
//         protocol: "https",
//         hostname: "solar-digital.com",
//         pathname:
//           "/images/post/57/main/finding-the-perfect-fit-a-guide-to-hiring-nodejs-developers.png",
//       },
//       {
//         protocol: "https",
//         hostname: "kvadrat.az",
//         pathname:
//           "/uploads/articles/66a2090c079ec.png.pagespeed.ce.6KDo3auGtQ.png",
//       },
//       {
//         protocol: "https",
//         hostname: "miro.medium.com",
//         pathname: "/v2/resize:fit:720/format:webp/1*__f27S-qQF2CAASt5bOwqg.png",
//       },
//       {
//         protocol: "https",
//         hostname: "externlabs.com",
//         pathname: "/blogs/wp-content/uploads/2021/11/ExpressJS-Library.jpg",
//       },
//       {
//         protocol: "https",
//         hostname: "www.mytaskpanel.com",
//         pathname: "/wp-content/uploads/2024/01/03-blog.webp",
//       },
//     ],
//   },
// };

// module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"], // Allow localhost for image loading
  },
};

module.exports = nextConfig;
