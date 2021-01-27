module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  plugins: [
    '@snowpack/plugin-svelte',
    '@snowpack/plugin-postcss',
    '@snowpack/plugin-dotenv',
    ['@snowpack/plugin-run-script', {
      cmd: 'svelte-check --output human',
      watch: '$1 --watch', output: 'stream'
		}],
		['snowpack-plugin-rollup-bundle', {
      emitHtmlFiles: true,
      entrypoints: 'build/_dist_/index.js'
    }]
  ],
  devOptions: {
    // open: "none",
  },
  alias: {
    '@/': './src'
  },
};
