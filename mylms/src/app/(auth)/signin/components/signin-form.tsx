"use client";

import { Button } from "@/app/_components/button/button";
import { Textbox } from "@/app/_components/textbox";

const SignInForm = () => {
  return (
    <>
      <h5 className="text-2xl">Sign In | Register</h5>
      <p className="mt-2">The amazing world of programming awaits you!</p>
      <form className="flex flex-col gap-6 mt-16">
        <Textbox placeholder="Mobile Number" dir="ltr" />
        <Button type="submit" variant="primary">
          Confirm and Receive Code
        </Button>
      </form>
    </>
  );
};

export default SignInForm;
