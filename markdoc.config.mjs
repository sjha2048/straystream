import { defineMarkdocConfig, component, nodes } from '@astrojs/markdoc/config';
import shiki from '@astrojs/markdoc/shiki';

export default defineMarkdocConfig({
  extends: [
    shiki({
      theme: 'github-dark',
      wrap: true,
    }),
  ],
});
