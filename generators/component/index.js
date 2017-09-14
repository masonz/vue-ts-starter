'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const _ = require('lodash');
const rename = require('gulp-rename');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the premium ' + chalk.red('generator-vue-ts-starter') + ' generator!'
    ));

    const prompts = [{
      type: 'input',
      name: 'component',
      message: 'Your component name:',
      default: ''
    }];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      props.className = _.upperFirst(_.camelCase(props.component));
      props.smallName = _.snakeCase(props.className);

      this.props = props;
    });
  }

  writing() {

    if (!this.props.component) {
      return this.log('Component name is required !');
    }

    this.registerTransformStream(rename(function (path) {
      var modelName = this.props.smallName;
      path.basename = path.basename.replace(/(_vcomponent_)/g, modelName);
      path.dirname = path.dirname.replace(/(_vcomponent_)/g, modelName);
    }.bind(this)));

    this.fs.copyTpl(
      this.templatePath('files'),
      this.destinationPath('./'),
      this.props
    );
  }

  install() {
    // This.installDependencies();
  }
};
