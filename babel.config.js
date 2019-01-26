module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          firefox: 60
        }
      }
    ]
  ],
  plugins: [
    "@babel/plugin-transform-react-jsx",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-syntax-dynamic-import"
  ]
};
