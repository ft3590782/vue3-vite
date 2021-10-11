import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import styleImport from "vite-plugin-style-import";
import { minifyHtml, injectHtml } from "vite-plugin-html";
import legacy from "@vitejs/plugin-legacy";

//mode:当前环境变量标识符
export default ({ mode }) => {
  console.log("=====mode=======", mode);

  return defineConfig({
    base: loadEnv(mode, process.cwd()).VITE_APP_PUBLIC_PATH,
    server: {
      port: 8282,
      proxy: {
        // 选项写法
        "/api": {
          target: "http://wthrcdn.etouch.cn",
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, ""),
        },
      },
    },
    plugins: [
      require("autoprefixer"),
      vue(),
      minifyHtml(),
      injectHtml({ injectData: loadEnv(mode, process.cwd()) }), //注入所有变量到index.html
      styleImport({
        libs: [
          {
            libraryName: "vant",
            esModule: true,
            resolveStyle: name => `vant/es/${name}/style`,
          },
        ],
      }),
      legacy({
        targets: ["ie >= 11"],
        additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
      }),
    ],
    resolve: {
      alias: [
        {
          find: "@",
          replacement: "/src",
        },
        {
          find: "@assets",
          replacement: "/src/assets",
        },
        {
          find: "~@",
          replacement: "/src",
        },
      ],
      extensions: [".ts", ".js", ".vue"],
    },
  });
};
