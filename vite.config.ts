import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import checker from 'vite-plugin-checker'

export default defineConfig({
	base: '/ToDo',
	plugins: [
		react(),
		checker({
			typescript: true
		})
	]
})
