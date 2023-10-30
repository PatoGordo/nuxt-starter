import { _ as __nuxt_component_0 } from './AuthPage-6e9dbd0d.mjs';
import { defineComponent, ref, withCtx, openBlock, createBlock, createVNode, unref, withModifiers, withDirectives, isRef, vModelText, useSSRContext } from 'vue';
import { f as useRoute, d as useRouter, b as useLoading, e as api } from '../server.mjs';
import { ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import Swal from 'sweetalert2';
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
import 'ms';
import 'axios';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "reset-password",
  __ssrInlineRender: true,
  setup(__props) {
    var _a, _b, _c;
    const route = useRoute();
    const router = useRouter();
    const token = ((_b = (_a = route == null ? void 0 : route.query) == null ? void 0 : _a.token) == null ? void 0 : _b.length) ? String((_c = route == null ? void 0 : route.query) == null ? void 0 : _c.token) : null;
    const password = ref("");
    const passwordRef = ref(null);
    const { start, end } = useLoading();
    const handleSubmit = async () => {
      try {
        start("Reseting your password...");
        await api.patch("/v1/auth/reset-password", {
          token,
          new_password: password.value
        });
        Swal.fire(
          "Password has been successfully reseted!",
          "Now you can access your account with your brand new password.",
          "success"
        );
        router.push("/auth/sign-in");
      } catch (error) {
        handleError(error, () => {
          var _a2;
          password.value = "";
          (_a2 = passwordRef.value) == null ? void 0 : _a2.focus();
        });
      } finally {
        end();
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_navigation_auth_page = __nuxt_component_0;
      _push(ssrRenderComponent(_component_navigation_auth_page, _attrs, {
        image: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" width="420" viewBox="0 0 866.52362 637.05628" xmlns:xlink="http://www.w3.org/1999/xlink"${_scopeId}><path d="M971.73819,768.52814v-72.34S999.92985,747.47411,971.73819,768.52814Z" transform="translate(-166.73819 -131.47186)" fill="#f1f1f1"${_scopeId}></path><path d="M973.47966,768.51541,920.19,719.59417S977.03523,733.5097,973.47966,768.51541Z" transform="translate(-166.73819 -131.47186)" fill="#f1f1f1"${_scopeId}></path><path d="M743.26636,577.44241a9.09535,9.09535,0,0,1,9.85146-9.872l9.60661-18.431,12.62434,3.10614-13.932,25.83764a9.14461,9.14461,0,0,1-18.15045-.64078Z" transform="translate(-166.73819 -131.47186)" fill="#ffb7b7"${_scopeId}></path><polygon points="633.871 625.527 623.218 625.526 618.15 584.437 633.873 584.438 633.871 625.527" fill="#ffb7b7"${_scopeId}></polygon><path d="M803.32565,767.32462l-34.34883-.00127v-.43446a13.37025,13.37025,0,0,1,13.36952-13.36931h.00085l20.9791.00085Z" transform="translate(-166.73819 -131.47186)" fill="#2f2e41"${_scopeId}></path><polygon points="719.549 617.569 709.271 620.371 693.57 582.063 708.739 577.927 719.549 617.569" fill="#ffb7b7"${_scopeId}></polygon><path d="M891.62477,758.288,858.486,767.32462l-.11432-.41915a13.37025,13.37025,0,0,1,9.38068-16.416l.00082-.00022L887.99322,744.97Z" transform="translate(-166.73819 -131.47186)" fill="#2f2e41"${_scopeId}></path><polygon points="614.423 448.033 609.109 528.727 620.524 619.261 639.221 613.554 640.009 532.663 654.966 486.018 699.25 610.602 719.521 603.123 702.792 522.232 693.345 446.262 614.423 448.033" fill="#2f2e41"${_scopeId}></polygon><path d="M832.82255,437.80621,801.33678,442.449,789.994,453.66711l-3.5219,40.30669,2.18745,35.702-9.11869,62.959s22.93018-12.72919,40.70053,3.20519,42.63547,2.816,43.147-7.784Z" transform="translate(-166.73819 -131.47186)" fill="#cbcbcb"${_scopeId}></path><path d="M816.83429,488.35732l-.00043-.04526,15.64133-50.984.20211-.01318c1.11327-.07248,27.33679-1.618,33.20236,11.33006l.02836.06246-1.78163,52.983,2.45371,82.97939-48.50061,10.50471-.35252.07678Z" transform="translate(-166.73819 -131.47186)" fill="#2f2e41"${_scopeId}></path><path d="M799.50072,484.833l2.86926-43.2209c-20.40666,1.2694-20.09926,15.73786-20.07577,16.3687l-.223,64.64973-4.08709,69.1641,14.86038-1.11441Z" transform="translate(-166.73819 -131.47186)" fill="#2f2e41"${_scopeId}></path><path d="M753.48519,563.47709l18.11738-42.04748L784.248,498.208l6.60212,41.88934-22.9224,34.38352Z" transform="translate(-166.73819 -131.47186)" fill="#2f2e41"${_scopeId}></path><path d="M828.36,548.00623a9.09534,9.09534,0,0,1,12.32532-6.52638l14.61634-14.77674,11.14617,6.69216L845.51367,553.973A9.14461,9.14461,0,0,1,828.36,548.00623Z" transform="translate(-166.73819 -131.47186)" fill="#ffb7b7"${_scopeId}></path><path d="M840.65123,536.08544,870.45248,503.393,850.72593,475.2442l2.03043-13.762L864.38293,447.12l.2269.29336c1.23932,1.60372,30.36218,39.43935,31.19784,53.76257.83853,14.37622-41.02087,50.74162-42.80336,52.28232l-.24766.21428Z" transform="translate(-166.73819 -131.47186)" fill="#2f2e41"${_scopeId}></path><circle cx="647.9164" cy="281.61187" r="21.18132" fill="#ffb7b7"${_scopeId}></circle><path d="M834.57593,396.15035l1.02686-2.06675-5.1669-2.56715s-5.69991-9.27437-16.01412-6.66807-14.95472,4.16612-14.95472,4.16612l-5.15383,2.59323,2.58668,2.57367-4.6404,1.55986,3.10011,1.54028-3.60707,2.07328,1.94177,10.62831s3.22513-8.06117,9.42537-4.98062,17.5414-1.59245,17.5414-1.59245l9.853,19.06862s2.03267-6.6845,5.65681-4.9021C836.17091,417.57661,845.42963,402.83144,834.57593,396.15035Z" transform="translate(-166.73819 -131.47186)" fill="#2f2e41"${_scopeId}></path><path d="M594.90728,516.06962,272.80489,604.901,166.73819,220.3032l322.10239-88.83134Z" transform="translate(-166.73819 -131.47186)" fill="#fff"${_scopeId}></path><path d="M594.90728,516.06962,272.80489,604.901,166.73819,220.3032l322.10239-88.83134ZM276.92016,597.65144l310.73759-85.69709-102.93244-373.233-310.7376,85.6971Z" transform="translate(-166.73819 -131.47186)" fill="#f1f1f1"${_scopeId}></path><path d="M418.744,303.76532l-80.741,22.26726a4.46018,4.46018,0,0,1-5.47917-3.11031l-22.26725-80.74105a4.46017,4.46017,0,0,1,3.11031-5.47917l80.74105-22.26725a4.46016,4.46016,0,0,1,5.47916,3.11031l22.26726,80.74105A4.46016,4.46016,0,0,1,418.744,303.76532ZM313.8406,238.42a2.676,2.676,0,0,0-1.86619,3.2875l22.26726,80.74105a2.676,2.676,0,0,0,3.2875,1.86619l80.741-22.26726a2.676,2.676,0,0,0,1.86619-3.2875l-22.26726-80.741a2.676,2.676,0,0,0-3.2875-1.86619Z" transform="translate(-166.73819 -131.47186)" fill="#e5e5e5"${_scopeId}></path><path d="M398.2766,320.03913l-80.741,22.26726a4.01409,4.01409,0,0,1-4.93125-2.79928L290.337,258.76606a4.01409,4.01409,0,0,1,2.79928-4.93125l80.741-22.26726a4.01409,4.01409,0,0,1,4.93125,2.79928l22.26726,80.74105A4.01408,4.01408,0,0,1,398.2766,320.03913Z" transform="translate(-166.73819 -131.47186)" fill="#6c63ff"${_scopeId}></path><rect x="263.48929" y="361.96862" width="233.72825" height="9.03209" transform="translate(-250.48374 -17.16149) rotate(-15.41811)" fill="#f1f1f1"${_scopeId}></rect><rect x="269.75017" y="384.67055" width="233.72825" height="9.03209" transform="translate(-256.29398 -14.67996) rotate(-15.41811)" fill="#f1f1f1"${_scopeId}></rect><rect x="276.01104" y="407.37248" width="233.72825" height="9.03209" transform="translate(-262.10422 -12.19843) rotate(-15.41811)" fill="#f1f1f1"${_scopeId}></rect><rect x="287.03019" y="447.32789" width="233.72825" height="9.03209" transform="translate(-272.33023 -7.83093) rotate(-15.41811)" fill="#f1f1f1"${_scopeId}></rect><rect x="293.29106" y="470.02982" width="233.72825" height="9.03209" transform="translate(-278.14047 -5.34939) rotate(-15.41811)" fill="#f1f1f1"${_scopeId}></rect><rect x="299.55194" y="492.73176" width="233.72825" height="9.03209" transform="translate(-283.9507 -2.86786) rotate(-15.41811)" fill="#f1f1f1"${_scopeId}></rect><path d="M698.0144,603.61617H363.88724V204.66055H698.0144Z" transform="translate(-166.73819 -131.47186)" fill="#fff"${_scopeId}></path><path d="M698.0144,603.61617H363.88724V204.66055H698.0144Zm-328.23263-5.89454H692.11986V210.55508H369.78177Z" transform="translate(-166.73819 -131.47186)" fill="#e5e5e5"${_scopeId}></path><rect x="279.40817" y="244.69464" width="191.03421" height="9.03209" fill="#6c63ff"${_scopeId}></rect><rect x="279.40817" y="268.17807" width="191.03421" height="9.03209" fill="#6c63ff"${_scopeId}></rect><rect x="279.40817" y="291.66149" width="191.03421" height="9.03209" fill="#6c63ff"${_scopeId}></rect><circle cx="263.87741" cy="250.53394" r="5.89453" fill="#6c63ff"${_scopeId}></circle><rect x="279.40817" y="143.50512" width="191.03421" height="9.03209" fill="#e5e5e5"${_scopeId}></rect><rect x="279.40817" y="166.98855" width="191.03421" height="9.03209" fill="#e5e5e5"${_scopeId}></rect><rect x="279.40817" y="190.47198" width="191.03421" height="9.03209" fill="#e5e5e5"${_scopeId}></rect><circle cx="263.87741" cy="148.36201" r="5.89453" fill="#e5e5e5"${_scopeId}></circle><rect x="279.40817" y="346.86657" width="191.03421" height="9.03209" fill="#e5e5e5"${_scopeId}></rect><rect x="279.40817" y="370.35" width="191.03421" height="9.03209" fill="#e5e5e5"${_scopeId}></rect><rect x="279.40817" y="393.83343" width="191.03421" height="9.03209" fill="#e5e5e5"${_scopeId}></rect><circle cx="263.87741" cy="351.72346" r="5.89453" fill="#e5e5e5"${_scopeId}></circle><circle cx="515.67691" cy="438.20509" r="68.29339" fill="#6c63ff"${_scopeId}></circle><path d="M701.33633,565.32032V552.25311a18.92123,18.92123,0,1,0-37.84245,0v13.06721a9.83809,9.83809,0,0,0-9.39555,9.82325v30.87926h56.63355V575.14357A9.83809,9.83809,0,0,0,701.33633,565.32032ZM682.4151,539.99384a12.27276,12.27276,0,0,1,12.25846,12.25927v13.04444H670.15665V552.25311A12.27275,12.27275,0,0,1,682.4151,539.99384Z" transform="translate(-166.73819 -131.47186)" fill="#fff"${_scopeId}></path><path d="M687.50571,580.56948a5.09061,5.09061,0,1,0-7.95433,4.207v11.065H685.278v-11.065A5.08421,5.08421,0,0,0,687.50571,580.56948Z" transform="translate(-166.73819 -131.47186)" fill="#6c63ff"${_scopeId}></path><path d="M1032.26181,768.12193h-381a1,1,0,0,1,0-2h381a1,1,0,0,1,0,2Z" transform="translate(-166.73819 -131.47186)" fill="#cbcbcb"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                "data-name": "Layer 1",
                width: "420",
                viewBox: "0 0 866.52362 637.05628",
                "xmlns:xlink": "http://www.w3.org/1999/xlink"
              }, [
                createVNode("path", {
                  d: "M971.73819,768.52814v-72.34S999.92985,747.47411,971.73819,768.52814Z",
                  transform: "translate(-166.73819 -131.47186)",
                  fill: "#f1f1f1"
                }),
                createVNode("path", {
                  d: "M973.47966,768.51541,920.19,719.59417S977.03523,733.5097,973.47966,768.51541Z",
                  transform: "translate(-166.73819 -131.47186)",
                  fill: "#f1f1f1"
                }),
                createVNode("path", {
                  d: "M743.26636,577.44241a9.09535,9.09535,0,0,1,9.85146-9.872l9.60661-18.431,12.62434,3.10614-13.932,25.83764a9.14461,9.14461,0,0,1-18.15045-.64078Z",
                  transform: "translate(-166.73819 -131.47186)",
                  fill: "#ffb7b7"
                }),
                createVNode("polygon", {
                  points: "633.871 625.527 623.218 625.526 618.15 584.437 633.873 584.438 633.871 625.527",
                  fill: "#ffb7b7"
                }),
                createVNode("path", {
                  d: "M803.32565,767.32462l-34.34883-.00127v-.43446a13.37025,13.37025,0,0,1,13.36952-13.36931h.00085l20.9791.00085Z",
                  transform: "translate(-166.73819 -131.47186)",
                  fill: "#2f2e41"
                }),
                createVNode("polygon", {
                  points: "719.549 617.569 709.271 620.371 693.57 582.063 708.739 577.927 719.549 617.569",
                  fill: "#ffb7b7"
                }),
                createVNode("path", {
                  d: "M891.62477,758.288,858.486,767.32462l-.11432-.41915a13.37025,13.37025,0,0,1,9.38068-16.416l.00082-.00022L887.99322,744.97Z",
                  transform: "translate(-166.73819 -131.47186)",
                  fill: "#2f2e41"
                }),
                createVNode("polygon", {
                  points: "614.423 448.033 609.109 528.727 620.524 619.261 639.221 613.554 640.009 532.663 654.966 486.018 699.25 610.602 719.521 603.123 702.792 522.232 693.345 446.262 614.423 448.033",
                  fill: "#2f2e41"
                }),
                createVNode("path", {
                  d: "M832.82255,437.80621,801.33678,442.449,789.994,453.66711l-3.5219,40.30669,2.18745,35.702-9.11869,62.959s22.93018-12.72919,40.70053,3.20519,42.63547,2.816,43.147-7.784Z",
                  transform: "translate(-166.73819 -131.47186)",
                  fill: "#cbcbcb"
                }),
                createVNode("path", {
                  d: "M816.83429,488.35732l-.00043-.04526,15.64133-50.984.20211-.01318c1.11327-.07248,27.33679-1.618,33.20236,11.33006l.02836.06246-1.78163,52.983,2.45371,82.97939-48.50061,10.50471-.35252.07678Z",
                  transform: "translate(-166.73819 -131.47186)",
                  fill: "#2f2e41"
                }),
                createVNode("path", {
                  d: "M799.50072,484.833l2.86926-43.2209c-20.40666,1.2694-20.09926,15.73786-20.07577,16.3687l-.223,64.64973-4.08709,69.1641,14.86038-1.11441Z",
                  transform: "translate(-166.73819 -131.47186)",
                  fill: "#2f2e41"
                }),
                createVNode("path", {
                  d: "M753.48519,563.47709l18.11738-42.04748L784.248,498.208l6.60212,41.88934-22.9224,34.38352Z",
                  transform: "translate(-166.73819 -131.47186)",
                  fill: "#2f2e41"
                }),
                createVNode("path", {
                  d: "M828.36,548.00623a9.09534,9.09534,0,0,1,12.32532-6.52638l14.61634-14.77674,11.14617,6.69216L845.51367,553.973A9.14461,9.14461,0,0,1,828.36,548.00623Z",
                  transform: "translate(-166.73819 -131.47186)",
                  fill: "#ffb7b7"
                }),
                createVNode("path", {
                  d: "M840.65123,536.08544,870.45248,503.393,850.72593,475.2442l2.03043-13.762L864.38293,447.12l.2269.29336c1.23932,1.60372,30.36218,39.43935,31.19784,53.76257.83853,14.37622-41.02087,50.74162-42.80336,52.28232l-.24766.21428Z",
                  transform: "translate(-166.73819 -131.47186)",
                  fill: "#2f2e41"
                }),
                createVNode("circle", {
                  cx: "647.9164",
                  cy: "281.61187",
                  r: "21.18132",
                  fill: "#ffb7b7"
                }),
                createVNode("path", {
                  d: "M834.57593,396.15035l1.02686-2.06675-5.1669-2.56715s-5.69991-9.27437-16.01412-6.66807-14.95472,4.16612-14.95472,4.16612l-5.15383,2.59323,2.58668,2.57367-4.6404,1.55986,3.10011,1.54028-3.60707,2.07328,1.94177,10.62831s3.22513-8.06117,9.42537-4.98062,17.5414-1.59245,17.5414-1.59245l9.853,19.06862s2.03267-6.6845,5.65681-4.9021C836.17091,417.57661,845.42963,402.83144,834.57593,396.15035Z",
                  transform: "translate(-166.73819 -131.47186)",
                  fill: "#2f2e41"
                }),
                createVNode("path", {
                  d: "M594.90728,516.06962,272.80489,604.901,166.73819,220.3032l322.10239-88.83134Z",
                  transform: "translate(-166.73819 -131.47186)",
                  fill: "#fff"
                }),
                createVNode("path", {
                  d: "M594.90728,516.06962,272.80489,604.901,166.73819,220.3032l322.10239-88.83134ZM276.92016,597.65144l310.73759-85.69709-102.93244-373.233-310.7376,85.6971Z",
                  transform: "translate(-166.73819 -131.47186)",
                  fill: "#f1f1f1"
                }),
                createVNode("path", {
                  d: "M418.744,303.76532l-80.741,22.26726a4.46018,4.46018,0,0,1-5.47917-3.11031l-22.26725-80.74105a4.46017,4.46017,0,0,1,3.11031-5.47917l80.74105-22.26725a4.46016,4.46016,0,0,1,5.47916,3.11031l22.26726,80.74105A4.46016,4.46016,0,0,1,418.744,303.76532ZM313.8406,238.42a2.676,2.676,0,0,0-1.86619,3.2875l22.26726,80.74105a2.676,2.676,0,0,0,3.2875,1.86619l80.741-22.26726a2.676,2.676,0,0,0,1.86619-3.2875l-22.26726-80.741a2.676,2.676,0,0,0-3.2875-1.86619Z",
                  transform: "translate(-166.73819 -131.47186)",
                  fill: "#e5e5e5"
                }),
                createVNode("path", {
                  d: "M398.2766,320.03913l-80.741,22.26726a4.01409,4.01409,0,0,1-4.93125-2.79928L290.337,258.76606a4.01409,4.01409,0,0,1,2.79928-4.93125l80.741-22.26726a4.01409,4.01409,0,0,1,4.93125,2.79928l22.26726,80.74105A4.01408,4.01408,0,0,1,398.2766,320.03913Z",
                  transform: "translate(-166.73819 -131.47186)",
                  fill: "#6c63ff"
                }),
                createVNode("rect", {
                  x: "263.48929",
                  y: "361.96862",
                  width: "233.72825",
                  height: "9.03209",
                  transform: "translate(-250.48374 -17.16149) rotate(-15.41811)",
                  fill: "#f1f1f1"
                }),
                createVNode("rect", {
                  x: "269.75017",
                  y: "384.67055",
                  width: "233.72825",
                  height: "9.03209",
                  transform: "translate(-256.29398 -14.67996) rotate(-15.41811)",
                  fill: "#f1f1f1"
                }),
                createVNode("rect", {
                  x: "276.01104",
                  y: "407.37248",
                  width: "233.72825",
                  height: "9.03209",
                  transform: "translate(-262.10422 -12.19843) rotate(-15.41811)",
                  fill: "#f1f1f1"
                }),
                createVNode("rect", {
                  x: "287.03019",
                  y: "447.32789",
                  width: "233.72825",
                  height: "9.03209",
                  transform: "translate(-272.33023 -7.83093) rotate(-15.41811)",
                  fill: "#f1f1f1"
                }),
                createVNode("rect", {
                  x: "293.29106",
                  y: "470.02982",
                  width: "233.72825",
                  height: "9.03209",
                  transform: "translate(-278.14047 -5.34939) rotate(-15.41811)",
                  fill: "#f1f1f1"
                }),
                createVNode("rect", {
                  x: "299.55194",
                  y: "492.73176",
                  width: "233.72825",
                  height: "9.03209",
                  transform: "translate(-283.9507 -2.86786) rotate(-15.41811)",
                  fill: "#f1f1f1"
                }),
                createVNode("path", {
                  d: "M698.0144,603.61617H363.88724V204.66055H698.0144Z",
                  transform: "translate(-166.73819 -131.47186)",
                  fill: "#fff"
                }),
                createVNode("path", {
                  d: "M698.0144,603.61617H363.88724V204.66055H698.0144Zm-328.23263-5.89454H692.11986V210.55508H369.78177Z",
                  transform: "translate(-166.73819 -131.47186)",
                  fill: "#e5e5e5"
                }),
                createVNode("rect", {
                  x: "279.40817",
                  y: "244.69464",
                  width: "191.03421",
                  height: "9.03209",
                  fill: "#6c63ff"
                }),
                createVNode("rect", {
                  x: "279.40817",
                  y: "268.17807",
                  width: "191.03421",
                  height: "9.03209",
                  fill: "#6c63ff"
                }),
                createVNode("rect", {
                  x: "279.40817",
                  y: "291.66149",
                  width: "191.03421",
                  height: "9.03209",
                  fill: "#6c63ff"
                }),
                createVNode("circle", {
                  cx: "263.87741",
                  cy: "250.53394",
                  r: "5.89453",
                  fill: "#6c63ff"
                }),
                createVNode("rect", {
                  x: "279.40817",
                  y: "143.50512",
                  width: "191.03421",
                  height: "9.03209",
                  fill: "#e5e5e5"
                }),
                createVNode("rect", {
                  x: "279.40817",
                  y: "166.98855",
                  width: "191.03421",
                  height: "9.03209",
                  fill: "#e5e5e5"
                }),
                createVNode("rect", {
                  x: "279.40817",
                  y: "190.47198",
                  width: "191.03421",
                  height: "9.03209",
                  fill: "#e5e5e5"
                }),
                createVNode("circle", {
                  cx: "263.87741",
                  cy: "148.36201",
                  r: "5.89453",
                  fill: "#e5e5e5"
                }),
                createVNode("rect", {
                  x: "279.40817",
                  y: "346.86657",
                  width: "191.03421",
                  height: "9.03209",
                  fill: "#e5e5e5"
                }),
                createVNode("rect", {
                  x: "279.40817",
                  y: "370.35",
                  width: "191.03421",
                  height: "9.03209",
                  fill: "#e5e5e5"
                }),
                createVNode("rect", {
                  x: "279.40817",
                  y: "393.83343",
                  width: "191.03421",
                  height: "9.03209",
                  fill: "#e5e5e5"
                }),
                createVNode("circle", {
                  cx: "263.87741",
                  cy: "351.72346",
                  r: "5.89453",
                  fill: "#e5e5e5"
                }),
                createVNode("circle", {
                  cx: "515.67691",
                  cy: "438.20509",
                  r: "68.29339",
                  fill: "#6c63ff"
                }),
                createVNode("path", {
                  d: "M701.33633,565.32032V552.25311a18.92123,18.92123,0,1,0-37.84245,0v13.06721a9.83809,9.83809,0,0,0-9.39555,9.82325v30.87926h56.63355V575.14357A9.83809,9.83809,0,0,0,701.33633,565.32032ZM682.4151,539.99384a12.27276,12.27276,0,0,1,12.25846,12.25927v13.04444H670.15665V552.25311A12.27275,12.27275,0,0,1,682.4151,539.99384Z",
                  transform: "translate(-166.73819 -131.47186)",
                  fill: "#fff"
                }),
                createVNode("path", {
                  d: "M687.50571,580.56948a5.09061,5.09061,0,1,0-7.95433,4.207v11.065H685.278v-11.065A5.08421,5.08421,0,0,0,687.50571,580.56948Z",
                  transform: "translate(-166.73819 -131.47186)",
                  fill: "#6c63ff"
                }),
                createVNode("path", {
                  d: "M1032.26181,768.12193h-381a1,1,0,0,1,0-2h381a1,1,0,0,1,0,2Z",
                  transform: "translate(-166.73819 -131.47186)",
                  fill: "#cbcbcb"
                })
              ]))
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="page-content-auth flex flex-col items-center justify-center h-full"${_scopeId}><h2 class="page-title pb-0"${_scopeId}>Reset your password</h2><form class="mt-2 w-full flex flex-col items-start justify-start gap-4"${_scopeId}><div class="form-control w-full"${_scopeId}><label class="label"${_scopeId}><span class="label-text"${_scopeId}>What is your new password?</span></label><input${ssrRenderAttr("value", unref(password))} type="password"${ssrRenderAttr("placeholder", "Your new password...")} class="input input-bordered w-full" required${_scopeId}></div><button class="btn btn-primary self-end 2-1/2" type="submit"${ssrIncludeBooleanAttr(!unref(password) || unref(password).length < 8) ? " disabled" : ""}${_scopeId}> Reset password </button></form></div>`);
          } else {
            return [
              createVNode("div", { class: "page-content-auth flex flex-col items-center justify-center h-full" }, [
                createVNode("h2", { class: "page-title pb-0" }, "Reset your password"),
                createVNode("form", {
                  class: "mt-2 w-full flex flex-col items-start justify-start gap-4",
                  onSubmit: withModifiers(handleSubmit, ["prevent"])
                }, [
                  createVNode("div", { class: "form-control w-full" }, [
                    createVNode("label", { class: "label" }, [
                      createVNode("span", { class: "label-text" }, "What is your new password?")
                    ]),
                    withDirectives(createVNode("input", {
                      ref_key: "passwordRef",
                      ref: passwordRef,
                      "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                      type: "password",
                      placeholder: "Your new password...",
                      class: "input input-bordered w-full",
                      required: ""
                    }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                      [vModelText, unref(password)]
                    ])
                  ]),
                  createVNode("button", {
                    class: "btn btn-primary self-end 2-1/2",
                    type: "submit",
                    disabled: !unref(password) || unref(password).length < 8
                  }, " Reset password ", 8, ["disabled"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/reset-password.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=reset-password-8019d6ed.mjs.map
