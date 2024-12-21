import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as yup from "yup";
import { LOGIN_MUTATION } from "../../gql/mutations/auth";
import i18n from '../../i18n';

const schema = yup.object().shape({
  email: yup.string().email(i18n.t('common:login.email-invalid')).required(i18n.t('common:login.email-required')),
  password: yup.string().required(i18n.t('common:login.password-required')),
});

export const useLogin = (updateToken: (token: string) => void) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [login, { loading, error }] = useMutation(LOGIN_MUTATION);

  const onSubmit = async (data: { email: string; password: string }) => {
    try {
      const response = await login({
        variables: { identifier: data.email, password: data.password },
      });

      const token = response?.data?.login?.jwt;

      if (token) {
        updateToken(token);
      }
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    if (error) {
      toast.error(error.message, { position: "top-right" });
    }
  }, [error]);

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    loading,
  };
};
