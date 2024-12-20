import { IoMdArrowRoundForward } from "react-icons/io";

import { Button } from "../../../components/Button";
import { TextInput } from "../../../components/fields/TextInput";
import { useLogin } from "../hooks/useLogin";

export const Login = () => {
  const { register, handleSubmit, errors, onSubmit, loading } = useLogin();

  return (
    <div className="min-h-screen flex justify-center pt-[50px]">
      <form
        className="w-80 flex flex-col gap-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3 className="text-center font-bold text-3xl">Welcome</h3>
        <TextInput
          autoFocus
          label="Email"
          {...register("email")}
          disabled={loading}
          error={errors.email?.message}
        />
        <TextInput
          label="Password"
          type="password"
          disabled={loading}
          {...register("password")}
          error={errors.password?.message}
        />
        <Button
          loading={loading}
          label="Login"
          type="submit"
          rightIcon={<IoMdArrowRoundForward />}
        />
      </form>
    </div>
  );
};
