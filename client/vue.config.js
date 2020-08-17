const path = require("path");

module.exports = {
  //create dist folder
  //outputDir: path.resolve(__dirname, "../public"),
  devServer: {
    proxy: {
      "/api/items": {
        target: "http://localhost:5000",
      },
    },
  },
};

// module.exports = {
//   devServer: {
//     proxy: "https://localhost:5000",
//   },
// };
