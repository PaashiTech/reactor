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
var themes_exports = {};
__export(themes_exports, {
  themes: () => themes
});
module.exports = __toCommonJS(themes_exports);
var import_create_theme = require("@tamagui/create-theme"), import_tokens = require("./tokens");
const themes = (() => {
  const palettes = {
    light: [
      import_tokens.tokens.color.darkTransparent,
      import_tokens.tokens.color.light1,
      import_tokens.tokens.color.light2,
      import_tokens.tokens.color.light3,
      import_tokens.tokens.color.light4,
      import_tokens.tokens.color.light5,
      import_tokens.tokens.color.light6,
      import_tokens.tokens.color.light7,
      import_tokens.tokens.color.light8,
      import_tokens.tokens.color.light9,
      import_tokens.tokens.color.light10,
      import_tokens.tokens.color.light11,
      import_tokens.tokens.color.light12,
      import_tokens.tokens.color.lightTransparent
    ],
    dark: [
      import_tokens.tokens.color.lightTransparent,
      import_tokens.tokens.color.dark1,
      import_tokens.tokens.color.dark2,
      import_tokens.tokens.color.dark3,
      import_tokens.tokens.color.dark4,
      import_tokens.tokens.color.dark5,
      import_tokens.tokens.color.dark6,
      import_tokens.tokens.color.dark7,
      import_tokens.tokens.color.dark8,
      import_tokens.tokens.color.dark9,
      import_tokens.tokens.color.dark10,
      import_tokens.tokens.color.dark11,
      import_tokens.tokens.color.dark12,
      import_tokens.tokens.color.darkTransparent
    ]
  }, genericsTemplate = {
    background: 2,
    backgroundHover: 3,
    backgroundPress: 4,
    backgroundFocus: 2,
    backgroundStrong: 1,
    backgroundTransparent: 0,
    color: -1,
    colorHover: -2,
    colorPress: -1,
    colorFocus: -2,
    colorTransparent: -0,
    borderColor: 4,
    borderColorHover: 5,
    borderColorPress: 3,
    borderColorFocus: 4,
    placeholderColor: -4
  }, colorStepsTemplate = {
    color1: 1,
    color2: 2,
    color3: 3,
    color4: 4,
    color5: 5,
    color6: 6,
    color7: 7,
    color8: 8,
    color9: 9,
    color10: 10,
    color11: 11,
    color12: 12
  }, shadowsTemplate = {
    shadowColor: 1,
    shadowColorHover: 1,
    shadowColorPress: 2,
    shadowColorFocus: 2
  }, template = {
    ...colorStepsTemplate,
    ...shadowsTemplate,
    ...genericsTemplate
  }, lightShadowColor = "rgba(0,0,0,0.02)", lightShadowColorStrong = "rgba(0,0,0,0.066)", darkShadowColor = "rgba(0,0,0,0.2)", darkShadowColorStrong = "rgba(0,0,0,0.3)", lightShadows = {
    shadowColor: lightShadowColorStrong,
    shadowColorHover: lightShadowColorStrong,
    shadowColorPress: lightShadowColor,
    shadowColorFocus: lightShadowColor
  }, darkShadows = {
    shadowColor: darkShadowColorStrong,
    shadowColorHover: darkShadowColorStrong,
    shadowColorPress: darkShadowColor,
    shadowColorFocus: darkShadowColor
  }, light = (0, import_create_theme.createTheme)(palettes.light, template), dark = (0, import_create_theme.createTheme)(palettes.dark, template), masks = {
    weaker: (0, import_create_theme.createWeakenMask)(),
    stronger: (0, import_create_theme.createStrengthenMask)()
  };
  function getComponentThemes(theme, inverse, isLight) {
    const componentMaskOptions = {
      // basically we only want the generics, avoids extra weight
      skip: {
        ...colorStepsTemplate,
        ...shadowsTemplate
      },
      // avoids the transparent ends
      max: palettes.light.length - 2,
      min: 1
    }, weaker1 = (0, import_create_theme.applyMask)(theme, masks.weaker, componentMaskOptions), base = (0, import_create_theme.applyMask)(weaker1, masks.stronger, componentMaskOptions), weaker2 = (0, import_create_theme.applyMask)(weaker1, masks.weaker, componentMaskOptions), stronger1 = (0, import_create_theme.applyMask)(theme, masks.stronger, componentMaskOptions), inverse1 = (0, import_create_theme.applyMask)(inverse, masks.weaker, componentMaskOptions), inverse2 = (0, import_create_theme.applyMask)(inverse1, masks.weaker, componentMaskOptions), overlayTheme = {
      background: isLight ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0.9)"
    };
    return {
      ListItem: isLight ? stronger1 : base,
      Card: weaker1,
      Button: weaker2,
      Checkbox: weaker2,
      DrawerFrame: weaker1,
      SliderTrack: stronger1,
      SliderTrackActive: weaker2,
      SliderThumb: inverse1,
      Progress: weaker1,
      ProgressIndicator: inverse,
      Switch: weaker2,
      SwitchThumb: inverse2,
      TooltipArrow: weaker1,
      TooltipContent: weaker2,
      Input: stronger1,
      TextArea: stronger1,
      Tooltip: inverse1,
      SheetOverlay: overlayTheme,
      DialogOverlay: overlayTheme,
      ModalOverlay: overlayTheme
    };
  }
  const baseThemes = {
    light,
    dark
  };
  return (0, import_create_theme.addChildren)(baseThemes, (name, theme) => {
    const isLight = name === "light", inverseTheme = baseThemes[isLight ? "dark" : "light"];
    return getComponentThemes(theme, inverseTheme, isLight);
  });
})();
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  themes
});
//# sourceMappingURL=themes.js.map
