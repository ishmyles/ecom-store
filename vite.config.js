import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    /* TODO: Set up .eslintrc.cjs to recognise globals*/
    //globals: true,
    environment: "jsdom",
    setupFiles: "./tests/setup.js",
  },
});
