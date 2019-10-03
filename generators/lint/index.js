'use strict';
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  writing() {
    const pkgJson = {
      devDependencies: {
        eslint: '^6.0.1',
      },
    };

    // Extend or create package.json file in destination path
    this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);

    this.fs.copy(
      this.templatePath('eslintrc.js'),
      this.destinationPath('.eslintrc.js')
    );
  }

  install() {
    this.installDependencies({
      bower: false,
    });
  }
};
