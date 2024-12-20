import React from "react";
import { BiLoader } from "react-icons/bi";

import { TextInput } from "../../../components/fields/TextInput";
import { Button } from "../../../components/Button";

export const Account = () => {
  const loading = false;

  return (
    <div className="bg-base-100 min-h-screen flex justify-center items-center">
      {loading && <BiLoader className="animate-spin text-4xl" />}
      {!loading && (
        <div className="flex flex-col gap-y-4">
          <div className="flex gap-x-4">
            <TextInput label="First Name" disabled />
            <TextInput label="Last Name" disabled />
          </div>
          <div className="flex justify-end">
            <Button label="Logout" />
          </div>
        </div>
      )}
    </div>
  );
};
