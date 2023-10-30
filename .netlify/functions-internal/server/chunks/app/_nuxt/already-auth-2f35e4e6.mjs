import { g as defineNuxtRouteMiddleware, a as useAuthStore, d as useRouter } from '../server.mjs';
import moment from 'moment';
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

const alreadyAuth = /* @__PURE__ */ defineNuxtRouteMiddleware(() => {
  const authStore = useAuthStore();
  const router = useRouter();
  if (authStore.token && moment(authStore.sessionExpiresAt).isAfter(moment())) {
    return router.push("/dashboard");
  }
});

export { alreadyAuth as default };
//# sourceMappingURL=already-auth-2f35e4e6.mjs.map
