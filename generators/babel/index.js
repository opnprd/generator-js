'use strict';
const Generator = require('yeoman-generator');

const babelVersion = '^7.6.2';

module.exports = class extends Generator {
  writing() {
    const pkgJson = {
      devDependencies: {
        '@babel/core': babelVersion,
        '@babel/preset-env': babelVersion,
      },
    };

    // Extend or create package.json file in destination path
    this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);

    this.fs.copy(
      this.templatePath('babel.config.js'),
      this.destinationPath('babel.config.js')
    );
  }

  install() {
    this.installDependencies({
      bower: false,
    });
  }
};
