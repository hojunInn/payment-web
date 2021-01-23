module.exports = function(api) {
  api.cache(true);
  return {
    
      "presets": ["@babel/preset-react", "@babel/preset-env"],
      "plugins": ["@babel/plugin-syntax-jsx"]
    
  //   plugins: [
  //     [
  //       "module-resolver",
  //       {
  //         root: ["."],
  //         extensions: ['.ios.ts', '.android.ts', '.ts', '.ios.tsx', '.android.tsx', '.tsx', '.jsx', '.js', '.json'],
  //         alias: {
  //           '~': './src',
  //           '@utils': './src/utils',
  //           '@lib': './src/lib',
  //           '@assets': './assets',
  //           '@screens': './src/screens',
  //           '@components': './src/components',
  //           '@config': './config'
  //         },
  //       }
  //     ]
  //   ]
  // };
};
