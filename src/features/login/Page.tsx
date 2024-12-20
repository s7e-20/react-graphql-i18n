import React, { useContext } from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { useTranslation } from "react-i18next";

import { Button } from "../../components/Button";
import { TextInput } from "../../components/fields/TextInput";
import { AuthContext } from "../../components/AuthProvider";
import { useLogin } from "./useLogin";

export const Login = () => {
  const { t } = useTranslation('common');
  const { updateToken } = useContext(AuthContext);
  const { register, handleSubmit, errors, onSubmit, loading } = useLogin(updateToken);

  return (
    <div className="min-h-screen flex justify-center pt-[50px]">
      <form
        className="w-80 flex flex-col gap-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3 className="text-center font-bold text-3xl">
          {t("login.welcome")}
        </h3>
        <TextInput
          autoFocus
          label={t("login.email")}
          {...register("email")}
          disabled={loading}
          error={errors.email?.message}
        />
        <TextInput
          label={t("login.password")}
          type="password"
          disabled={loading}
          {...register("password")}
          error={errors.password?.message}
        />
        <Button
          loading={loading}
          label={t("login.submit")}
          type="submit"
          rightIcon={<IoMdArrowRoundForward />}
        />
      </form>
    </div>
  );
};
