import path from "path";
import webpack from "webpack";
import HtmlWebPackPlugin from "html-webpack-plugin";
import FaviconsWebpackPlugin from "favicons-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { fileURLToPath } from "url";
import devServer from "./devServer.mjs";
import Package from "./package.json" assert { type: "json" };;

const isProd = process.argv[process.argv.indexOf("--mode") + 1] === "production";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const NAME = "Container Application";
const SHORT_NAME = "Container";
const LOGO = "./src/images/logo.png";

console.info(`Mode: ${((isProd) ? "Production" : "Development")}`);

const build = {
  entry: "./src/index.tsx",
  context: __dirname,
  target: "web",
  output: {
    clean: true,
    filename: "index.js",
    path: path.resolve(__dirname, "dist")
  },
  resolve: {
    extensions: [ ".tsx", ".ts", ".js", ".jsx" ],
    fallback: {
      "react/jsx-dev-runtime": "react/jsx-dev-runtime.js",
      "react/jsx-runtime": "react/jsx-runtime.js"
    }
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader"
        }
      },
      {
        test: /\.(jp(e*)g|png|svg|gif)$/,
        type: "asset/resource",
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"]
      },
      {
        test: /\.(eot|ttf|otf|woff|woff2)$/,
        type: "asset/resource",
        dependency: { not: ["url"] }
      }, 
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader", options: {
              sourceMap: true
            }
          },
          {
            loader: "sass-loader", options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  stats: "errors-only",
  devtool: isProd ? false : "cheap-module-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist")
    },
    static: { 
      directory: path.resolve(__dirname, "content"), 
      publicPath: "/content"
    },
    compress: true,
    port: 8080,
    onAfterSetupMiddleware: devServer
  },
  plugins: [
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(Package.version),
      APP_NAME: JSON.stringify("content"),
      APP_TITLE: JSON.stringify(NAME),
      DESCRIPTION: JSON.stringify(Package.description),
      AUTHOR: JSON.stringify(Package.author),
      WEBSITE: JSON.stringify(Package.homepage),
      APP_SHORT_NAME: JSON.stringify(SHORT_NAME),
      GA: isProd ? true: false,
      IS_PROD: isProd
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      favicon: ""
    }),
    new FaviconsWebpackPlugin({
      logo: LOGO,
      prefix: "images/",
      inject: true,
      cache: true,
      favicons: {
      icons: {
            // Platform Options:
            // - offset - offset in percentage
            // - background:
            //   * false - use default
            //   * true - force use default, e.g. set background for Android icons
            //   * color - set background for the specified icons
            //   * mask - apply mask in order to create circle icon (applied by default for firefox). `boolean`
            //   * overlayGlow - apply glow effect after mask has been applied (applied by default for firefox). `boolean`
            //   * overlayShadow - apply drop shadow after mask has been applied .`boolean`
            //
            android: false,              // Create Android homescreen icon. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
            appleIcon: false,            // Create Apple touch icons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
            appleStartup: false,         // Create Apple startup images. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
            coast: false,                // Create Opera Coast icon. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
            favicons: true,             // Create regular favicons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
            firefox: false,              // Create Firefox OS icons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
            windows: false,              // Create Windows 8 tile icons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
            yandex: false                // Create Yandex browser icon. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
        }
      }
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};

export default build;