'use strict';
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  initializing() {
    this.composeWith(require.resolve('../babel'));
  }

  writing() {
    const pkgJson = {
      devDependencies: {
        jest: '^24.9.0',
      },
      scripts: {
        test: 'jest',
      },
    };

    // Extend or create package.json file in destination path
    this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);

    this.fs.copy(
      this.templatePath('jest.config.js'),
      this.destinationPath('jest.config.js')
    );
  }

  install() {
    this.installDependencies({
      bower: false,
    });
  }
};
