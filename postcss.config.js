module.exports = {
  plugins: {
    "postcss-px-to-viewport": {
      unitToConvert: "px",
      viewportWidth: 750,
      unitPrecision: 5,
      propList: ["*"],
      viewportUnit: "vw",
      fontViewportUnit: "vw",
      selectorBlackList: [],
      minPixelValue: 1,
      mediaQuery: false,
      replace: true,
      exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
      include: undefined,
      landscape: false,
      landscapeUnit: "vw",
      landscapeWidth: 568,
    },
  },
};
