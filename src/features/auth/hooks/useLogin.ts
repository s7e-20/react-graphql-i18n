import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@apollo/client";
import { LOGIN_MUTATION } from "../../../queries/auth";
import { useNavigate } from "react-router-dom";
import React from "react";
import toast from "react-hot-toast";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

export const useLogin = () => {
  const navigate = useNavigate();

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
        localStorage.setItem("token", response.data.login.jwt);
        navigate("/account");
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
