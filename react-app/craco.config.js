const path = require(`path`);
const CracoLessPlugin = require('craco-less');
module.exports = {
    webpack: {
        alias: {
            pages: path.resolve(__dirname, 'src/pages'),
            routes: path.resolve(__dirname, 'src/routes')
        },
    },
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptons: {
                    lessOptions: {
                        modifyVars: {},
                        javascriptEnable: true
                    }
                }
            }
        }
    ]
};
