import Image from "next/image";
import Link from "next/link";
import { Avatar } from "../avatar";

export const Footer = () => {
  return (
    <div className=" bg-base-100 text-base-content" dir="ltr">
      <footer className="container flex flex-col lg:flex-row items-center gap-5 px-2 lg:px-12 xl:px-40 py-20">
        <div className="text-center flex flex-col items-center lg:me-20">
          <Image
            src="/images/logo-en-light.svg"
            width={180}
            height={36}
            alt="Imanlearn"
          />
          <p className="opacity-50 mt-2">
            Programming Education Platform
            <br /> Continuous Learning - Constant Progress
          </p>
        </div>
        <div className="flex md:flex-row gap-8 md:gap-6 whitespace-nowrap">
          <div className="grid flex-1 basis-36 gap-3 place-items-center md:place-items-start">
            <Link href="/docs/install/" className="link link-hover">
              React and Next.js Tutorials
            </Link>
            <Link href="/docs/customize/" className="link link-hover">
              Senior React Developer
            </Link>
            <Link href="/docs/customize/" className="link link-hover">
              Programming Consultation
            </Link>
          </div>

          <div className="grid flex-1 basis-36 gap-3 place-items-center md:place-items-start">
            <Link href="/docs/themes/" className="link link-hover">
              Imanlearn on LinkedIn
            </Link>
            <Link href="/docs/themes/" className="link link-hover">
              Imanlearn on Telegram
            </Link>
            <Link href="/docs/themes/" className="link link-hover">
              Imanlearn on YouTube
            </Link>
          </div>

          <div className="grid flex-1 basis-36 gap-3 place-items-center md:place-items-start">
            <Link href="/docs/themes/" className="link link-hover">
              Articles and Blog
            </Link>
            <Link href="/docs/themes/" className="link link-hover">
              Frequently Asked Questions
            </Link>
            <Link href="/docs/themes/" className="link link-hover">
              Terms of Use and Privacy Policy
            </Link>
          </div>
        </div>
      </footer>

      <div className="px-10 bg-base-200 text-left" lang="en" dir="ltr">
        <div className="container py-10 flex justify-between items-center">
          <div className="flex gap-5 items-center">
            <Avatar src="/images/developer.jpg" />

            <div className="flex flex-col">
              <span className="text-base-content/50">Developed by:</span>
              <span className="text-lg font-bold tracking-wide">
                Iman Namazi Baygi
              </span>
            </div>
          </div>
          <span className="text-sm text-base-content/60 font-semibold">
            Copyright © 2025
            <p>All rights reserved</p>
          </span>
        </div>
      </div>
    </div>
  );
};
