import { UserRole } from "../entities/auth/user";

export interface NavigationItem {
  title: string;
  path?: string;
  onClick?: () => void;
  variant?: NavigationItemVariant;
  extra?: NavigationItemExtra;
}

export interface NavigationItemExtra {
  onlyLoggedIn?: boolean;
  onlyUnLoggedIn?: boolean;
  onlyUserWithRole?: UserRole[];
  className?: string;
}

export enum NavigationItemVariant {
  link = "link",
  "primary-button" = "primary-button",
  "secondary-button" = "secondary-button",
}
