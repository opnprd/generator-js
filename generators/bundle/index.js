'use strict';
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  initializing() {
    this.composeWith(require.resolve('../babel'));
  }

  async prompting() {
    this.answers = await this.prompt([
      {
        type: 'input',
        name: 'entrypoint',
        message: 'Javascript name',
        default: 'main',
        store: true,
      },
      {
        type: 'input',
        name: 'destination',
        message: 'Target directory',
        default: 'dist',
        store: true,
      },
    ]);
  }
  writing() {
    const { entrypoint, destination } = this.answers;

    const pkgJson = {
      devDependencies: {
        rollup: '^1.22.0',
        'rollup-plugin-babel': '^4.3.3',
        'rollup-plugin-commonjs': '^10.1.0',
        'rollup-plugin-node-resolve': '^5.2.0',
        'rollup-plugin-terser': '^5.1.2',
      },
      scripts: {
        bundle: 'rollup --config rollup.config.js',
      },
    };

    // Extend or create package.json file in destination path
    this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);

    this.fs.copyTpl(
      this.templatePath('rollup.config.js'),
      this.destinationPath('rollup.config.js'),
      { entrypoint, destination },
    );

    this.fs.copy(
      this.templatePath('entrypoint.js'),
      this.destinationPath(`src/${entrypoint}.js`)
    );
  }

  install() {
    this.installDependencies({
      bower: false,
    });
  }
};
