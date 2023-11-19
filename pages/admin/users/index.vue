<script setup lang="ts">
import Swal from "sweetalert2";
import { api } from "~/services/api";
import { useLoading } from "~/store/loading";
import { UserRole } from "~/types/entities/auth/user";
import type { AdminUserListItem } from "~/types/entities/users/admin-user-list-item";
import { userRoleMap, userRoleArray } from "~/types/entities/users/roles";
import { userStatusArray, userStatusMap } from "~/types/entities/users/status";

const users = ref<AdminUserListItem[]>([]);

const { start, end } = useLoading();

const handleGetAnalytics = async () => {
  try {
    start("Loading users...");

    const res = await api.get("/v1/admin/users");

    users.value = res.data.result;
  } catch (error) {
    handleError(error);
  } finally {
    end();
  }
};

const hanleChangeRole = async (userId: string) => {
  const result = await Swal.fire({
    title: "Select a Role",
    input: "select",
    inputOptions: userRoleArray.reduce(
      (options, role) => ({ ...options, [role.id]: role.label }),
      {},
    ),
    inputPlaceholder: "Select the new Role",
    showCancelButton: true,
    confirmButtonText: "Save",
    cancelButtonText: "Cancel",
    inputValidator: (value) => {
      return new Promise((resolve) => {
        if (value === "") {
          resolve("Please select a role");
        } else {
          resolve();
        }
      });
    },
  });

  if (!result.value) {
    return;
  }

  try {
    start("Changing role...");

    await api.put(`/v1/admin/users/${userId}`, {
      role: result.value,
    });

    const userIndex = users.value.findIndex((user) => user.id === userId);

    users.value[userIndex].role = result.value;
  } catch (error) {
    handleError(error);
  } finally {
    end();
  }
};

const hanleChangeStatus = async (userId: string) => {
  const result = await Swal.fire({
    title: "Select a Status",
    input: "select",
    inputOptions: userStatusArray.reduce(
      (options, status) => ({ ...options, [status.id]: status.label }),
      {},
    ),
    inputPlaceholder: "Select the new Status",
    showCancelButton: true,
    confirmButtonText: "Save",
    cancelButtonText: "Cancel",
    inputValidator: (value) => {
      return new Promise((resolve) => {
        if (value === "") {
          resolve("Please select a status");
        } else {
          resolve();
        }
      });
    },
  });

  if (!result.value) {
    return;
  }

  try {
    start("Changing status...");

    await api.put(`/v1/admin/users/${userId}`, {
      status: result.value,
    });

    const userIndex = users.value.findIndex((user) => user.id === userId);

    users.value[userIndex].status = result.value;
  } catch (error) {
    handleError(error);
  } finally {
    end();
  }
};

const handleDeleteUser = async (userId: string) => {
  const result = await Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  });

  if (!result.isConfirmed) {
    return;
  }

  try {
    start("Deleting user...");

    await api.delete(`/v1/admin/users/${userId}`);

    const userIndex = users.value.findIndex((user) => user.id === userId);

    users.value.splice(userIndex, 1);
  } catch (error) {
    handleError(error);
  } finally {
    end();
  }
};

onMounted(async () => {
  await handleGetAnalytics();
});

definePageMeta({
  middleware: "admin-only",
});
</script>

<template>
  <div class="page-container">
    <h2 class="page-title">Users</h2>

    <div class="overflow-x-auto w-full">
      <table class="table table-compact w-full bg-base-200">
        <thead>
          <tr>
            <th>#ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <th>#{{ user.id.substring(0, 4) }}</th>
            <td class="whitespace-nowrap">{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ userRoleMap[user.role] }}</td>
            <td>{{ userStatusMap[user.status] }}</td>
            <td class="gap-4 flex flex-row">
              <button
                class="btn btn-xs btn-info whitespace-nowrap"
                @click="hanleChangeStatus(user.id)"
              >
                Change Status
              </button>
              <button
                class="btn btn-xs btn-warning whitespace-nowrap"
                @click="hanleChangeRole(user.id)"
              >
                Change Role
              </button>
              <role-guard :allowed-roles="[UserRole.admin]">
                <button
                  class="btn btn-xs btn-error whitespace-nowrap"
                  @click="handleDeleteUser(user.id)"
                >
                  Delete
                </button>
              </role-guard>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
