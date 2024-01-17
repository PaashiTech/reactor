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
var config_exports = {};
__export(config_exports, {
  config: () => config,
  default: () => config_default
});
module.exports = __toCommonJS(config_exports);
var import_unmaze_views = require("unmaze-views");
const config = import_unmaze_views.config;
var config_default = config;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  config
});
//# sourceMappingURL=config.js.map
