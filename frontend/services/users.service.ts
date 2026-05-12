import { apiClient } from "@/lib/api/client";
import type { User } from "@/types/models";

export async function getUserById(id: string): Promise<User> {
  const { data } = await apiClient.get<User>(`/users/${id}`);
  return data;
}

export async function updateUser(
  id: string,
  partial: Partial<
    Pick<User, "bio" | "skills" | "profileImage" | "username" | "portfolioLinks">
  >,
): Promise<User> {
  const { data } = await apiClient.put<User>(`/users/${id}`, partial);
  return data;
}
