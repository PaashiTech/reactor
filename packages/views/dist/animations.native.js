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
var animations_exports = {};
__export(animations_exports, {
  animations: () => animations
});
module.exports = __toCommonJS(animations_exports);
var import_animations_css = require("@tamagui/animations-css");
const animations = (0, import_animations_css.createAnimations)({
  lazy: "ease-in 500ms",
  quick: "ease-in 100ms"
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  animations
});
//# sourceMappingURL=animations.js.map
