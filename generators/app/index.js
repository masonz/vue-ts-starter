'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the wicked ' + chalk.red('generator-vue-ts-starter') + ' generator!'
    ));

    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'Your project name?',
        default: 'vue-typescript-demo'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Your project description?',
        default: 'A vue project'
      },
      {
        type: 'confirm',
        name: 'vuex',
        message: 'You want use vuex?'
      },
      {
        type: 'confirm',
        name: 'install',
        message: 'You want auto install dependencies?'
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      props.useVuex = props.vuex;
      props.useAxios = props.axios;
      this.props = props;
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('files'),
      this.destinationPath('./'),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath('special/_package.json'),
      this.destinationPath('package.json'),
      this.props
    );
    this.fs.copy(
      this.templatePath('special/_.gitignore'),
      this.destinationPath('.gitgnore'),
      this.props
    );
    this.fs.copy(
      this.templatePath('special/icon.png'),
      this.destinationPath('./src/icon.png'),
      this.props
    );
    this.fs.copy(
      this.templatePath('special/src/assets'),
      this.destinationPath('./src/assets/'),
      this.props
    );
    this.fs.copy(
      this.templatePath('special/src/_favicon.ico'),
      this.destinationPath('./src/favicon.ico'),
      this.props
    );
    if (this.props.useVuex) {
      this.fs.copy(
        this.templatePath('special/src/store'),
        this.destinationPath('./src/store/'),
        this.props
      );
    }
  }

  install() {
    if (this.props.install) {
      this.installDependencies({bower: false});
    } else {
      this.log('\n You can execute the following command line: \n' +
        '----------------------------------------- \n\n' +

        '          npm install or npm i            \n\n' +

        '----------------------------------------- \n'
      );
    }
  }
};
