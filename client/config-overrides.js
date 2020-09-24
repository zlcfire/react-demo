const path = require('path')
const rewireLess = require('react-app-rewire-less')
const { injectBabelPlugin } = require('react-app-rewired')
function resolve(dir) {
    return path.join(__dirname, '.', dir)
}

module.exports = function override(config, env) {
    //配置项目less
    config = rewireLess.withLoaderOptions({
        modifyVars: { "@primary-color": "#9f35ff" }
    })(config, env)
    //配置项目使用@符号引入文件
    config.resolve.alias = {
        '@': resolve('src')
    }

    //启用ES7的修改器语法（babel7）
    config = injectBabelPlugin(['@babel/plugin-proposal-decorators', { 'legacy': true }], config)
    return config
}