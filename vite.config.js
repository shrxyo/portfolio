// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import tailwindcss  from "@tailwindcss/vite";
// // import path from "path";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(), tailwindcss()],
//   // resolve: {
//   //   alias: {
//   //     "@": Path2D.resolve(__dirname, "./src"),
//   //   },
//   // },
// });


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
});
