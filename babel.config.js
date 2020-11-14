module.exports = (api) => {
  api.cache.using(() => process.env.NODE_ENV);
  const isTest = api.env('test');

  const plugins = [
    ['@babel/plugin-transform-react-jsx', { runtime: 'automatic' }],
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import',
  ];

  if (isTest) {
    return {
      presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }],
        '@babel/preset-typescript',
      ],
      plugins,
    };
  }

  return {
    presets: ['@babel/preset-env', '@babel/preset-typescript'],
    plugins,
  };
};
