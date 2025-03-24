"use client";

import AuthCode from "@/app/_components/auth-code/auth-code";
import { AuthCodeRef } from "@/app/_components/auth-code/auth-code.types";
import { Button } from "@/app/_components/button/button";
import { Timer } from "@/app/_components/timer/timer";
import Link from "next/link";
import { useRef } from "react";

const getTwoMinutesFromNow = () => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 120);
  return time;
};

const VerificationForm = () => {
  const authCodeRef = useRef<AuthCodeRef>(null);
  return (
    <>
      <h5 className="text-2xl">Verification Code</h5>
      <p className="mt-2">
        The amazing world of programming is waiting for you!
      </p>
      <form className="flex flex-col gap-6 mt-10 flex-1">
        <AuthCode
          className="mt-10"
          ref={authCodeRef}
          onChange={(value) => {
            console.log(value);
          }}
        />
        <Timer
          className="my-8"
          size="small"
          expiryTimestamp={getTwoMinutesFromNow()}
          showDays={false}
          showHours={false}
        />
        <Button isLink={true} onClick={authCodeRef.current?.clear}>
          Resend Verification Code
        </Button>
        <Button type="submit" variant="primary">
          Confirm and Continue
        </Button>
        <div className="flex items-start gap-1 justify-center mt-auto">
          <span>To correct your mobile number</span>
          <Link href="/signin">click here</Link>
          <span>to modify it</span>
        </div>
      </form>
    </>
  );
};

export default VerificationForm;
