import { createData } from "@/core/http-service/http-service";
import { SignIn } from "../types/signin.types";
import { useMutation } from "@tanstack/react-query";
import { showNotification } from "@/stores/notification.store";

const signIn = (model: SignIn): Promise<void> =>
  createData<SignIn, void>("/signin", model);

type UseSignInOptions = {
  onSuccess?: () => void;
};

export const useSignIn = ({ onSuccess }: UseSignInOptions) => {
  const { mutate: submit, isPending } = useMutation({
    mutationFn: signIn,
    onSuccess: (data) => {
      // Called only on 2xx responses
      onSuccess?.(data);
    },
    onError: (error) => {
      // Handle 429 or other errors
      const errorMessage =
        error.response?.data?.message || "Something went wrong";
      const timeLeft = error.response?.data?.timeLeft || "";
      showNotification({
        message: `${errorMessage}${timeLeft ? ` (${timeLeft})` : ""}`,
        type: "error",
      });
    },
    // onSuccess: onSuccess,
  });

  return {
    submit,
    isPending,
  };
};
