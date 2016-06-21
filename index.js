'use strict';

exports.name = 'fm';
exports.inputFormats = ['html'];
exports.outputFormat = 'html';

exports.render = function (str) {
  return str + '\n';
};