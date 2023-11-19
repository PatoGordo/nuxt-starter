export interface AnalyticsResponse {
  total: number;
  role: Role;
  monthly: Monthly;
}

export interface Role {
  user: number;
  editor: number;
  admin: number;
}

export interface Monthly {
  start_of_month: number;
  end_of_month: number;
  growth: number;
}
