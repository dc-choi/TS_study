/**
 * Webpack configuration
 * 
 * 실제 배포하는 경우에 Webpack을 사용해서 경로 문제를 해결할 수 있음.
 * 
 * 현재 시스템에서는 tsc-alias를 사용해서 webpack을 사용하지 않음
 */
// const path = require('path');

// module.exports = {
//     entry: './dist/src/index.js',
//     output: {
//         path: path.resolve(__dirname, 'out'),
//         fliename: "bundle.js"
//     },
//     mode: 'development',
//     resolve: {
//         extensions: ['.js'],
//         modules: [path.join(__dirname, 'dist'), 'node_modules'],
//         alias: {
//             "@": path.resolve(__dirname, 'dist/src')
//         }
//     },
//     module: { // webpack을 사용하는 경우 tsc없이 바로 컴파일 가능
//         rules: [
//             {
//                 test: /\.ts$/,
//                 exclude: /node_modules/,
//                 loader: 'ts-loader'
//             }
//         ]
//     }
// };
