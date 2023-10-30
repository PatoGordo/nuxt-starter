import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-43977de6.mjs';
import __nuxt_component_1 from './Icon-9f429d40.mjs';
import { _ as _sfc_main$3 } from './role-guard-b84a6c1a.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, createVNode, ref, unref, createTextVNode, renderSlot } from 'vue';
import { a as useAuthStore, b as useLoading, d as useRouter, f as useRoute } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _imports_0$1 } from './logo-green-white-132b0c42.mjs';
import { U as UserRole } from './user-e7870366.mjs';
import { _ as __nuxt_component_0$1 } from './loading-2ede5e0e.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import 'vue-bundle-renderer/runtime';
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
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import './config-49a4a9d9.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import 'vue-router';
import 'pinia-plugin-persistedstate';
import 'moment';
import 'sweetalert2';
import 'ms';
import 'axios';

const _imports_0 = "" + publicAssetsURL("images/user-profile-picture.webp");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Navbar",
  __ssrInlineRender: true,
  props: {
    toggleDrawerOpen: { type: Function }
  },
  setup(__props) {
    useAuthStore();
    useLoading();
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_icon = __nuxt_component_1;
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-row items-center justify-between h-[65px] w-full bg-base-300 p-4 gap-4" }, _attrs))}><div class="lg:hidden"><button class="btn btn-circle">`);
      _push(ssrRenderComponent(_component_icon, {
        name: "tabler:menu-2",
        size: "24"
      }, null, _parent));
      _push(`</button></div><div class="flex flex-row items-center gap-4 max-lg:hidden"><label for="navbar-search-input" class="cursor-pointer btn bg-base-100 btn-circle">`);
      _push(ssrRenderComponent(_component_icon, {
        name: "tabler:search",
        size: "24"
      }, null, _parent));
      _push(`</label><input id="navbar-search-input" type="text" class="input input-md w-[360px]" placeholder="Seach..."></div><div class="flex flex-row items-center justify-end gap-4"><button class="btn btn-circle">`);
      _push(ssrRenderComponent(_component_icon, {
        name: "tabler:moon",
        size: "20"
      }, null, _parent));
      _push(`</button><button class="btn btn-circle">`);
      _push(ssrRenderComponent(_component_icon, {
        name: "tabler:bell",
        size: "20"
      }, null, _parent));
      _push(`</button><div class="dropdown dropdown-left dropdown-bottom"><label tabindex="0" class="flex items-center justify-center">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/profile",
        class: "btn btn-circle btn-neutral"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} class="rounded-full"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                class: "rounded-full"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</label></div><button class="btn btn-error btn-circle">`);
      _push(ssrRenderComponent(_component_icon, {
        name: "tabler:login-2",
        size: "24"
      }, null, _parent));
      _push(`</button></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navigation/Navbar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Drawer",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const isDrawerOpen = ref(false);
    const toggleDrawerOpen = () => {
      isDrawerOpen.value = !isDrawerOpen.value;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      const _component_icon = __nuxt_component_1;
      const _component_role_guard = _sfc_main$3;
      const _component_navigation_navbar = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex flex-row items-start justify-start" }, _attrs))}><div class="${ssrRenderClass([unref(isDrawerOpen) ? "!block" : "", "bg-[#00000077] w-screen h-screen fixed top-0 left-0 z-10 hidden max-lg:hidden transition-all duration-300"])}"></div><div class="${ssrRenderClass([
        unref(isDrawerOpen) ? "max-lg:fixed max-lg:top-0 max-lg:translate-x-0 max-lg:!w-4/5 z-50" : "max-lg:fixed max-lg:top-0 max-lg:translate-x-[-1500px] max-lg:!w-0 z-50",
        "flex flex-col items-center justify-start w-96 h-screen bg-base-300 p-4 transition-all duration-200"
      ])}"><div class="flex flex-row w-full items-center justify-between mb-8">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/dashboard",
        onClick: ($event) => isDrawerOpen.value = false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0$1)} alt="Your app logo&#39;s" class="w-24"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0$1,
                alt: "Your app logo's",
                class: "w-24"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="btn btn-circle lg:hidden">`);
      if (unref(isDrawerOpen)) {
        _push(ssrRenderComponent(_component_icon, {
          name: "tabler:chevron-left",
          size: "24"
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_icon, {
          name: "tabler:chevron-right",
          size: "24"
        }, null, _parent));
      }
      _push(`</button></div><div class="w-full flex flex-col items-center justify-center gap-4">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/dashboard",
        class: [
          "btn btn-ghost justify-start flex-nowrap gap-4 w-full",
          ["/dashboard", "/403", "/503"].includes(unref(route).path) ? "!btn-accent" : ""
        ],
        onClick: ($event) => isDrawerOpen.value = false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_icon, {
              name: "tabler:layout-dashboard",
              size: "24"
            }, null, _parent2, _scopeId));
            _push2(` Dashboard `);
          } else {
            return [
              createVNode(_component_icon, {
                name: "tabler:layout-dashboard",
                size: "24"
              }),
              createTextVNode(" Dashboard ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_role_guard, {
        "allowed-roles": [unref(UserRole).admin, unref(UserRole).editor]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_nuxt_link, {
              to: "/admin",
              class: [
                "btn btn-ghost justify-start flex-nowrap gap-4 w-full",
                ["/admin", "/admin/users"].includes(unref(route).path) ? "!btn-accent" : ""
              ],
              onClick: ($event) => isDrawerOpen.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_icon, {
                    name: "tabler:user-shield",
                    size: "24"
                  }, null, _parent3, _scopeId2));
                  _push3(` Administrative `);
                } else {
                  return [
                    createVNode(_component_icon, {
                      name: "tabler:user-shield",
                      size: "24"
                    }),
                    createTextVNode(" Administrative ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_nuxt_link, {
                to: "/admin",
                class: [
                  "btn btn-ghost justify-start flex-nowrap gap-4 w-full",
                  ["/admin", "/admin/users"].includes(unref(route).path) ? "!btn-accent" : ""
                ],
                onClick: ($event) => isDrawerOpen.value = false
              }, {
                default: withCtx(() => [
                  createVNode(_component_icon, {
                    name: "tabler:user-shield",
                    size: "24"
                  }),
                  createTextVNode(" Administrative ")
                ]),
                _: 1
              }, 8, ["class", "onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/settings",
        class: ["btn btn-ghost justify-start flex-nowrap gap-4 w-full", ["/settings"].includes(unref(route).path) ? "!btn-accent" : ""],
        onClick: ($event) => isDrawerOpen.value = false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_icon, {
              name: "tabler:settings",
              size: "24"
            }, null, _parent2, _scopeId));
            _push2(` Settings `);
          } else {
            return [
              createVNode(_component_icon, {
                name: "tabler:settings",
                size: "24"
              }),
              createTextVNode(" Settings ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/profile",
        class: ["btn btn-ghost justify-start flex-nowrap gap-4 w-full", ["/profile"].includes(unref(route).path) ? "!btn-accent" : ""],
        onClick: ($event) => isDrawerOpen.value = false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_icon, {
              name: "tabler:user",
              size: "24"
            }, null, _parent2, _scopeId));
            _push2(` Profile `);
          } else {
            return [
              createVNode(_component_icon, {
                name: "tabler:user",
                size: "24"
              }),
              createTextVNode(" Profile ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="w-full overflow-hidden">`);
      _push(ssrRenderComponent(_component_navigation_navbar, { "toggle-drawer-open": toggleDrawerOpen }, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navigation/Drawer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_navigation_drawer = _sfc_main$1;
  const _component_loading = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-full" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_navigation_drawer, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "default")
        ];
      }
    }),
    _: 3
  }, _parent));
  _push(ssrRenderComponent(_component_loading, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-cc9d041a.mjs.map
