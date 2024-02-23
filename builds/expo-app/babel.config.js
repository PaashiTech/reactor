module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      [
        "babel-preset-expo",
        // {
        //   loose: true,
        // },
      ],
    ],
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
