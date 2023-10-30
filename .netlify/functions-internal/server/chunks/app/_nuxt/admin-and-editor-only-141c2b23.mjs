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

const adminAndEditorOnly = /* @__PURE__ */ defineNuxtRouteMiddleware(() => {
  var _a, _b, _c;
  const authStore = useAuthStore();
  const router = useRouter();
  if (!authStore.token || moment(authStore.sessionExpiresAt).isBefore(moment.now()) || !((_a = authStore == null ? void 0 : authStore.user) == null ? void 0 : _a.role)) {
    if (moment().isBefore(authStore.refreshTokenExpiresAt)) {
      authStore.handleRefreshToken();
      return;
    }
    authStore.signOut();
    return router.push("/auth/sign-in");
  }
  if (((_b = authStore == null ? void 0 : authStore.user) == null ? void 0 : _b.role) !== UserRole.editor && ((_c = authStore == null ? void 0 : authStore.user) == null ? void 0 : _c.role) !== UserRole.admin) {
    return router.push("/403");
  }
});

export { adminAndEditorOnly as default };
//# sourceMappingURL=admin-and-editor-only-141c2b23.mjs.map
