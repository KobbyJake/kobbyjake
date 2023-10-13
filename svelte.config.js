import adapter from '@sveltejs/adapter-static';Cannot find module '@sveltejs/adapter-static' or its corresponding type declarations.2307Cannot find module '@sveltejs/adapter-static' or its corresponding type declarations.
/** @type {import('@sveltejs/kit').Config} */const config = {	kit: {		adapter: adapter()	}};
config.paths = { base: process.argv.includes('dev') ? '' : process.env.BASE_PATH }
export default config;