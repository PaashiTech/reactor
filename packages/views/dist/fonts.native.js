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
var fonts_exports = {};
__export(fonts_exports, {
  fonts: () => fonts
});
module.exports = __toCommonJS(fonts_exports);
var import_core = require("@tamagui/core");
const fonts = {
  body: (0, import_core.createFont)({
    family: "Helvetica",
    size: {
      2: 12,
      3: 14,
      4: 16,
      5: 18,
      7: 22,
      8: 26,
      9: 32,
      10: 38
    },
    letterSpacing: {},
    weight: {
      4: "400"
    },
    lineHeight: {
      2: 15,
      3: 17,
      4: 20,
      5: 24,
      7: 29,
      8: 33,
      9: 39,
      10: 46
    }
  }),
  heading: (0, import_core.createFont)({
    family: "Helvetica",
    size: {
      2: 16,
      3: 20,
      4: 24,
      5: 28,
      6: 32,
      7: 40,
      8: 48,
      9: 56,
      10: 66
    },
    letterSpacing: {},
    lineHeight: {
      2: 1.5 * 16,
      3: 1.5 * 20,
      4: 1.5 * 24,
      5: 1.5 * 28,
      6: 1.5 * 32,
      7: 1.5 * 40,
      8: 1.5 * 48,
      9: 1.5 * 56,
      10: 1.5 * 66
    },
    transform: {
      5: "uppercase",
      6: "none"
    },
    weight: {
      4: "400",
      5: "700"
    }
  })
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  fonts
});
//# sourceMappingURL=fonts.js.map
