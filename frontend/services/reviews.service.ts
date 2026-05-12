import { apiClient } from "@/lib/api/client";
import type { Review } from "@/types/models";

export type ReviewPayload = Pick<Review, "targetUser" | "rating" | "comment">;

export async function createReview(payload: ReviewPayload): Promise<Review> {
  const { data } = await apiClient.post<Review>("/reviews", payload);
  return data;
}

export async function listReviewsForUser(userId: string): Promise<Review[]> {
  const { data } = await apiClient.get<Review[]>(`/reviews/${userId}`);
  return data;
}
