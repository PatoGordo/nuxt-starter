import Swal from "sweetalert2";
import {
  NavigationItem,
  NavigationItemVariant,
} from "~/types/components/navigation";
import { api } from "~/services/api";
import { useAuthStore } from "~/store/auth";
import { useLoading } from "~/store/loading";

export const navigation: NavigationItem[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Dashboard",
    path: "/dashboard",
    extra: {
      onlyLoggedIn: true,
    },
  },
  {
    title: "Settings",
    path: "/settings",
    extra: {
      onlyLoggedIn: true,
    },
  },
  {
    title: "Profile",
    path: "/profile",
    extra: {
      onlyLoggedIn: true,
    },
  },
  {
    title: "Login",
    path: "/auth/sign-in",
    variant: NavigationItemVariant["primary-button"],
    extra: {
      onlyUnLoggedIn: true,
    },
  },
  {
    title: "Register",
    path: "/auth/sign-up",
    variant: NavigationItemVariant["secondary-button"],
    extra: {
      onlyUnLoggedIn: true,
    },
  },
  {
    title: "Finish session",
    variant: NavigationItemVariant["secondary-button"],
    onClick: async () => {
      const authStore = useAuthStore();
      const { start, end } = useLoading();
      const router = useRouter();

      const answer = await Swal.fire({
        title: "Are you sure?",
        text: "Do you want to sign out?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, sign out!",
        cancelButtonText: "No, stay signed in",
      });

      if (!answer.isConfirmed) {
        return;
      }

      try {
        start("Finishing session...");

        await api.post("/v1/auth/sign-out");

        authStore.signOut();
        router.push("/auth/sign-in");
      } catch (error) {
      } finally {
        end();
      }
    },
    extra: {
      onlyLoggedIn: true,
      className: "btn-error",
    },
  },
];
