const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@screens': path.resolve(__dirname, './src/screens'),
      '@navigation': path.resolve(__dirname, './src/navigation'),
      '@assets': path.resolve(__dirname, './src/assets'),
    },
  },
};
