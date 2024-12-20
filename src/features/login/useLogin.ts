import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as yup from "yup";
import { LOGIN_MUTATION } from "../../gql/mutations/auth";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
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
      toast.error(error.message, { position: "bottom-right" });
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
