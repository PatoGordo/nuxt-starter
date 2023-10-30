import { defineComponent, useSSRContext } from 'vue';
import { ssrRenderSlot } from 'vue/server-renderer';
import { a as useAuthStore } from '../server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "role-guard",
  __ssrInlineRender: true,
  props: {
    allowedRoles: {},
    forbiddenRole: {}
  },
  setup(__props) {
    const authStore = useAuthStore();
    const props = __props;
    const userCanSee = () => {
      var _a, _b, _c, _d, _e;
      if (!((_a = authStore.user) == null ? void 0 : _a.role)) {
        return;
      }
      const roleIsAllowed = ((_c = props == null ? void 0 : props.allowedRoles) == null ? void 0 : _c.includes((_b = authStore == null ? void 0 : authStore.user) == null ? void 0 : _b.role)) || false;
      const roleIsForbidden = ((_e = props == null ? void 0 : props.forbiddenRole) == null ? void 0 : _e.includes((_d = authStore == null ? void 0 : authStore.user) == null ? void 0 : _d.role)) || false;
      if (roleIsAllowed && !roleIsForbidden) {
        return true;
      }
      return false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      if (userCanSee()) {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/role-guard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=role-guard-b84a6c1a.mjs.map
