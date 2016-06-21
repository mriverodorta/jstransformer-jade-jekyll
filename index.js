'use strict';

exports.name = 'jfm';
exports.inputFormats = ['html'];
exports.outputFormat = 'html';

exports.render = function (str) {
  return str + '\n';
};