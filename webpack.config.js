const path = require('path')
const nodeBuiltins = require('builtin-modules')

const externals = ['aws-sdk'].concat(nodeBuiltins).reduce((externalsMap, moduleName) => {
  externalsMap[moduleName] = moduleName
  return externalsMap
}, {})

const fns = [
  'b2c/create-generic-quote',
]
let entry = {}
fns.forEach((name) => {
  entry[name] = path.resolve(__dirname, `src/${name}/index.ts`)
})

module.exports = {
  entry,
  externals,

  output: {
    filename: '[name]/index.js',
    libraryTarget: 'commonjs',
    path: path.resolve(__dirname, 'dist'),
  },

  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.tsx', '.ts', '.js'],
  },

  target: 'async-node',

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules|__test__/,
      },
    ],
  },

  devtool: 'inline-source-map',
}
