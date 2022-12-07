module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-typescript",
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
  plugins: [
    [
      "module-resolver",
      {
        root: ["."],
        extensions: [".ts", ".tsx", ".json"],
        alias: {
          "@": "./",
          "@utils": "./src/utils/",
          "@styles": "./src/styles/",
          "@providers": "./src/providers/",
          "@components": "./src/components/",
        },
      },
    ],
  ],
};
