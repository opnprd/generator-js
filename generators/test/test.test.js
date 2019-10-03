'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('@opnprd/generator-js:lint', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '.'));
  });

  it('creates a test config', () => {
    assert.file(['jest.config.js']);
  });

  it('sets a dependency on eslint', () => {
    assert.fileContent('package.json', /"jest":.*"\^/);
  });
});
