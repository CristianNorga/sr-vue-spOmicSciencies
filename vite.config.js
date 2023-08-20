import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import alias from '@rollup/plugin-alias';

export default defineConfig({
	plugins: [
		vue(),
		alias({
			entries: [
				{ find: '@bts', replacement: './node_modules/bootstrap/dist/css' },
				{ find: '@atoms', replacement: './src/components/atoms' },
				{ find: '@molecules', replacement: './src/components/molecules' },
				{ find: '@organisms', replacement: './src/components/organisms' },
			],
		}),
	],
	build: {
		rollupOptions: {
			output: {
				assetsDir: './',
			},
		},
	},
});
