import { g as defineNuxtRouteMiddleware, a as useAuthStore, d as useRouter } from '../server.mjs';
import moment from 'moment';
import { U as UserRole } from './user-e7870366.mjs';
import 'vue';
import '../../nitro/netlify.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'fs';
import 'path';
import '@prisma/client';
import 'jsonwebtoken';
import 'zod';
import 'configcat-node';
import 'memory-cache';
import 'perf_hooks';
import 'xss';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'pinia-plugin-persistedstate';
import 'vue/server-renderer';
import 'sweetalert2';
import 'ms';
import 'axios';

const adminOnly = /* @__PURE__ */ defineNuxtRouteMiddleware(() => {
  var _a;
  const authStore = useAuthStore();
  const router = useRouter();
  if (!authStore.token || moment(authStore.sessionExpiresAt).isBefore(moment.now())) {
    if (moment().isBefore(authStore.refreshTokenExpiresAt)) {
      authStore.handleRefreshToken();
      return;
    }
    authStore.signOut();
    return router.push("/auth/sign-in");
  }
  if (((_a = authStore == null ? void 0 : authStore.user) == null ? void 0 : _a.role) !== UserRole.admin) {
    return router.push("/403");
  }
});

export { adminOnly as default };
//# sourceMappingURL=admin-only-8a0bf6b0.mjs.map
