/* eslint-disable linebreak-style */
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
    plugins: ["react-native-reanimated/plugin"],
  };
};
