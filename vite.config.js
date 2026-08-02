import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
	plugins: [react()],
	base: '/',
});
git status
git add .
git commit -m "add gzipper for building project"
npm run deploy
git push -u origin main