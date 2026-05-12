/** Central route paths for SkillBridge (maps PRD/MVP flows to App Router URLs). */
export const ROUTES = {
  home: "/",
  login: "/auth/login",
  register: "/auth/register",
  dashboard: "/dashboard",
  jobs: "/jobs",
  job: (id: string) => `/jobs/${id}`,
  newJob: "/jobs/new",
  editJob: (id: string) => `/jobs/${id}/edit`,
  proposals: "/proposals",
  messages: "/messages",
  conversation: (userId: string) => `/messages/${userId}`,
  profile: "/profile",
  user: (id: string) => `/users/${id}`,
} as const;
