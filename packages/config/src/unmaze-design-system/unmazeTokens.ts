import figmaTokens from "./figmaTokens.json";

const SPACING_INDEX = 0;
const BASE_COLOR_PALETTE_INDEX = 1;
const SEMANTIC_COLOR_PALETTE_INDEX = 2;

const getSpaceTokens = (tokens: typeof figmaTokens) => {
  const spaceEntries =
    tokens[SPACING_INDEX]["Spacing Universal"]?.modes["Mode 1"];
  const result: { [key: string]: number } = {};
  for (const key in spaceEntries) {
    result[key] = spaceEntries[key]["$value"];
  }
  result["true"] = result["1"];
  return result;
};

export const space = getSpaceTokens(figmaTokens);

const getBaseColorTokens = (tokens: typeof figmaTokens) => {
  const colorEntries =
    tokens[BASE_COLOR_PALETTE_INDEX]["Base Palette"]?.modes["Mode 1"];
  const result: { [key: string]: string } = {};
  for (const colorKey in colorEntries) {
    const colorValues = colorEntries[colorKey];

    if (colorKey !== "System") {
      // Base palette
      for (const valueKey in colorValues) {
        result[`${colorKey.replace(" ", "").toLowerCase()}/${valueKey}`] =
          colorValues[valueKey]["$value"];
      }
    } else {
      // System palette
    }
  }
  return result;
};

export const baseColor = getBaseColorTokens(figmaTokens);

const _extractBaseColorToken = (semanticTokenString: string): string => {
  const sts = semanticTokenString;

  // sanity check
  if (sts[0] === "{" && sts[sts.length - 1] === "}") {
    const stsTokens = sts.substring(1, sts.length - 1).split(".");
    if (stsTokens[0] !== "System" && stsTokens.length == 2) {
      // Base palette
      const [colorName, colorValue] = stsTokens;
      return `${colorName.replace(" ", "").toLowerCase()}/${colorValue}`;
    } else {
      // System palette
      return "grey/10";
    }
  }

  return "grey/10";
};

const getSemanticColorTokens = (tokens: typeof figmaTokens) => {
  const semanticLightColorEntries =
    tokens[SEMANTIC_COLOR_PALETTE_INDEX]["Semantic Palette"]?.modes[
      "Light Mode"
    ];
  const semanticDarkColorEntries =
    tokens[SEMANTIC_COLOR_PALETTE_INDEX]["Semantic Palette"]?.modes[
      "Dark Mode"
    ];
  const lightResult: { [key: string]: string } = {};
  const darkResult: { [key: string]: string } = {};

  for (const entryKey in semanticLightColorEntries) {
    ///// (v.1.1.2) /////
    // Entry keys can be one of the following:
    // 1. stroke
    // 2. icon
    // 3. text
    // 4. buttonIcon
    // 5. buttonBackground
    // 6. background
    const entryValue = semanticLightColorEntries[entryKey];
    for (const internalKey in entryValue) {
      // Internal key can be one of the following:
      // for entryKeys "stroke", "icon" and "text" -
      //    1. on-primary (** contains multiple values **)
      //    2. on-secondary (** contains multiple values **)
      //    3. {entryKey}_error
      //    4. {entryKey}_success
      //    5. {entryKey}_warning
      //    6. {entryKey}_info
      // for entryKeys "buttonIcon", "buttonBackground", "background"
      //    1. {entryKey}_error
      //    2. {entryKey}_warning
      //    3. {entryKey}_success
      //    4. {entryKey}_info
      //    5. {entryKey}_filled
      //    6. {entryKey}_focussed
      //    7. {entryKey}_hover
      //    8. {entryKey}_disabled
      //    9. {entryKey}_secondary
      //    10. {entryKey}_primary

      if (internalKey === "on-primary" || internalKey === "on-secondary") {
        const internalValue = entryValue[internalKey];

        for (const internalInternalKey in internalValue) {
          // Internal internal key can be one of the following:
          //    1. {entryKey}_disabledalt
          //    1. {entryKey}_disabled
          //    1. {entryKey}_accentalt
          //    1. {entryKey}_accent
          //    1. {entryKey}_subdued
          //    1. {entryKey}_base

          const internalInternalValue = internalValue[internalInternalKey];
          lightResult[`${entryKey}/${internalKey}/${internalInternalKey}`] =
            baseColor[_extractBaseColorToken(internalInternalValue["$value"])];
        }
      } else {
        const internalValue = entryValue[internalKey];
        lightResult[`${entryKey}/${internalKey}`] =
          baseColor[_extractBaseColorToken(internalValue["$value"])];
      }
    }
  }

  return [lightResult, darkResult];
};

export const semanticColor = getSemanticColorTokens(figmaTokens);
