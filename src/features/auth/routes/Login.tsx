import { IoMdArrowRoundForward } from "react-icons/io";
import { Button } from "../../../components/Button";
import { TextInput } from "../../../components/fields/TextInput";

export const Login = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-80 flex flex-col gap-y-4">
        <h3 className="text-center font-bold text-3xl">Welcome</h3>
        <TextInput label="Email" autoFocus />
        <TextInput label="Password" />
        <Button
          label="Login"
          onClick={() => {}}
          rightIcon={<IoMdArrowRoundForward />}
        />
      </div>
    </div>
  );
};
