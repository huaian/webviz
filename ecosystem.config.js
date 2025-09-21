module.exports = {
    apps: [{
        name: 'webviz',
        script: 'npm',
        args: 'run serve-static-webviz',
        cwd: './',
        instances: 1,
        watch: false,
        env: {
            NODE_ENV: 'production'
        }
    }]
}