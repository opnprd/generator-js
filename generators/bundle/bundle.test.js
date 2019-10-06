'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('@opnprd/generator-js:packaging', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '.'));
  });

  it('creates a rollup config', () => {
    assert.file(['rollup.config.js']);
  });

  [
    '@babel/core',
    '@babel/preset-env',
    'rollup',
    'rollup-plugin-babel',
    'rollup-plugin-commonjs',
    'rollup-plugin-node-resolve',
    'rollup-plugin-terser',
  ].forEach(d => {
    it(`sets a dependency on ${d}`, () => {
      assert.fileContent('package.json', new RegExp(`"${d}":.*"\\^`));
    });
  });
});
