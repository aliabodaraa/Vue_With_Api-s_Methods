module.exports = {
    devServer: {
        proxy: {
            '^/api': {
                target: 'http://localhost:5500',
                changeOrigin: true,
                logLevel: 'debug',
                pathRewrite: { '^/api': '/' },
            }
        }
    }
}