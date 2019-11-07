'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('@opnprd/generator-js:test', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '.'));
  });

  it('creates a test config', () => {
    assert.file(['jest.config.js']);
  });

  it('sets a dependency on jest', () => {
    assert.fileContent('package.json', /"jest":.*"\^/);
  });

  it('adds a test script', () => {
    assert.fileContent('package.json', /"test":.*"jest"/);
  });
});
