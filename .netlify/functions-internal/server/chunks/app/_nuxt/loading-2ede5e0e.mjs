import { useSSRContext, defineComponent, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import { b as useLoading } from '../server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "loading",
  __ssrInlineRender: true,
  setup(__props) {
    const loading = useLoading();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: ["overlay", unref(loading).isOpen ? "opened" : "closed"]
      }, _attrs))} data-v-5b822f80><div class="${ssrRenderClass([unref(loading).isOpen ? "opened" : "closed", "content-overlay"])}" data-v-5b822f80><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="${ssrRenderStyle({ "shape-rendering": "auto" })}" width="100px" height="100px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" data-v-5b822f80><circle cx="50" cy="50" fill="none" stroke="#ffffff" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138" data-v-5b822f80><animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1" data-v-5b822f80></animateTransform></circle></svg>`);
      if (unref(loading).hint) {
        _push(`<h2 class="text-2xl text-white" data-v-5b822f80>${ssrInterpolate(unref(loading).hint)}</h2>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/loading.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5b822f80"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=loading-2ede5e0e.mjs.map
