import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-container" }, _attrs))}><h2 class="page-title">Users</h2><div class="overflow-x-auto w-full"><table class="table table-compact w-full bg-base-200"><thead><tr><th>#ID</th><th>Name</th><th>Email</th><th>Role</th><th>Status</th><th></th><th></th><th></th></tr></thead><tbody><tr class=""><th>1</th><td class="whitespace-nowrap">Pato Gordo</td><td>conversecomicaro@gmail.com</td><td>Admin</td><td>Active</td><td><button class="btn btn-xs btn-info whitespace-nowrap"> Change Status </button></td><td><button class="btn btn-xs btn-warning whitespace-nowrap"> Change Role </button></td><td><button class="btn btn-xs btn-error whitespace-nowrap"> Delete </button></td></tr></tbody></table></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/users/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-7b8af671.mjs.map
