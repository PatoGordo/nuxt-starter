export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  status: UserStatus;
  role: UserRole;
  created_at: string | Date;
  updated_at: string | Date;
  deleted: boolean;
}

export enum UserRole {
  admin = "admin",
  editor = "editor",
  user = "user",
}

export enum UserStatus {
  approved = "approved",
  restricted = "restricted",
}
