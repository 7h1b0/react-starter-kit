module.exports = (api) => {
  api.cache.using(() => process.env.NODE_ENV);
  const isTest = api.env('test');

  if (isTest) {
    return {
      presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }],
        '@babel/preset-typescript',
      ],
      plugins: [
        '@babel/plugin-transform-react-jsx',
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-syntax-dynamic-import',
      ],
    };
  }

  return {
    presets: ['@babel/preset-env', '@babel/preset-typescript'],
    plugins: [
      '@babel/plugin-transform-react-jsx',
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-syntax-dynamic-import',
    ],
  };
};
