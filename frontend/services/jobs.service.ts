import { apiClient } from "@/lib/api/client";
import type { Job } from "@/types/models";

export type JobPayload = Pick<Job, "title" | "description" | "budget" | "category">;

export async function listJobs(params?: {
  q?: string;
  category?: string;
}): Promise<Job[]> {
  const { data } = await apiClient.get<Job[]>("/jobs", { params });
  return data;
}

export async function getJob(id: string): Promise<Job> {
  const { data } = await apiClient.get<Job>(`/jobs/${id}`);
  return data;
}

export async function createJob(payload: JobPayload): Promise<Job> {
  const { data } = await apiClient.post<Job>("/jobs", payload);
  return data;
}

export async function updateJob(
  id: string,
  payload: Partial<JobPayload>,
): Promise<Job> {
  const { data } = await apiClient.put<Job>(`/jobs/${id}`, payload);
  return data;
}

export async function deleteJob(id: string): Promise<void> {
  await apiClient.delete(`/jobs/${id}`);
}
