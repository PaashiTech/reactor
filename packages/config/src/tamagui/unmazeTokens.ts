import { createTokens } from "tamagui";
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
