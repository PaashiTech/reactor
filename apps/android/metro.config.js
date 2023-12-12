const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const path = require("path");
/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */

// Find the workspace root
const workspaceRoot = path.resolve(__dirname, "../..");

// 1. Watch all files within the monorepo
// 2. Let Metro know where to resolve packages, and in what order
const config = {
    resolver : {
        nodeModulesPath: [
            path.resolve(__dirname, "node_modules"),
            path.resolve(workspaceRoot, "node_modules"),
        ]
    }
};
// 3. Add whole workspace to watch folders 
config.watchFolders = [workspaceRoot];

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
