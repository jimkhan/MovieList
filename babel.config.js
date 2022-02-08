module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@components': './src/components',
          '@common': './src/components/common',
          '@screens': './src/screens',
          '@img': './src/img',
          '@config': './src/config',
          '@navigations': './src/img',
        },
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.json', '.svg', '.jpg'],
      },
    ],
  ],
};
