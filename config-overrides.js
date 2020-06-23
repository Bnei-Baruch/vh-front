/* Doc : https://material-ui.com/guides/minimizing-bundle-size/  */
/* config-overrides.js */

const { useBabelRc, override } = require('customize-cra')

module.exports = override(
  useBabelRc()
);