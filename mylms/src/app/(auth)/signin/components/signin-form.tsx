"use client";

import { Button } from "@/app/_components/button/button";
import { SignIn } from "../types/signin.types";
import { useForm } from "react-hook-form";
import { TextInput } from "@/app/_components/form-input";
import { useSignIn } from "../_api/signin";
import { useRouter } from "next/navigation";

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<SignIn>();

  const router = useRouter();

  const signIn = useSignIn({
    onSuccess: () => {
      router.push(`/verify?mobile=${getValues("mobile")}`);
    },
  });

  const onSubmit = (data: SignIn) => {
    signIn.submit(data);
  };

  return (
    <>
      <h5 className="text-2xl">Sign In | Sign Up</h5>
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

{
  /* <Textbox
          {...register("mobile", { required: "Mobile number is required" })}
          placeholder="Mobile Number"
          dir="ltr"
        />
        {errors.mobile && (
          <span className="text-red-500">{errors.mobile.message}</span>
        )} */
}
