import { _ as __nuxt_component_0 } from './nuxt-link-43977de6.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _imports_0 } from './logo-green-white-132b0c42.mjs';
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
import '../server.mjs';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'pinia-plugin-persistedstate';
import 'moment';
import 'sweetalert2';
import 'ms';
import 'axios';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "hero min-h-screen bg-base-200" }, _attrs))}><div class="hero-content flex-col lg:flex-row-reverse grid grid-cols-1 sm:grid-cols-2 gap-12"><div class="flex sm:hidden flex-col items-start justify-center"><img${ssrRenderAttr("src", _imports_0)} alt="Your App Logo" class="w-1/2 rounded-lg"></div><div class="flex flex-col items-start justify-center"><h1 class="text-5xl font-bold">Nuxt Starter</h1><p class="py-6"> A FullStack Website Template using Nuxt 3 framework, Prisma ORM, TypeScript and many other technologies. With UI library, Authentication and other flows already done. </p>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/auth/sign-in",
        class: "btn btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Sign In to Demo`);
          } else {
            return [
              createTextVNode(" Sign In to Demo")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="hidden sm:flex flex-col items-center justify-center"><img${ssrRenderAttr("src", _imports_0)} alt="Your App Logo" class="w-3/4 rounded-lg"></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-83324736.mjs.map
