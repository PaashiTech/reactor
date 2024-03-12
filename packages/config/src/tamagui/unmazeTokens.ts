import figmaTokens from "./figmaTokens.json";

const getSpaceTokens = (tokens: typeof figmaTokens) => {
  const spaceEntries = tokens[0]["Spacing Universal"]?.modes["Mode 1"];
  const result: { [key: string]: number } = {};
  for (const key in spaceEntries) {
    result[key] = spaceEntries[key]["$value"];
  }
  result["true"] = result["1"];
  return result;
};

export const space = getSpaceTokens(figmaTokens);

const getColorTokens = (tokens: typeof figmaTokens) => {
  const colorEntries = tokens[1]["Base Palette"]?.modes["Mode 1"];
  const result: { [key: string]: number } = {};
  for (const colorKey in colorEntries) {
    const values = colorEntries[colorKey];
    for (const valueKey in values) {
      result[`${colorKey.replace(" ", "").toLowerCase()}-${valueKey}`] =
        values[valueKey]["$value"];
    }
  }
  return result;
};

export const color = getColorTokens(figmaTokens);
