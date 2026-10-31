import { existsSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();
const names = ["bear-wave.gif", "bear-heart.gif", "bear-flower.gif", "bear-shy.gif", "bear-hug.gif"];
const gifs = Object.fromEntries(
  names.map((name) => [
    name.replace("bear-", "").replace(".gif", ""),
    existsSync(resolve(root, "public/gifs", name)),
  ]),
);
const output = `// Tự động tạo bởi scripts/generate-asset-manifest.mjs. Không cần chỉnh tay.\nexport const assetManifest = ${JSON.stringify({ gifs }, null, 2)} as const;\n`;
writeFileSync(resolve(root, "src/content/asset-manifest.ts"), output, "utf8");
console.log("Teddy GIF manifest ready:", gifs);
