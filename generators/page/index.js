'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const _ = require('lodash');
const mkdirp = require('mkdirp');
const rename = require('gulp-rename');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the premium ' + chalk.red('generator-masonz-vue-component') + ' generator!'
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
    // this.installDependencies();
  }
};
