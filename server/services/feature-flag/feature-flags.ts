import { IFlag, isActive } from "./config-cat.client";

export const flags: IFlag[] = [
  {
    feature: "authentication",
    active: async () => await isActive("authentication"),
    urls: ["/auth", "/sessions", "/users"],
    message:
      "The authentication and user management insn't available right now! We are working on it.",
  },
  {
    feature: "feature",
    active: async () => await isActive("feature"),
    urls: ["/feature"],
    message: "The feature insn't available right now! We are working on it.",
  },
];
