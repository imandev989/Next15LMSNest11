import { Button } from "@/app/_components/button/button";
import Link from "next/link";

const VerificationForm = () => {
  return (
    <>
      <h5 className="text-2xl">Verification Code</h5>
      <p className="mt-2">The amazing world of programming awaits you!</p>
      <form className="flex flex-col gap-6 mt-10 flex-1">
        <p>Auth code</p>
        {/* Timer placeholder - assuming you'll add a timer component here */}
        Timer
        <Button isLink={true}>Resend Verification Code</Button>
        <Button type="submit" variant="primary">
          Confirm and Continue
        </Button>
        <div className="flex items-start gap-1 justify-center mt-auto">
          <span>To edit your mobile number,</span>
          <Link href="/signin">click here</Link>
          {/* Adjusted for natural English flow */}
        </div>
      </form>
    </>
  );
};

export default VerificationForm;
