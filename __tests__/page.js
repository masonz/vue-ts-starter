'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-vue-ts-starter:page', () => {
  var prompts = {
    page: 'login'
  };

  beforeEach(() => {
    return helpers.run(path.join(__dirname, '../generators/page'))
      .withPrompts(prompts);
  });

  afterEach(() => {
    prompts.page = '';
  });

  it('create page structure.', () => {
    const expected = [
      'src/pages/login/login.html',
      'src/pages/login/login.scss',
      'src/pages/login/login.ts',
      'src/pages/login/login.spec.ts',
      'src/pages/login/index.ts'
    ];
    assert.file(expected);
  });

  it('create fail.', () => {
    assert.noFile();
  });
});
