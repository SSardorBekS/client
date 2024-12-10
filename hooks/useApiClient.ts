import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export function useApiClient() {
  const { data: session } = useSession();

  const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
  });
  console.log(session)
  useEffect(() => {
    if (session?.accessToken) {
      apiClient.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${session.accessToken}`;
    }
  }, [session]);

  return apiClient;
}
