<script setup lang="ts">
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
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr class="">
            <th>1</th>
            <td class="whitespace-nowrap">Pato Gordo</td>
            <td>conversecomicaro@gmail.com</td>
            <td>Admin</td>
            <td>Active</td>
            <td>
              <button class="btn btn-xs btn-info whitespace-nowrap">
                Change Status
              </button>
            </td>
            <td>
              <button class="btn btn-xs btn-warning whitespace-nowrap">
                Change Role
              </button>
            </td>
            <td>
              <button class="btn btn-xs btn-error whitespace-nowrap">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
