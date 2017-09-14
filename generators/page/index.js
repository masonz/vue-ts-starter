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
      name: 'page',
      message: 'Your page name:',
      default: ''
    }];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      props.className = _.upperFirst(_.camelCase(props.page));
      props.smallName = _.snakeCase(props.className);

      this.props = props;
    });
  }

  writing() {

    if (!this.props.page) {
      return this.log('Page name is required !');
    }

    this.registerTransformStream(rename(function (path) {
      var pageName = this.props.smallName;
      path.basename = path.basename.replace(/(_vpage_)/g, pageName);
      path.dirname = path.dirname.replace(/(_vpage_)/g, pageName);
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
