"use client";

import { Button } from "@/app/_components/button/button";
import { SignIn } from "../types/signin.types";
import { useForm } from "react-hook-form";
import { TextInput } from "@/app/_components/form-input";
import { useSignIn } from "../_api/signin";
import { useRouter } from "next/navigation";
import {
  showNotification,
  useNotificationStore,
} from "@/stores/notification.store";

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<SignIn>();

  const router = useRouter();

  const showNotification = useNotificationStore(
    (state) => state.showNotification
  );

  const signIn = useSignIn({
    onSuccess: () => {
      router.push(`/verify?mobile=${getValues("mobile")}`);
      showNotification({
        message: "A verification code has been sent to your number",
        type: "info",
      });
    },
  });

  const onSubmit = (data: SignIn) => {
    console.log("DATA", data);
    signIn.submit(data);
    // signIn.mutate(data); // Use mutate if using react-query
  };

  // const showNotification = useNotificationStore(
  //   (state) => state.showNotification
  // );

  // useEffect(() => {
  //   showNotification({
  //     type: "success",
  //     message: "Operation completed successfully",
  //   });
  // }, []);

  return (
    <>
      <h5 className="text-2xl">Sign In | Register</h5>
      <p className="mt-2">The amazing world of programming awaits you!</p>
      <form
        className="flex flex-col gap-6 mt-16"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextInput<SignIn>
          register={register}
          name={"mobile"}
          rules={{
            required: "Mobile number is required",
            maxLength: {
              value: 11,
              message: "Mobile number must be 11 digits",
            },
            minLength: {
              value: 11,
              message: "Mobile number must be 11 digits",
            },
          }}
          errors={errors}
        />

        <Button type="submit" variant="primary" isLoading={signIn.isPending}>
          Confirm and Receive Code
        </Button>
      </form>
    </>
  );
};

export default SignInForm;
