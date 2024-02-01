import { defineConfig, sharpImageService } from "astro/config";
import mdx from "@astrojs/mdx";
import { astroImageTools } from "astro-imagetools";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  experimental: {
    assets: true
  },
  image: {
    service: sharpImageService()
  },
  integrations: [mdx(), react()],
  integrations: [astroImageTools]
});