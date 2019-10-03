'use strict';
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  writing() {
    const pkgJson = {
      devDependencies: {
        jest: '^24.9.0',
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
