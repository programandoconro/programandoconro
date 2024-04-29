/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_VERCEL_ANALYTICS_ID: string;
  readonly PUBLIC_ASTRO: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
