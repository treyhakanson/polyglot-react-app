module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      App: 'src/components/App.js',
      configureStore: 'src/redux/store/configureStore.js',
      reducers: 'src/redux/reducers/index.js',
      actions: 'src/redux/actions/index.js',
      LocalStore: 'src/api/index.js',
      routes: 'src/routes.js',
      images: 'src/assets/images',
      stylesheet: 'src/styles/stylesheet.scss'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules)/
      },
      {
        loader: 'url',
        test: /\.(png|jpg)$/,
        exclude: /(node_modules)/
      }
    ]
  },
  devtool: 'eval-source-map'
};
