const path = require('path');
const glob = require('glob');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const cheerio = require('cheerio');

module.exports = (env, options) => ({
    entry: {
        main: './src/main.js',
        interactivity: './src/interactivity.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /^((?!tailwind\.css$).)*\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '/dist/'
                        }
                    },
                    'css-loader'
                ]
            },
            {
                test: /\.tailwind\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '/dist/'
                        }
                    },
                    'css-loader',
                    {
                        loader: 'postcss-loader',                    
                        options: {
                            config: {
                                ctx: {
                                    env: options.mode
                                }
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[name].[ext]',
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: [
                    /node_modules/
                ],
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                use: [
                    'vue-loader',
                    'vue-svg-inline-loader'
                ]
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist', 'web/dist'], {
            root:     __dirname,
            exclude:  [],
            verbose:  true,
            dry:      false
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "name.[chunkhash].css"
        }),
        new PrerenderSPAPlugin({
            // Required - The path to the webpack-outputted app to prerender.
            staticDir: __dirname,
            // Required - Routes to render.
            routes: ['/'],
            renderer:  new Renderer({
                // renderAfterDocumentEvent: 'render-event'
            }),
            indexPath: (options.mode == 'production') ? path.join(__dirname, 'index-template-prod.html') : path.join(__dirname, 'index-template.html'),
            minify: false,
            postProcess (renderedRoute) {
                let contents = `<!-- Global site tag (gtag.js) - Google Analytics -->
                <script async src="https://www.googletagmanager.com/gtag/js?id=UA-141695351-1"></script>
                <script>
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                
                  gtag('config', 'UA-141695351-1');
                </script>
                <script src="https://www.google.com/recaptcha/api.js"></script>
                <script async src='https://tag.simpli.fi/sifitag/72ab0090-6dd9-0137-551b-06659b33d47c'></script>`;
                if (!renderedRoute.html.includes(contents)) {
                    let $ = cheerio.load(renderedRoute.html);
                    $('head').append(contents);
                    renderedRoute.html = $.html();
                }
                let footerContent;
                if (options.mode == 'production') {
                    footerContent = `<script src="https://comfort-systems.iddigital.me/dist/interactivity.js"></script>`;
                } else {
                    footerContent = `<script src="/dist/interactivity.js"></script>`;
                }
                if (!renderedRoute.html.includes(footerContent)) {
                    let $ = cheerio.load(renderedRoute.html);
                    $('body').append(footerContent);
                    renderedRoute.html = $.html();
                }
                if (options.mode == 'production') {
                    renderedRoute.html = renderedRoute.html.replace(/src="\/dist/gi, 'src="https://comfort-systems.iddigital.me/dist');
                    renderedRoute.html = renderedRoute.html.replace(/\/\#schedule-appointment/gi, '/new-HVAC/#schedule-appointment');
                }
                return renderedRoute;
            },
        
        }),
        new VueLoaderPlugin()
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                test: /\.js(\?.*)?$/i,
            }),
        ],
    },
});
