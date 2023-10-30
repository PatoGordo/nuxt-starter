import { _ as __nuxt_component_0 } from './AuthPage-6e9dbd0d.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-43977de6.mjs';
import { defineComponent, ref, withCtx, unref, createTextVNode, createVNode, toDisplayString, withModifiers, withDirectives, isRef, vModelText, useSSRContext } from 'vue';
import { a as useAuthStore, b as useLoading, d as useRouter, e as api } from '../server.mjs';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { a as appConfig } from './app-c8b360d5.mjs';
import { h as handleError } from './handle-error-fc214ea3.mjs';
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
  __name: "sign-in",
  __ssrInlineRender: true,
  setup(__props) {
    const email = ref("");
    const password = ref("");
    const passwordRef = ref(null);
    const authStore = useAuthStore();
    const { start, end } = useLoading();
    const router = useRouter();
    const handleSubmit = async () => {
      try {
        start("Starting session...");
        const res = await api.post("/v1/auth/sign-in", {
          email: email.value,
          password: password.value
        });
        const result = res.data.result;
        authStore.signIn({
          token: result.token,
          refresh_token: result.refresh_token,
          user: result.user
        });
        if (result.user.role === "admin" || result.user.role === "editor") {
          return router.push("/admin");
        }
        router.push("/dashboard");
      } catch (error) {
        handleError(error, () => {
          var _a;
          password.value = "";
          (_a = passwordRef.value) == null ? void 0 : _a.focus();
        });
      } finally {
        end();
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_navigation_auth_page = __nuxt_component_0;
      const _component_nuxt_link = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_navigation_auth_page, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="page-content-auth flex flex-col items-center justify-center h-full"${_scopeId}><h2 class="page-title pb-0"${_scopeId}>Login to ${ssrInterpolate(unref(appConfig).appName)}</h2><form class="mt-2 w-full flex flex-col items-start justify-start gap-4"${_scopeId}><div class="form-control w-full"${_scopeId}><label class="label"${_scopeId}><span class="label-text"${_scopeId}>What is your email?</span></label><input${ssrRenderAttr("value", unref(email))} type="email"${ssrRenderAttr("placeholder", "Your email...")} class="input input-bordered w-full" required${_scopeId}></div><div class="form-control w-full"${_scopeId}><label class="label"${_scopeId}><span class="label-text"${_scopeId}>What is your password?</span></label><input${ssrRenderAttr("value", unref(password))} type="password"${ssrRenderAttr("placeholder", "Your password...")} class="input input-bordered w-full" required${_scopeId}></div><div class="flex flex-row flex-wrap items-center justify-between w-full gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_nuxt_link, {
              to: "/auth/sign-up",
              class: "link"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Does not have an account? Create one `);
                } else {
                  return [
                    createTextVNode(" Does not have an account? Create one ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_nuxt_link, {
              to: "/auth/forgot-password",
              class: "link"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Forgot your password? `);
                } else {
                  return [
                    createTextVNode(" Forgot your password? ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><button class="btn btn-primary self-end 2-1/2" type="submit"${ssrIncludeBooleanAttr(!unref(email) || !unref(password) || unref(password).length < 8) ? " disabled" : ""}${_scopeId}> Sign In </button></form></div>`);
          } else {
            return [
              createVNode("div", { class: "page-content-auth flex flex-col items-center justify-center h-full" }, [
                createVNode("h2", { class: "page-title pb-0" }, "Login to " + toDisplayString(unref(appConfig).appName), 1),
                createVNode("form", {
                  class: "mt-2 w-full flex flex-col items-start justify-start gap-4",
                  onSubmit: withModifiers(handleSubmit, ["prevent"])
                }, [
                  createVNode("div", { class: "form-control w-full" }, [
                    createVNode("label", { class: "label" }, [
                      createVNode("span", { class: "label-text" }, "What is your email?")
                    ]),
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                      type: "email",
                      placeholder: "Your email...",
                      class: "input input-bordered w-full",
                      required: ""
                    }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                      [vModelText, unref(email)]
                    ])
                  ]),
                  createVNode("div", { class: "form-control w-full" }, [
                    createVNode("label", { class: "label" }, [
                      createVNode("span", { class: "label-text" }, "What is your password?")
                    ]),
                    withDirectives(createVNode("input", {
                      ref_key: "passwordRef",
                      ref: passwordRef,
                      "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                      type: "password",
                      placeholder: "Your password...",
                      class: "input input-bordered w-full",
                      required: ""
                    }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                      [vModelText, unref(password)]
                    ])
                  ]),
                  createVNode("div", { class: "flex flex-row flex-wrap items-center justify-between w-full gap-2" }, [
                    createVNode(_component_nuxt_link, {
                      to: "/auth/sign-up",
                      class: "link"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Does not have an account? Create one ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_nuxt_link, {
                      to: "/auth/forgot-password",
                      class: "link"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Forgot your password? ")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("button", {
                    class: "btn btn-primary self-end 2-1/2",
                    type: "submit",
                    disabled: !unref(email) || !unref(password) || unref(password).length < 8
                  }, " Sign In ", 8, ["disabled"])
                ], 40, ["onSubmit"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/sign-in.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=sign-in-ff50b40f.mjs.map
