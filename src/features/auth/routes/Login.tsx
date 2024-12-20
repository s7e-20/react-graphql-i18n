import { IoMdArrowRoundForward } from "react-icons/io";
import { Button } from "../../../components/Button";
import { TextInput } from "../../../components/fields/TextInput";
import { useLogin } from "../hooks/useLogin";

export const Login = () => {
  const { register, handleSubmit, errors, onSubmit } = useLogin();

  return (
    <div className="min-h-screen flex justify-center items-center">
      <form
        className="w-80 flex flex-col gap-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3 className="text-center font-bold text-3xl">Welcome</h3>
        <TextInput
          autoFocus
          label="Email"
          {...register("email")}
          error={errors.email?.message}
        />
        <TextInput
          label="Password"
          type="password"
          {...register("password")}
          error={errors.password?.message}
        />
        <Button
          label="Login"
          type="submit"
          rightIcon={<IoMdArrowRoundForward />}
        />
      </form>
    </div>
  );
};
