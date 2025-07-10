import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [pluginReact()],
  tools: {
    postcss: (_opt, { addPlugins }) => {
      addPlugins("@tailwindcss/postcss");
    },
  },
  html: {
    title: "BeritaKini",
    favicon: path.resolve(__dirname, "./src/assets/vector.png"),
  },
});
