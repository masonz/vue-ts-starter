'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-vue-ts-starter', () => {
  beforeEach(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({ vuex: true });
  });

  it('creates some files', () => {
    const expected = [
      '.gitgnore',
      'README.md',
      'package.json',
      'karma.coverage.js',
      'webpack.config.js'
    ];

    assert.file(expected);
  });
});
