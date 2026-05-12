import { apiClient } from "@/lib/api/client";
import type { Proposal } from "@/types/models";

export type ProposalPayload = Pick<
  Proposal,
  "jobId" | "coverLetter" | "proposedPrice"
>;

export async function submitProposal(
  payload: ProposalPayload,
): Promise<Proposal> {
  const { data } = await apiClient.post<Proposal>("/proposals", payload);
  return data;
}

export async function listProposalsForJob(jobId: string): Promise<Proposal[]> {
  const { data } = await apiClient.get<Proposal[]>(
    `/proposals/job/${jobId}`,
  );
  return data;
}
