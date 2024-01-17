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
var tamagui_config_exports = {};
__export(tamagui_config_exports, {
  config: () => config,
  default: () => tamagui_config_default
});
module.exports = __toCommonJS(tamagui_config_exports);
var import_core = require("@tamagui/core"), import_shorthands = require("@tamagui/shorthands"), import_themes = require("./themes");
const config = (0, import_core.createTamagui)({
  defaultFont: "body",
  // animations,
  // shouldAddPrefersColorThemes: true,
  // themeClassNameOnRoot: true,
  shorthands: import_shorthands.shorthands,
  // fonts,
  themes: import_themes.themes
  // tokens,
  // media,
});
var tamagui_config_default = config;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  config
});
//# sourceMappingURL=tamagui.config.js.map
