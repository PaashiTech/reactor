module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["@babel/preset-env", { targets: { node: "current" } }],
      ["@babel/preset-typescript"],
      ["babel-preset-expo", 
        // {
        //   loose: true,
        // },
      ],
      "module:metro-react-native-babel-preset",
    ],
    env: {
      test: {
        plugins: [
          ["@babel/plugin-transform-modules-commonjs", { loose: true }],
        ],
      },
    },
    // plugins: [
    //   [
    //     "@babel/plugin-transform-private-methods",
    //     {
    //       loose: true,
    //     },
    //   ],
    // ],
  };
};
