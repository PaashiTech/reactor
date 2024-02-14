module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["@babel/preset-env", { targets: { node: "current" } }],
      "@babel/preset-typescript",
      "babel-preset-expo",
      "module:metro-react-native-babel-preset",
    ],
    env: {
      test: {
        plugins: [
          ["@babel/plugin-transform-modules-commonjs", { loose: true }],
        ],
      },
      production: {
        plugins: ["react-native-paper/babel"],
      },
    },
  };
};
