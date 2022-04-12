const esbuild = require("esbuild");

esbuild
  .build({
    entryPoints: [
      "./src/background.ts",
      "./src/content.ts",
      "./src/popup.tsx",
      "./src/injected.ts"
    ],
    bundle: true,
    minify: true,
    sourcemap: process.env.NODE_ENV !== "production",
    watch:
      process.env.NODE_ENV !== "production"
        ? {
            onRebuild(error, result) {
              if (error) console.error("watch build failed", error);
              else console.log("watch build succeeded");
            }
          }
        : false,
    target: ["chrome58", "firefox57"],
    outdir: "./public/build",
    define: {
      "process.env.NODE_ENV": `"${process.env.NODE_ENV}"`
    }
  })
  .catch(() => process.exit(1));
