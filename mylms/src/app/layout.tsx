// import Footer from "./_components/footer/footer";
// import Header from "./_components/header/header";

import { Footer } from "./_components/footer";
import Header from "./_components/header/header";
import "./globals.css";

import { Figtree } from "next/font/google";
// import localFont from "next/font/local";

const figtree = Figtree({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-figtree",
  weight: ["300", "400", "500", "600", "700", "700", "800", "900"],
});

// Initialize Lato font with appropriate options
// const lato = Lato({
//   display: "swap",
//   subsets: ["latin"],
//   variable: "--font-lato", // Variable name for the font
//   weight: ["300", "400", "700"], // You can adjust the weights based on your need
// });

// const yekanbakh = localFont({
//   src: [
//     {
//       path: "../../public/fonts/yekanbakh/YekanBakhFaNum-Thin.woff2",
//       weight: "100",
//       style: "normal",
//     },
//     {
//       path: "../../public/fonts/yekanbakh/YekanBakhFaNum-Light.woff2",
//       weight: "300",
//       style: "normal",
//     },
//     {
//       path: "../../public/fonts/yekanbakh/YekanBakhFaNum-Regular.woff2",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "../../public/fonts/yekanbakh/YekanBakhFaNum-SemiBold.woff2",
//       weight: "600",
//       style: "normal",
//     },
//     {
//       path: "../../public/fonts/yekanbakh/YekanBakhFaNum-Bold.woff2",
//       weight: "700",
//       style: "normal",
//     },
//     {
//       path: "../../public/fonts/yekanbakh/YekanBakhFaNum-Black.woff2",
//       weight: "900",
//       style: "normal",
//     },
//   ],
//   variable: "--font-yekanbakh",
// });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <html dir="rtl" className={`${yekanbakh.variable} ${figtree.variable}`}>
    <html className={`dark ${figtree.variable}`}>
      <body className="min-h-screen grid grid-rows-[80px_1fr_auto] dark:bg-base-100 dark:text-base-content bg-white text-base-100">
        <Header />
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
