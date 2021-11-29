module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  chainWebpack: config => {
    config.plugin('html') 
      .tap(args => {
        args[0].title = "台新銀行──目視管理"
        return args;
      })
  },
  publicPath: './',
};
