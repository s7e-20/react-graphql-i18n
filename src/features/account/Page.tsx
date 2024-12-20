import React, { useContext } from "react";
import { BiLoader } from "react-icons/bi";
import { TextInput } from "../../components/TextInput";
import { Button } from "../../components/Button";
import { AuthContext } from "../../components/AuthProvider";
import { useGetUser } from "./useGetUser";
import { useTranslation } from "react-i18next";

export const Account = () => {
  const { token, userId, updateToken } = useContext(AuthContext);
  const { user, loading } = useGetUser(token, userId);
  const logout = () => updateToken(null);
  const { t } = useTranslation('common');

  return (
    <div className="min-h-screen pt-[50px] flex justify-center">
      {loading && <BiLoader className="animate-spin text-4xl" />}
      {!loading && (
        <div className="flex justify-between items-center gap-y-4 w-[90vw] h-fit">
          <div className="flex gap-x-4">
            <TextInput label={t("account.firstName")} disabled value={user?.firstName} />
            <TextInput label={t("account.lastName")} disabled value={user?.lastName} />
          </div>
          <div className="flex justify-end">
            <Button label={t("account.logout")} onClick={logout} />
          </div>
        </div>
      )}
    </div>
  );
};
