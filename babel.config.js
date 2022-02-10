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
          '@store': './src/store/GlobalStore.tsx',
          '@dataType': './src/data',
          '@navigation': './src/navigation',
          types: 'types',
        },
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.json', '.svg', '.jpg'],
      },
    ],
  ],
};
