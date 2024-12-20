import React, { useContext } from 'react';
import { BiLoader } from "react-icons/bi";
import { TextInput } from "../../../components/fields/TextInput";
import { Button } from "../../../components/Button";
import { AuthContext } from "../../../components/AuthProvider";
import { useGetUser } from "../hooks/useGetUser";

export const Account = () => {
  const { token, userId, updateToken } = useContext(AuthContext);
  const { user, loading } = useGetUser(token, userId);
  const logout = () => updateToken(null);

  return (
    <div className="min-h-screen pt-[50px] flex justify-center">
      {loading && <BiLoader className="animate-spin text-4xl" />}
      {!loading && (
        <div className="flex justify-between items-center gap-y-4 w-[90vw] h-fit">
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
