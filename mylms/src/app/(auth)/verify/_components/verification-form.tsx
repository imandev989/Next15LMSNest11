"use client";

import AuthCode from "@/app/_components/auth-code/auth-code";
import { AuthCodeRef } from "@/app/_components/auth-code/auth-code.types";
import { Button } from "@/app/_components/button/button";
import { Timer } from "@/app/_components/timer/timer";
import { TimerRef } from "@/app/_components/timer/timer.types";
import Link from "next/link";
import { useRef, useState } from "react";
import { SendAuthCode, useSendAuthCode } from "../_api/send-auth-code";
import {
  showNotification,
  useNotificationStore,
} from "../../../../stores/notification.store";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { VerifyUserModel } from "../_types/verify-user.type";

// Function to get a timestamp 2 minutes from now
const getTwoMinutesFromNow = () => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 120);
  return time;
};

const VerificationForm = () => {
  const [showResendCode, setShowResendCode] = useState<boolean>(false);
  const authCodeRef = useRef<AuthCodeRef>(null);
  const timerRef = useRef<TimerRef>(null);

  const {
    handleSubmit,
    setValue,
    register,
    formState: { isValid },
  } = useForm<VerifyUserModel>();

  const showNotification = useNotificationStore(
    (state) => state.showNotification
  );

  const params = useSearchParams();
  const username = params.get("mobile")!;

  const sendAuthCode = useSendAuthCode({
    onSuccess: () => {
      showNotification({
        type: "info",
        message: "The verification code has been sent to your phone number.",
      });
    },
  });

  const onSubmit = (data: VerifyUserModel) => {
    data.username = username;
    console.log(data);
  };

  register("code", {
    validate: (value: string) => (value ?? "").length === 5,
  });

  const resendAuthCode = () => {
    timerRef.current?.restart(getTwoMinutesFromNow());
    setShowResendCode(false);
    sendAuthCode.submit(username);
    authCodeRef.current?.clear();
  };

  return (
    <>
      <h5 className="text-2xl">Verification Code</h5>
      <p className="mt-2">The amazing world of programming awaits you!</p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 mt-10 flex-1"
      >
        <AuthCode
          className="mt-10"
          ref={authCodeRef}
          onChange={(value) => {
            setValue("code", value, { shouldValidate: true });
          }}
        />
        <Timer
          ref={timerRef}
          className="my-8"
          size="small"
          onExpire={() => setShowResendCode(true)}
          expiryTimestamp={getTwoMinutesFromNow()}
          showDays={false}
          showHours={false}
        />
        <Button
          isLink={true}
          isDisabled={!showResendCode}
          onClick={resendAuthCode}
        >
          Resend Verification Code
        </Button>
        <Button type="submit" variant="primary" isDisabled={!isValid}>
          Verify & Continue
        </Button>
        <div className="flex items-start gap-1 justify-center mt-auto">
          <span>To correct your mobile number,</span>
          <Link href="/signin">click here</Link>
          <span>.</span>
        </div>
      </form>
    </>
  );
};

export default VerificationForm;
