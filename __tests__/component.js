'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-vue-ts-starter:component', () => {
  var prompts = {
    component: 'footer'
  };

  beforeEach(() => {
    return helpers.run(path.join(__dirname, '../generators/component'))
      .withPrompts(prompts);
  });

  afterEach(() => {
    prompts.component = '';
  });

  it('create component structure.', () => {
    const expected = [
      'src/components/footer/footer.html',
      'src/components/footer/footer.scss',
      'src/components/footer/footer.ts',
      'src/components/footer/footer.spec.ts',
      'src/components/footer/index.ts'
    ];
    assert.file(expected);
  });

  it('create fail.', () => {
    assert.noFile();
  });
});
