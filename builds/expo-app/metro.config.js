/* eslint-disable linebreak-style */

// Learn more https://docs.expo.io/guides/customizing-metro
const path = require('path');
const { getDefaultConfig } = require('expo/metro-config');

/** Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */

// Combine configuration for monorepo setup and SVG transformer
module.exports = (async () => {
  // Find the workspace root
  const workspaceRoot = path.resolve(__dirname, '../..');

  const defaultConfig = await getDefaultConfig(__dirname);

  const {
    resolver,
    resolver: { sourceExts, assetExts },
    transformer,
    watchFolders,
  } = await defaultConfig;

  const customAssetExts = assetExts.filter((ext) => ext !== 'svg');

  // Watch all files within the monorepo
  defaultConfig.watchFolders = [...watchFolders, workspaceRoot];

  // Let Metro know where to resolve packages, and in order
  defaultConfig.resolver = {
    ...resolver,
    nodeModulesPath: [
      path.resolve(__dirname, 'node_modules'),
      path.resolve(workspaceRoot, 'node_modules'),
    ],
    sourceExts: [...sourceExts, 'mjs', 'svg', 'otf', 'ttf'],
    assetExts: [...customAssetExts],
  };

  // SVG transformer configuration
  defaultConfig.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  };

  return defaultConfig;
})();
