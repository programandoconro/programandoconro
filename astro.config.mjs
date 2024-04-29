import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
  integrations: [mdx()]
});