import { apiClient } from "@/lib/api/client";
import type { Message } from "@/types/models";

export type MessagePayload = Pick<Message, "receiver" | "content">;

export async function sendMessage(payload: MessagePayload): Promise<Message> {
  const { data } = await apiClient.post<Message>("/messages", payload);
  return data;
}

export async function listMessagesWithUser(
  userId: string,
): Promise<Message[]> {
  const { data } = await apiClient.get<Message[]>(`/messages/${userId}`);
  return data;
}
