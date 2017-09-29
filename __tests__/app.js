'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-vue-ts-starter', () => {
  let prompts = {
    vuex: false
  };

  beforeEach(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts(prompts);
  });

  afterEach(() => {
    prompts.vuex = true;
  });

  it('creates project.', () => {
    const expected = [
      '.gitgnore',
      'README.md',
      'package.json',
      'karma.coverage.js',
      'webpack.config.js'
    ];

    assert.file(expected);
  });

  it('use vux.', () => {
    const expected = [
      'src/store'
    ];

    assert.file(expected);
  });
});
