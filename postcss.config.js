const tailwindcss = require('tailwindcss');
const postcssImport = require('postcss-import');
const purgecss = require('@fullhuman/postcss-purgecss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');

module.exports = ({ file, options }) => {
    ignoreFiles = [
        'normalize.tailwind.css'
    ];
    plugins = [
        postcssImport,
        tailwindcss('./tailwind.js'),
    ];
    if (options.env === 'production' && !ignoreFiles.includes(file.basename)) {
        plugins.push(purgecss({
            content: ['./src/components/*.vue', './src/components/*/*.vue'],
            extractors: [
                {
                    extractor: class PurgeTailwindFromVue {
                        static extract(content) {
                            return content.match(/[A-Za-z0-9-_:/]+/g) || [];
                        }
                    },
                    extensions: ['vue']
                }
            ],
            whitelist: ['text-secondary-dark', 'lg:w-full','lg:h-20','border-blue','border',
                        'lg:w-4/5','lg:w-1/5', 'lg:block','lg:pt-0', 'lg:w-auto', 'lg:pl-16',
                        'lg:self-start', 'lg:mb-8','md:mt-0','overflow-hidden']
        }));
    }
    if (options.env === 'production') {
        plugins.push(
            autoprefixer,
            cssnano({
                'preset': 'default'
            }),
        );
    }
    return {
        plugins: plugins
    };
};

