/** MVP domain shapes (see `mvp.md` database models). */

export type UserRole = "client" | "freelancer";

export type User = {
  id: string;
  username: string;
  email: string;
  role: UserRole;
  bio?: string;
  skills?: string[];
  /** PRD: portfolio links (optional in MVP UI). */
  portfolioLinks?: string[];
  profileImage?: string;
};

export type Job = {
  id: string;
  title: string;
  description: string;
  budget: number;
  category: string;
  createdBy: string;
};

export type Proposal = {
  id: string;
  jobId: string;
  freelancerId: string;
  coverLetter: string;
  proposedPrice: number;
};

export type Message = {
  id: string;
  sender: string;
  receiver: string;
  content: string;
  createdAt?: string;
};

export type Review = {
  id: string;
  reviewer: string;
  targetUser: string;
  rating: number;
  comment: string;
};
