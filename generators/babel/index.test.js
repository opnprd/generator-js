'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('@opnprd/generator-js:babel', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '.'));
  });

  it('creates a test config', () => {
    assert.file(['babel.config.js']);
  });

  [
    '@babel/core',
    '@babel/preset-env',
  ].forEach(d => {
    it(`sets a dependency on ${d}`, () => {
      assert.fileContent('package.json', new RegExp(`"${d}":.*"\\^`));
    });
  });
});
