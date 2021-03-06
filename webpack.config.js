module.exports = {
  mode: "production",
  entry: "./src/index.ts",
  output: {
    filename: "./index.js",
    libraryTarget: "umd",
    library: "dashboardFlexible",
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
      rules: [
          { test: /\.tsx?$/, loader: 'ts-loader' }
      ]
  }
};
