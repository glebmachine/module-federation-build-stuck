const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");

module.exports = {
  output: {
    chunkFilename: '[name]-[contenthash].js',
    uniqueName: "shell"
  },
  optimization: {
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
        shared: {
          "@angular/core": { singleton: true, strictVersion: true },
          "@angular/common": { singleton: true, strictVersion: true },
          "@angular/router": { singleton: true, strictVersion: true },
          "@namespace/auth": { 
            import: path.resolve(__dirname, '../../', 'projects/auth/src/public-api'),
            strictVersion: true, 
           },
        }
    }),
  ],
};
