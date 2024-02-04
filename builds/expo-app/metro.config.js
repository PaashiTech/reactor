const path = require("path");
const { getDefaultConfig } = require("expo/metro-config");

/** Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */

// Find the workspace root
const workspaceRoot = path.resolve(__dirname, "../..");

const defaultConfig = getDefaultConfig(__dirname);

// Combine configuration for monorepo setup and SVG transformer
module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await defaultConfig;

  return {
    // Watch all files within the monorepo
    watchFolders: [workspaceRoot],

    // Let Metro know where to resolve packages, and in order
    resolver: {
      nodeModulesPath: [
        path.resolve(__dirname, "node_modules"),
        path.resolve(workspaceRoot, "node_modules"),
      ],
      sourceExts: [...sourceExts, "mjs", "svg"],
      assetExts: assetExts.filter((ext) => ext !== "svg"),
    },

    // SVG transformer configuration
    transformer: {
      babelTransformerPath: require.resolve("react-native-svg-transformer"),
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: true,
        },
      }),
    },
  };
})();
