import adapter from '@sveltejs/adapter-static'; // Assuming static deployment
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html'
		}),
		paths: {
			// Do NOT include a trailing slash, and do NOT use a full URL.
			// If your repo is "https://github.com", use '/portfolio'
			base: process.env.NODE_ENV === 'GDD' ? '/GDD' : '',
		}
	}
};

export default config;
