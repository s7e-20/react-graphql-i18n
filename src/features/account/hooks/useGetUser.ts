import { useQuery } from "@apollo/client";
import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { GET_USER_QUERY } from "../../../queries/user";

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

export const useGetUser = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  let userId: string | undefined = undefined;

  React.useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [navigate, token]);

  if (!!token) {
    try {
      const decodedToken: { id: string } = jwtDecode(token);
      userId = decodedToken.id;
    } catch (error) {
      console.error("Failed to decode token", error);
    }
  }

  const { data, loading, error } = useQuery(GET_USER_QUERY, {
    variables: { id: userId },
    skip: !token || !userId,
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });

  React.useEffect(() => {
    if (error) {
      toast.error("Failed to fetch user data", { position: "bottom-right" });
    }
  }, [error]);

  if (loading) return { user: null, loading, error: null };

  return { user: data?.user as User, loading, error };
};
