/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  coverageProvider: "v8",
  moduleFileExtensions: [
    "js",
    "mjs",
    "cjs",
    "jsx",
    "ts",
    "tsx",
    "json",
    "node",
  ],
  preset: "jest-expo",
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
  transformIgnorePatterns: [
    // "\\\\node_modules\\\\",
    // "\\.pnp\\.[^\\\\]+$",
    "node_modules/(?!" +
      "((jest-)?react-native|@react-native(-community)?)" +
      "|expo(nent)?" +
      "|@expo(nent)?/.*" +
      "|@expo-google-fonts/.*" +
      "|react-navigation" +
      "|@react-navigation/.*" +
      "|react-native-svg" +
      "/)",
  ],
  testPathIgnorePatterns: ["\\\\node_modules\\\\", "dist/.*"],
};

module.exports = config;
