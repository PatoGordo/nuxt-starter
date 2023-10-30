import { _ as __nuxt_component_0 } from './AuthPage-6e9dbd0d.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-43977de6.mjs';
import { defineComponent, ref, withCtx, openBlock, createBlock, createVNode, unref, createTextVNode, toDisplayString, withModifiers, withDirectives, isRef, vModelText, useSSRContext } from 'vue';
import { a as useAuthStore, b as useLoading, d as useRouter, e as api } from '../server.mjs';
import { h as handleError } from './handle-error-fc214ea3.mjs';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { a as appConfig } from './app-c8b360d5.mjs';
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
  __name: "sign-up",
  __ssrInlineRender: true,
  setup(__props) {
    const name = ref("");
    const email = ref("");
    const password = ref("");
    const authStore = useAuthStore();
    const { start, end } = useLoading();
    const router = useRouter();
    const handleSubmit = async () => {
      try {
        start("Creating account...");
        const res = await api.post("/v1/auth/sign-up", {
          name: name.value,
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
        handleError(error);
      } finally {
        end();
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_navigation_auth_page = __nuxt_component_0;
      const _component_nuxt_link = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_navigation_auth_page, _attrs, {
        image: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg xmlns="http://www.w3.org/2000/svg" width="420" viewBox="0 0 751.57 539.42" xmlns:xlink="http://www.w3.org/1999/xlink"${_scopeId}><path d="m19.9,538.23c0,.66.53,1.19,1.19,1.19h729.29c.66,0,1.19-.53,1.19-1.19s-.53-1.19-1.19-1.19H21.09c-.66,0-1.19.53-1.19,1.19Z" fill="#3f3d58"${_scopeId}></path><path d="m253.43,95.15H19.53c-8.92,0-16.18-7.26-16.18-16.18s7.26-16.18,16.18-16.18h233.9c8.92,0,16.18,7.26,16.18,16.18s-7.26,16.18-16.18,16.18ZM19.53,64.79c-7.82,0-14.18,6.36-14.18,14.18s6.36,14.18,14.18,14.18h233.9c7.82,0,14.18-6.36,14.18-14.18s-6.36-14.18-14.18-14.18H19.53Z" fill="#e2e3e4"${_scopeId}></path><path d="m253.43,284.5H19.53c-8.65,0-15.68-7.03-15.68-15.68s7.03-15.68,15.68-15.68h233.9c8.65,0,15.68,7.03,15.68,15.68s-7.03,15.68-15.68,15.68Z" fill="#6c63ff"${_scopeId}></path><path d="m176.78,31.36H15.68C7.03,31.36,0,24.33,0,15.68S7.03,0,15.68,0h161.1c8.65,0,15.68,7.03,15.68,15.68s-7.03,15.68-15.68,15.68Z" fill="#e2e3e4"${_scopeId}></path><path d="m253.43,158.43H19.53c-8.92,0-16.18-7.26-16.18-16.18s7.26-16.18,16.18-16.18h233.9c8.92,0,16.18,7.26,16.18,16.18s-7.26,16.18-16.18,16.18Zm-233.9-30.36c-7.82,0-14.18,6.36-14.18,14.18s6.36,14.18,14.18,14.18h233.9c7.82,0,14.18-6.36,14.18-14.18s-6.36-14.18-14.18-14.18H19.53Z" fill="#e2e3e4"${_scopeId}></path><path d="m253.43,221.72H19.53c-8.92,0-16.18-7.26-16.18-16.18s7.26-16.18,16.18-16.18h233.9c8.92,0,16.18,7.26,16.18,16.18s-7.26,16.18-16.18,16.18Zm-233.9-30.36c-7.82,0-14.18,6.36-14.18,14.18s6.36,14.18,14.18,14.18h233.9c7.82,0,14.18-6.36,14.18-14.18s-6.36-14.18-14.18-14.18H19.53Z" fill="#e2e3e4"${_scopeId}></path><path d="m11.49,51.17h61.3c1.46,0,2.65,1.18,2.65,2.65h0c0,1.46-1.19,2.65-2.65,2.65H11.49c-1.46,0-2.65-1.18-2.65-2.65h0c0-1.46,1.19-2.65,2.65-2.65Z" fill="#e2e3e4"${_scopeId}></path><path d="m11.49,115.95h61.3c1.46,0,2.65,1.18,2.65,2.64h0c0,1.46-1.19,2.65-2.65,2.65H11.49c-1.46,0-2.65-1.18-2.65-2.64h0c0-1.46,1.19-2.65,2.65-2.65Z" fill="#e2e3e4"${_scopeId}></path><path d="m11.49,180.74h61.3c1.46,0,2.65,1.18,2.65,2.65h0c0,1.46-1.19,2.64-2.65,2.64H11.49c-1.46,0-2.65-1.18-2.65-2.65h0c0-1.46,1.19-2.64,2.65-2.64Z" fill="#e2e3e4"${_scopeId}></path><g${_scopeId}><polygon points="447.08 132.26 424.72 139.62 424.72 107.43 445.01 107.43 447.08 132.26" fill="#9f616a"${_scopeId}></polygon><circle cx="427.49" cy="94.06" r="22.28" fill="#9f616a"${_scopeId}></circle><path d="m433.61,91.85c-3.73-.11-6.18-3.88-7.63-7.32s-2.94-7.39-6.4-8.81c-2.83-1.16-7.82,6.69-10.05,4.6-2.33-2.18-.06-13.37,2.41-15.38,2.47-2.01,5.85-2.4,9.03-2.55,7.76-.36,15.57.27,23.18,1.86,4.71.98,9.55,2.46,12.95,5.86,4.3,4.32,5.4,10.83,5.71,16.92.32,6.23-.04,12.75-3.07,18.2s-9.37,9.47-15.45,8.08c-.61-3.3.01-6.69.25-10.05.23-3.35-.01-6.97-2.06-9.64-2.04-2.67-6.42-3.73-8.8-1.36" fill="#2f2e43"${_scopeId}></path><path d="m461.02,99.57c2.23-1.63,4.9-3,7.64-2.66,2.96.36,5.47,2.8,6.23,5.69s-.09,6.07-1.93,8.43c-1.83,2.36-4.56,3.92-7.44,4.7-1.67.45-3.5.64-5.09-.04-2.34-1.01-3.61-4-2.69-6.38" fill="#2f2e43"${_scopeId}></path><g${_scopeId}><path id="uuid-00bc58e7-734f-4d7c-a085-03c0cd267642-103" d="m375.76,309.2c-1.49,7.32,1.24,14.01,6.08,14.94s9.97-4.26,11.45-11.58c.63-2.92.53-5.94-.29-8.82l18.43-114.75-23.05-4.34-8.9,116.5c-1.89,2.36-3.16,5.12-3.72,8.06h0Z" fill="#9f616a"${_scopeId}></path><path d="m424.48,124.85h-15.73c-11.12,1.69-14.14,7.62-16.67,18.58-3.86,16.72-8.79,38.98-7.81,39.31,1.57.52,28.35,13.12,42,10.24l-1.79-68.13h0Z" fill="#e2e3e4"${_scopeId}></path></g><rect x="418.75" y="490.36" width="20.94" height="29.71" fill="#9f616a"${_scopeId}></rect><path d="m398.36,538.05c-2.2,0-4.16-.05-5.64-.19-5.56-.51-10.87-4.62-13.54-7.02-1.2-1.08-1.58-2.8-.96-4.28h0c.45-1.06,1.34-1.86,2.45-2.17l14.7-4.2,23.8-16.06.27.48c.1.18,2.44,4.39,3.22,7.23.3,1.08.22,1.98-.23,2.68-.31.48-.75.76-1.1.92.43.45,1.78,1.37,5.94,2.03,6.07.96,7.35-5.33,7.4-5.59l.04-.21.18-.12c2.89-1.86,4.67-2.71,5.28-2.53.38.11,1.02.31,2.75,17.44.17.54,1.38,4.48.56,8.25-.89,4.1-18.81,2.69-22.4,2.37-.1.01-13.52.97-22.71.97h0Z" fill="#2f2e43"${_scopeId}></path><rect x="487.82" y="470.31" width="20.94" height="29.71" transform="translate(-181.25 337.18) rotate(-31.95)" fill="#9f616a"${_scopeId}></rect><path d="m475.72,533.98c-2.46,0-4.72-.3-6.33-.58-1.58-.28-2.82-1.54-3.08-3.12h0c-.18-1.14.15-2.29.93-3.14l10.25-11.34,11.7-26.22.48.26c.18.1,4.39,2.43,6.56,4.43.83.76,1.24,1.57,1.22,2.4-.01.58-.23,1.04-.45,1.37.6.16,2.23.22,6.11-1.42,5.66-2.39,3.42-8.41,3.32-8.66l-.08-.2.09-.19c1.47-3.11,2.52-4.77,3.14-4.94.39-.11,1.03-.28,11.56,13.35.43.36,3.54,3.07,4.84,6.7,1.41,3.95-14.54,12.24-17.75,13.86-.1.08-16.79,12.21-23.65,15.66-2.72,1.37-5.94,1.79-8.87,1.79h0Z" fill="#2f2e43"${_scopeId}></path><path d="m455.11,241.91h-58.63l-5.32,54.54,23.28,201.52h29.93l-11.97-116.39,48.55,105.08,26.6-18.62-37.91-98.1s13.54-85.46,2.9-106.75c-10.64-21.28-17.43-21.28-17.43-21.28h0Z" fill="#2f2e43"${_scopeId}></path><polygon points="484.28 245.23 391.16 245.23 419.1 124.85 459.67 124.85 484.28 245.23" fill="#e2e3e4"${_scopeId}></polygon><path id="uuid-ece83039-1aa0-468e-a846-e0cb6ecd6032-104" d="m492.66,309.2c1.49,7.32-1.24,14.01-6.08,14.94s-9.97-4.26-11.45-11.58c-.63-2.92-.53-5.94.29-8.82l-18.43-114.75,23.05-4.34,8.9,116.5c1.89,2.36,3.16,5.12,3.72,8.06h0Z" fill="#9f616a"${_scopeId}></path><path d="m443.94,124.85h15.73c11.12,1.69,14.14,7.62,16.67,18.58,3.86,16.72,8.79,38.98,7.81,39.31-1.57.52-28.35,13.12-42,10.24l1.79-68.13h0Z" fill="#e2e3e4"${_scopeId}></path></g></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "420",
                viewBox: "0 0 751.57 539.42",
                "xmlns:xlink": "http://www.w3.org/1999/xlink"
              }, [
                createVNode("path", {
                  d: "m19.9,538.23c0,.66.53,1.19,1.19,1.19h729.29c.66,0,1.19-.53,1.19-1.19s-.53-1.19-1.19-1.19H21.09c-.66,0-1.19.53-1.19,1.19Z",
                  fill: "#3f3d58"
                }),
                createVNode("path", {
                  d: "m253.43,95.15H19.53c-8.92,0-16.18-7.26-16.18-16.18s7.26-16.18,16.18-16.18h233.9c8.92,0,16.18,7.26,16.18,16.18s-7.26,16.18-16.18,16.18ZM19.53,64.79c-7.82,0-14.18,6.36-14.18,14.18s6.36,14.18,14.18,14.18h233.9c7.82,0,14.18-6.36,14.18-14.18s-6.36-14.18-14.18-14.18H19.53Z",
                  fill: "#e2e3e4"
                }),
                createVNode("path", {
                  d: "m253.43,284.5H19.53c-8.65,0-15.68-7.03-15.68-15.68s7.03-15.68,15.68-15.68h233.9c8.65,0,15.68,7.03,15.68,15.68s-7.03,15.68-15.68,15.68Z",
                  fill: "#6c63ff"
                }),
                createVNode("path", {
                  d: "m176.78,31.36H15.68C7.03,31.36,0,24.33,0,15.68S7.03,0,15.68,0h161.1c8.65,0,15.68,7.03,15.68,15.68s-7.03,15.68-15.68,15.68Z",
                  fill: "#e2e3e4"
                }),
                createVNode("path", {
                  d: "m253.43,158.43H19.53c-8.92,0-16.18-7.26-16.18-16.18s7.26-16.18,16.18-16.18h233.9c8.92,0,16.18,7.26,16.18,16.18s-7.26,16.18-16.18,16.18Zm-233.9-30.36c-7.82,0-14.18,6.36-14.18,14.18s6.36,14.18,14.18,14.18h233.9c7.82,0,14.18-6.36,14.18-14.18s-6.36-14.18-14.18-14.18H19.53Z",
                  fill: "#e2e3e4"
                }),
                createVNode("path", {
                  d: "m253.43,221.72H19.53c-8.92,0-16.18-7.26-16.18-16.18s7.26-16.18,16.18-16.18h233.9c8.92,0,16.18,7.26,16.18,16.18s-7.26,16.18-16.18,16.18Zm-233.9-30.36c-7.82,0-14.18,6.36-14.18,14.18s6.36,14.18,14.18,14.18h233.9c7.82,0,14.18-6.36,14.18-14.18s-6.36-14.18-14.18-14.18H19.53Z",
                  fill: "#e2e3e4"
                }),
                createVNode("path", {
                  d: "m11.49,51.17h61.3c1.46,0,2.65,1.18,2.65,2.65h0c0,1.46-1.19,2.65-2.65,2.65H11.49c-1.46,0-2.65-1.18-2.65-2.65h0c0-1.46,1.19-2.65,2.65-2.65Z",
                  fill: "#e2e3e4"
                }),
                createVNode("path", {
                  d: "m11.49,115.95h61.3c1.46,0,2.65,1.18,2.65,2.64h0c0,1.46-1.19,2.65-2.65,2.65H11.49c-1.46,0-2.65-1.18-2.65-2.64h0c0-1.46,1.19-2.65,2.65-2.65Z",
                  fill: "#e2e3e4"
                }),
                createVNode("path", {
                  d: "m11.49,180.74h61.3c1.46,0,2.65,1.18,2.65,2.65h0c0,1.46-1.19,2.64-2.65,2.64H11.49c-1.46,0-2.65-1.18-2.65-2.65h0c0-1.46,1.19-2.64,2.65-2.64Z",
                  fill: "#e2e3e4"
                }),
                createVNode("g", null, [
                  createVNode("polygon", {
                    points: "447.08 132.26 424.72 139.62 424.72 107.43 445.01 107.43 447.08 132.26",
                    fill: "#9f616a"
                  }),
                  createVNode("circle", {
                    cx: "427.49",
                    cy: "94.06",
                    r: "22.28",
                    fill: "#9f616a"
                  }),
                  createVNode("path", {
                    d: "m433.61,91.85c-3.73-.11-6.18-3.88-7.63-7.32s-2.94-7.39-6.4-8.81c-2.83-1.16-7.82,6.69-10.05,4.6-2.33-2.18-.06-13.37,2.41-15.38,2.47-2.01,5.85-2.4,9.03-2.55,7.76-.36,15.57.27,23.18,1.86,4.71.98,9.55,2.46,12.95,5.86,4.3,4.32,5.4,10.83,5.71,16.92.32,6.23-.04,12.75-3.07,18.2s-9.37,9.47-15.45,8.08c-.61-3.3.01-6.69.25-10.05.23-3.35-.01-6.97-2.06-9.64-2.04-2.67-6.42-3.73-8.8-1.36",
                    fill: "#2f2e43"
                  }),
                  createVNode("path", {
                    d: "m461.02,99.57c2.23-1.63,4.9-3,7.64-2.66,2.96.36,5.47,2.8,6.23,5.69s-.09,6.07-1.93,8.43c-1.83,2.36-4.56,3.92-7.44,4.7-1.67.45-3.5.64-5.09-.04-2.34-1.01-3.61-4-2.69-6.38",
                    fill: "#2f2e43"
                  }),
                  createVNode("g", null, [
                    createVNode("path", {
                      id: "uuid-00bc58e7-734f-4d7c-a085-03c0cd267642-103",
                      d: "m375.76,309.2c-1.49,7.32,1.24,14.01,6.08,14.94s9.97-4.26,11.45-11.58c.63-2.92.53-5.94-.29-8.82l18.43-114.75-23.05-4.34-8.9,116.5c-1.89,2.36-3.16,5.12-3.72,8.06h0Z",
                      fill: "#9f616a"
                    }),
                    createVNode("path", {
                      d: "m424.48,124.85h-15.73c-11.12,1.69-14.14,7.62-16.67,18.58-3.86,16.72-8.79,38.98-7.81,39.31,1.57.52,28.35,13.12,42,10.24l-1.79-68.13h0Z",
                      fill: "#e2e3e4"
                    })
                  ]),
                  createVNode("rect", {
                    x: "418.75",
                    y: "490.36",
                    width: "20.94",
                    height: "29.71",
                    fill: "#9f616a"
                  }),
                  createVNode("path", {
                    d: "m398.36,538.05c-2.2,0-4.16-.05-5.64-.19-5.56-.51-10.87-4.62-13.54-7.02-1.2-1.08-1.58-2.8-.96-4.28h0c.45-1.06,1.34-1.86,2.45-2.17l14.7-4.2,23.8-16.06.27.48c.1.18,2.44,4.39,3.22,7.23.3,1.08.22,1.98-.23,2.68-.31.48-.75.76-1.1.92.43.45,1.78,1.37,5.94,2.03,6.07.96,7.35-5.33,7.4-5.59l.04-.21.18-.12c2.89-1.86,4.67-2.71,5.28-2.53.38.11,1.02.31,2.75,17.44.17.54,1.38,4.48.56,8.25-.89,4.1-18.81,2.69-22.4,2.37-.1.01-13.52.97-22.71.97h0Z",
                    fill: "#2f2e43"
                  }),
                  createVNode("rect", {
                    x: "487.82",
                    y: "470.31",
                    width: "20.94",
                    height: "29.71",
                    transform: "translate(-181.25 337.18) rotate(-31.95)",
                    fill: "#9f616a"
                  }),
                  createVNode("path", {
                    d: "m475.72,533.98c-2.46,0-4.72-.3-6.33-.58-1.58-.28-2.82-1.54-3.08-3.12h0c-.18-1.14.15-2.29.93-3.14l10.25-11.34,11.7-26.22.48.26c.18.1,4.39,2.43,6.56,4.43.83.76,1.24,1.57,1.22,2.4-.01.58-.23,1.04-.45,1.37.6.16,2.23.22,6.11-1.42,5.66-2.39,3.42-8.41,3.32-8.66l-.08-.2.09-.19c1.47-3.11,2.52-4.77,3.14-4.94.39-.11,1.03-.28,11.56,13.35.43.36,3.54,3.07,4.84,6.7,1.41,3.95-14.54,12.24-17.75,13.86-.1.08-16.79,12.21-23.65,15.66-2.72,1.37-5.94,1.79-8.87,1.79h0Z",
                    fill: "#2f2e43"
                  }),
                  createVNode("path", {
                    d: "m455.11,241.91h-58.63l-5.32,54.54,23.28,201.52h29.93l-11.97-116.39,48.55,105.08,26.6-18.62-37.91-98.1s13.54-85.46,2.9-106.75c-10.64-21.28-17.43-21.28-17.43-21.28h0Z",
                    fill: "#2f2e43"
                  }),
                  createVNode("polygon", {
                    points: "484.28 245.23 391.16 245.23 419.1 124.85 459.67 124.85 484.28 245.23",
                    fill: "#e2e3e4"
                  }),
                  createVNode("path", {
                    id: "uuid-ece83039-1aa0-468e-a846-e0cb6ecd6032-104",
                    d: "m492.66,309.2c1.49,7.32-1.24,14.01-6.08,14.94s-9.97-4.26-11.45-11.58c-.63-2.92-.53-5.94.29-8.82l-18.43-114.75,23.05-4.34,8.9,116.5c1.89,2.36,3.16,5.12,3.72,8.06h0Z",
                    fill: "#9f616a"
                  }),
                  createVNode("path", {
                    d: "m443.94,124.85h15.73c11.12,1.69,14.14,7.62,16.67,18.58,3.86,16.72,8.79,38.98,7.81,39.31-1.57.52-28.35,13.12-42,10.24l1.79-68.13h0Z",
                    fill: "#e2e3e4"
                  })
                ])
              ]))
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="page-content-auth flex flex-col items-center justify-center h-full"${_scopeId}><h2 class="page-title pb-0"${_scopeId}>Register to ${ssrInterpolate(unref(appConfig).appName)}</h2><form class="mt-2 w-full flex flex-col items-start justify-start gap-4"${_scopeId}><div class="form-control w-full"${_scopeId}><label class="label"${_scopeId}><span class="label-text"${_scopeId}>What is your name?</span></label><input${ssrRenderAttr("value", unref(name))} type="text"${ssrRenderAttr("placeholder", "Your name...")} class="input input-bordered w-full" required${_scopeId}></div><div class="form-control w-full"${_scopeId}><label class="label"${_scopeId}><span class="label-text"${_scopeId}>What is your email?</span></label><input${ssrRenderAttr("value", unref(email))} type="email"${ssrRenderAttr("placeholder", "Your email...")} class="input input-bordered w-full" required${_scopeId}></div><div class="form-control w-full"${_scopeId}><label class="label"${_scopeId}><span class="label-text"${_scopeId}>What is your password?</span></label><input${ssrRenderAttr("value", unref(password))} type="password"${ssrRenderAttr("placeholder", "Your password...")} class="input input-bordered w-full" required${_scopeId}></div><div class="flex flex-row flex-wrap items-center justify-between w-full gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_nuxt_link, {
              to: "/auth/sign-in",
              class: "link"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Already have an account? Login with it `);
                } else {
                  return [
                    createTextVNode(" Already have an account? Login with it ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><button class="btn btn-primary self-end 2-1/2" type="submit"${ssrIncludeBooleanAttr(!unref(email) || !unref(password) || unref(password).length < 8) ? " disabled" : ""}${_scopeId}> Register </button></form></div>`);
          } else {
            return [
              createVNode("div", { class: "page-content-auth flex flex-col items-center justify-center h-full" }, [
                createVNode("h2", { class: "page-title pb-0" }, "Register to " + toDisplayString(unref(appConfig).appName), 1),
                createVNode("form", {
                  class: "mt-2 w-full flex flex-col items-start justify-start gap-4",
                  onSubmit: withModifiers(handleSubmit, ["prevent"])
                }, [
                  createVNode("div", { class: "form-control w-full" }, [
                    createVNode("label", { class: "label" }, [
                      createVNode("span", { class: "label-text" }, "What is your name?")
                    ]),
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => isRef(name) ? name.value = $event : null,
                      type: "text",
                      placeholder: "Your name...",
                      class: "input input-bordered w-full",
                      required: ""
                    }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                      [vModelText, unref(name)]
                    ])
                  ]),
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
                      to: "/auth/sign-in",
                      class: "link"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Already have an account? Login with it ")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("button", {
                    class: "btn btn-primary self-end 2-1/2",
                    type: "submit",
                    disabled: !unref(email) || !unref(password) || unref(password).length < 8
                  }, " Register ", 8, ["disabled"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/sign-up.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=sign-up-2a0218a3.mjs.map
