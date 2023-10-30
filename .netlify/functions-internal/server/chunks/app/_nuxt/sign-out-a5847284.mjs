import { _ as __nuxt_component_0 } from './AuthPage-6e9dbd0d.mjs';
import { defineComponent, withCtx, createVNode, useSSRContext } from 'vue';
import { a as useAuthStore, b as useLoading, d as useRouter } from '../server.mjs';
import { ssrRenderComponent } from 'vue/server-renderer';
import './loading-2ede5e0e.mjs';
import './_plugin-vue_export-helper-cc2b3d55.mjs';
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
import 'moment';
import 'sweetalert2';
import 'ms';
import 'axios';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "sign-out",
  __ssrInlineRender: true,
  setup(__props) {
    useAuthStore();
    useLoading();
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_navigation_auth_page = __nuxt_component_0;
      _push(ssrRenderComponent(_component_navigation_auth_page, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><h2${_scopeId}>Sign Out</h2></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("h2", null, "Sign Out")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/sign-out.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=sign-out-a5847284.mjs.map
