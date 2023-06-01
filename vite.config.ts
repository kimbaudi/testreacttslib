import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [
    dts(),
    react({
      jsxImportSource: "@emotion/react",
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "MyLib",
      fileName: "my-lib",
    },
    rollupOptions: {
      external: ["@emotion/react", "@emotion/styled", "react", "react-dom"],
      output: {
        globals: {
          "@emotion/react": "emotionElement",
          "@emotion/styled": "newStyled",
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
