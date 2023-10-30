import { _ as _sfc_main$1 } from './role-guard-b84a6c1a.mjs';
import __nuxt_component_1 from './Icon-9f429d40.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-43977de6.mjs';
import { b as useLoading } from '../server.mjs';
import { defineComponent, mergeProps, unref, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { U as UserRole } from './user-e7870366.mjs';
import './config-49a4a9d9.mjs';
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
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './_plugin-vue_export-helper-cc2b3d55.mjs';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'pinia-plugin-persistedstate';
import 'moment';
import 'sweetalert2';
import 'ms';
import 'axios';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useLoading();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_role_guard = _sfc_main$1;
      const _component_icon = __nuxt_component_1;
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-container" }, _attrs))}><h2 class="page-title">Admin Dashboard</h2><section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">`);
      _push(ssrRenderComponent(_component_role_guard, {
        "allowed-roles": [unref(UserRole).admin]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="card bg-base-200 rounded-box flex flex-col items-start justify-center gap-3 p-5"${_scopeId}><div class="flex flex-row items-center w-full justify-between"${_scopeId}><div class="flex flex-row items-center justify-start gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_icon, {
              name: "tabler:user",
              size: "28"
            }, null, _parent2, _scopeId));
            _push2(`<h3 class="text-lg font-semibold"${_scopeId}>Users</h3></div><div${_scopeId}><details class="dropdown dropdown-bottom"${_scopeId}><summary class="text-sm font-medium opacity-70 h-fit gap-1 normal-case flex flex-row items-center justify-center cursor-pointer"${_scopeId}> Monthly `);
            _push2(ssrRenderComponent(_component_icon, {
              name: "tabler:settings",
              size: "18"
            }, null, _parent2, _scopeId));
            _push2(`</summary><ul class="p-2 shadow menu dropdown-content z-[1] bg-base-300 rounded-box mt-2"${_scopeId}><li${_scopeId}><a class="btn btn-sm"${_scopeId}>Monthly</a></li></ul></details></div></div><div class="flex flex-row items-center justify-between gap-4 w-full"${_scopeId}><h2 class="text-3xl font-bold"${_scopeId}>0</h2><h3 class="text-lg text-success"${_scopeId}>+ 84%</h3></div><div class="grid grid-cols-2 gap-4 w-full"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_nuxt_link, {
              to: "/admin/users",
              class: "btn btn-sm btn-info w-full"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Manage `);
                  _push3(ssrRenderComponent(_component_icon, {
                    name: "tabler:user-cog",
                    size: "18"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createTextVNode(" Manage "),
                    createVNode(_component_icon, {
                      name: "tabler:user-cog",
                      size: "18"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "card bg-base-200 rounded-box flex flex-col items-start justify-center gap-3 p-5" }, [
                createVNode("div", { class: "flex flex-row items-center w-full justify-between" }, [
                  createVNode("div", { class: "flex flex-row items-center justify-start gap-2" }, [
                    createVNode(_component_icon, {
                      name: "tabler:user",
                      size: "28"
                    }),
                    createVNode("h3", { class: "text-lg font-semibold" }, "Users")
                  ]),
                  createVNode("div", null, [
                    createVNode("details", { class: "dropdown dropdown-bottom" }, [
                      createVNode("summary", { class: "text-sm font-medium opacity-70 h-fit gap-1 normal-case flex flex-row items-center justify-center cursor-pointer" }, [
                        createTextVNode(" Monthly "),
                        createVNode(_component_icon, {
                          name: "tabler:settings",
                          size: "18"
                        })
                      ]),
                      createVNode("ul", { class: "p-2 shadow menu dropdown-content z-[1] bg-base-300 rounded-box mt-2" }, [
                        createVNode("li", null, [
                          createVNode("a", { class: "btn btn-sm" }, "Monthly")
                        ])
                      ])
                    ])
                  ])
                ]),
                createVNode("div", { class: "flex flex-row items-center justify-between gap-4 w-full" }, [
                  createVNode("h2", { class: "text-3xl font-bold" }, "0"),
                  createVNode("h3", { class: "text-lg text-success" }, "+ 84%")
                ]),
                createVNode("div", { class: "grid grid-cols-2 gap-4 w-full" }, [
                  createVNode(_component_nuxt_link, {
                    to: "/admin/users",
                    class: "btn btn-sm btn-info w-full"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Manage "),
                      createVNode(_component_icon, {
                        name: "tabler:user-cog",
                        size: "18"
                      })
                    ]),
                    _: 1
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="card bg-base-200 rounded-box flex flex-col items-start justify-between gap-3 p-5"><div class="flex flex-row items-center w-full justify-between"><div class="flex flex-row items-center justify-start gap-2">`);
      _push(ssrRenderComponent(_component_icon, {
        name: "tabler:star",
        size: "28"
      }, null, _parent));
      _push(`<h3 class="text-lg font-semibold">Unable Feature</h3></div></div><div class="w-full"><button class="btn btn-sm btn-primary w-full"> Call the unable feature `);
      _push(ssrRenderComponent(_component_icon, {
        name: "tabler:arrow-right",
        size: "18"
      }, null, _parent));
      _push(`</button></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-3a8a0e19.mjs.map
