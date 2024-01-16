const {getDefaultConfig} = require('expo/metro-config');
const path = require("path");

/** Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
// Find the workspace root
const workspaceRoot = path.resolve(__dirname, "../..");
const defaultConfig = getDefaultConfig(__dirname);
// 1. Watch all files within the monorepo
// 2. Let Metro know where to resolve packages, and in what order
defaultConfig.resolver.nodeModulesPath =  [
            path.resolve(__dirname, "node_modules"),
            path.resolve(workspaceRoot, "node_modules"),
        ],
        // extraNodeModules: [
        //     path.resolve(__dirname, "node_modules"),
        //     // path.resolve(__dirname, "node_modules"),
        // ]
// 3. Add whole workspace to watch folders 
defaultConfig.watchFolders = [workspaceRoot];
defaultConfig.resolver.sourceExts.push('mjs');
//const config = mergeConfig(defaultConfig, extraConfig);

module.exports = defaultConfig;

