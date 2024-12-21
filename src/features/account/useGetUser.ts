import { useQuery } from "@apollo/client";
import React from "react";
import toast from "react-hot-toast";
import { GET_USER_QUERY } from "../../gql/queries/user";

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

export const useGetUser = (token: string | null, userId: string | null) => {
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
      toast.error("Failed to fetch user data", { position: "top-right" });
    }
  }, [error]);

  if (loading) return { user: null, loading, error: null };

  return { user: data?.user as User, loading, error };
};
