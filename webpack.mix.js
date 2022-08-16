const mix = require('laravel-mix');

mix.js('./src/main.js', 'dist/js').vue()
    //.sass('resources/scss/app.scss', 'public/css')
    .postCss("./src/css/tailwind.css", "dist/css", [
        require("tailwindcss")
    ])
    .setPublicPath('public')
    //.copy(['resources/assets/images'],'public/assets')
    //.sourceMaps();
