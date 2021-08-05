module.exports = {
    title: 'Hello VuePress',
    description: 'There is a test project by jody',
    base: '',
    configureWebpack: {
        resolve: {
            alias: {
                '@alias': 'path/to/some/dir'
            }
        }
    }
}