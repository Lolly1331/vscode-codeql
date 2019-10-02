'use strict';

require('ts-node').register({});
const gulp = require('gulp');
const {
  compileTypeScript,
  watchTypeScript,
  packageExtension,
  compileTextMateGrammar
} = require('build-tasks');
const { compileView } = require('./webpack');

exports.buildWithoutPackage = gulp.parallel(compileTypeScript, compileTextMateGrammar, compileView);
exports.compileTextMateGrammar = compileTextMateGrammar;
exports.default = gulp.series(exports.buildWithoutPackage, packageExtension);
exports.watchTypeScript = watchTypeScript;
exports.compileView = compileView;
exports.compileTypeScript = compileTypeScript;