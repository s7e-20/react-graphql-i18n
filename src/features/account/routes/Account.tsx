import { BiLoader } from "react-icons/bi";
import { useLogout } from "../../../hooks/useLogout";
import { TextInput } from "../../../components/fields/TextInput";
import { Button } from "../../../components/Button";
import { useGetUser } from "../hooks/useGetUser";

export const Account = () => {
  const { user, loading } = useGetUser();
  const { logout } = useLogout();

  return (
    <div className="bg-base-100 min-h-screen flex justify-center items-center">
      {loading && <BiLoader className="animate-spin text-4xl" />}
      {!loading && (
        <div className="flex flex-col gap-y-4">
          <div className="flex gap-x-4">
            <TextInput label="First Name" disabled value={user?.firstName} />
            <TextInput label="Last Name" disabled value={user?.lastName} />
          </div>
          <div className="flex justify-end">
            <Button label="Logout" onClick={logout} />
          </div>
        </div>
      )}
    </div>
  );
};
