module.exports = {
    apps: [{
        name: 'my-presets',
        script: './dist/app.js',
        // exec_mode: 'cluster',
        instances: 1,
        autorestart: true,
        watch: true,
        max_memory_restart: '1G',
    }]
};
