"use client";

import { Button } from "@/app/_components/button/button";
import { Textbox } from "@/app/_components/textbox";
import { SignIn } from "../types/signin.types";
import { useForm } from "react-hook-form";
import { TextInput } from "@/app/_components/form-input";

const SignInForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignIn>();

  // const onSubmit: SubmitHandler<SignIn> = (data) => {
  //   console.log(data);
  // };

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <h5 className="text-2xl">Sign In | Register</h5>
      <p className="mt-2">The amazing world of programming awaits you!</p>
      <form
        className="flex flex-col gap-6 mt-16"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* <Textbox
          {...register("mobile", { required: "Mobile number is required" })}
          placeholder="Mobile Number"
          dir="ltr"
        />
        {errors.mobile && (
          <span className="text-red-500">{errors.mobile.message}</span>
        )} */}
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

        <Button type="submit" variant="primary">
          Confirm and Receive Code
        </Button>
      </form>
    </>
  );
};

export default SignInForm;
