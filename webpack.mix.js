
const mix = require('laravel-mix');

mix.autoload({})
.react('src/js/metatags.js', 'dist/js/metatags.js')
.sass('src/scss/metatags.scss', 'dist/css/metatags.css')
.webpackConfig({
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    }
});