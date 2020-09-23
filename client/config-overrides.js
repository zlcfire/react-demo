const rewireLess = require('react-app-rewire-less')
module.exports = function override(config, env) {
    config = rewireLess.withLoaderOptions({
        modifyVars: { "@primary-color": "#9f35ff" }
    })(config, env)
    return config
}