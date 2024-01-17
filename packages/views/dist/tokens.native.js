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
var tokens_exports = {};
__export(tokens_exports, {
  tokens: () => tokens
});
module.exports = __toCommonJS(tokens_exports);
var import_tamagui = require("tamagui");
const size = {
  0: 0,
  0.25: 2,
  0.5: 4,
  0.75: 8,
  1: 20,
  1.5: 24,
  2: 28,
  2.5: 32,
  3: 36,
  3.5: 40,
  4: 44,
  true: 44,
  4.5: 48,
  5: 52,
  5.5: 59,
  6: 64,
  6.5: 69,
  7: 74,
  7.6: 79,
  8: 84,
  8.5: 89,
  9: 94,
  9.5: 99,
  10: 104,
  11: 124,
  12: 144,
  13: 164,
  14: 184,
  15: 204,
  16: 224,
  17: 224,
  18: 244,
  19: 264,
  20: 284
}, spaces = Object.entries(size).map(
  ([k, v]) => [k, Math.max(0, v <= 16 ? Math.round(v * 0.333) : Math.floor(v * 0.7 - 12))]
), spacesNegative = spaces.slice(1).map(([k, v]) => [`-${k}`, -v]), space = {
  ...Object.fromEntries(spaces),
  ...Object.fromEntries(spacesNegative)
}, zIndex = {
  0: 0,
  1: 100,
  2: 200,
  3: 300,
  4: 400,
  5: 500
}, radius = {
  0: 0,
  1: 3,
  2: 5,
  3: 7,
  4: 9,
  true: 9,
  5: 10,
  6: 16,
  7: 19,
  8: 22,
  9: 26,
  10: 34,
  11: 42,
  12: 50
}, color = {
  darkTransparent: "rgba(10,10,10,0)",
  dark1: "#050505",
  dark2: "#151515",
  dark3: "#191919",
  dark4: "#232323",
  dark5: "#282828",
  dark6: "#323232",
  dark7: "#424242",
  dark8: "#494949",
  dark9: "#545454",
  dark10: "#626262",
  dark11: "#a5a5a5",
  dark12: "#fff",
  lightTransparent: "rgba(255,255,255,0)",
  light1: "#fff",
  light2: "#f9f9f9",
  light3: "hsl(0, 0%, 97.3%)",
  light4: "hsl(0, 0%, 95.1%)",
  light5: "hsl(0, 0%, 94.0%)",
  light6: "hsl(0, 0%, 92.0%)",
  light7: "hsl(0, 0%, 89.5%)",
  light8: "hsl(0, 0%, 81.0%)",
  light9: "hsl(0, 0%, 56.1%)",
  light10: "hsl(0, 0%, 50.3%)",
  light11: "hsl(0, 0%, 42.5%)",
  light12: "hsl(0, 0%, 9.0%)"
}, tokens = (0, import_tamagui.createTokens)({
  color,
  space,
  size,
  radius,
  zIndex
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  tokens
});
//# sourceMappingURL=tokens.js.map
