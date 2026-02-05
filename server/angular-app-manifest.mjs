
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/anjani-portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/anjani-portfolio"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 4920, hash: '2d107471eb3c95f848ff1e51ec8a7007c93fc87acfb9a4646bf9a9764590769a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 5433, hash: '5c6f626839ea1992f2db439f5a408c04e92928bef7895595e80fda2df1105303', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 24114, hash: '19c75b13ab3401c7c62a324ef35d8777544bda9e26ec581fae53f12dab611ea3', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
