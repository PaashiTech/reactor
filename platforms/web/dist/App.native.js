var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);
var App_exports = {};
__export(App_exports, {
  App: () => App,
  default: () => App_default
});
module.exports = __toCommonJS(App_exports);
var import_unmaze_views = require("unmaze-views"), import_jsx_runtime = require("react/jsx-runtime");
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_unmaze_views.TamaguiProvider, { config: import_unmaze_views.config, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_unmaze_views.Text, { children: "Some text is here" }) });
}
var App_default = App;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  App
});
//# sourceMappingURL=App.js.map
