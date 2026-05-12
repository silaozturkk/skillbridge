import { apiClient } from "@/lib/api/client";
import type { User } from "@/types/models";

export type RegisterPayload = {
  username: string;
  email: string;
  password: string;
  role: User["role"];
};

export type LoginPayload = { email: string; password: string };

export async function registerUser(
  payload: RegisterPayload,
): Promise<{ token: string; user: User }> {
  const { data } = await apiClient.post<{ token: string; user: User }>(
    "/auth/register",
    payload,
  );
  return data;
}

export async function loginUser(
  payload: LoginPayload,
): Promise<{ token: string; user: User }> {
  const { data } = await apiClient.post<{ token: string; user: User }>(
    "/auth/login",
    payload,
  );
  return data;
}
