# generator-vue-ts-starter [中文](./README.ZH_CH.md)
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> 😘 Starter for vue and typescript.

## Integration tools

 * Vue2
 * Vuex
 * Vue-Router
 * TypeScript
 * Sass
 * Webpack3
 * Karma
 * Mocha
 * Tslint

> ⚠ For syntax, please refer to [vue-class-component](https://github.com/vuejs/vue-class-component) and [vue-property-decorator](https://github.com/kaorun343/vue-property-decorator)

## Installation

First, install [Yeoman](http://yeoman.io) and generator-vue-ts-starter using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-vue-ts-starter
```

Then generate your new project:

```bash
yo vue-ts-starter
```

And, you can generate `compoennt` or `page` by:

```bash
yo vue-ts-starter:component
yo vue-ts-starter:page
```

Failed to build `main.scss`:
```
ERROR in ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/sass/main.scss
Module build failed: Error: ENOENT: no such file or directory, scandir '/Users/masonz/Project/my-project/node_modules/node-sass/vendor'
```
You can try `npm rebuild node-sass` and run again.

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT © masonz

[npm-image]: https://badge.fury.io/js/generator-vue-ts-starter.svg
[npm-url]: https://npmjs.org/package/generator-vue-ts-starter
[travis-image]: https://travis-ci.org/masonz/generator-vue-ts-starter.svg?branch=master
[travis-url]: https://travis-ci.org/masonz/generator-vue-ts-starter
[daviddm-image]: https://david-dm.org/masonz/generator-vue-ts-starter.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/masonz/generator-vue-ts-starter
[coveralls-image]: https://coveralls.io/repos/masonz/generator-vue-ts-starter/badge.svg
[coveralls-url]: https://coveralls.io/r/masonz/generator-vue-ts-starter
