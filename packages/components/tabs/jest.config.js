const baseConfig = require('../../config/jest/base.config.js');
const { name } = require('./package.json');
module.exports = {
  ...baseConfig,
  displayName: name,
  name: name,
};
