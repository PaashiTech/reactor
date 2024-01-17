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
var media_exports = {};
__export(media_exports, {
  media: () => media
});
module.exports = __toCommonJS(media_exports);
var import_react_native_media_driver = require("@tamagui/react-native-media-driver");
const media = (0, import_react_native_media_driver.createMedia)({
  xs: { maxWidth: 660 },
  sm: { maxWidth: 800 },
  md: { maxWidth: 1020 },
  lg: { maxWidth: 1280 },
  xl: { maxWidth: 1420 },
  xxl: { maxWidth: 1600 },
  gtXs: { minWidth: 661 },
  gtSm: { minWidth: 801 },
  gtMd: { minWidth: 1021 },
  gtLg: { minWidth: 1281 },
  short: { maxHeight: 820 },
  tall: { minHeight: 820 },
  hoverNone: { hover: "none" },
  pointerCoarse: { pointer: "coarse" }
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  media
});
//# sourceMappingURL=media.js.map
