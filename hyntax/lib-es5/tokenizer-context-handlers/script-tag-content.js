"use strict";

var _require = require('../helpers'),
    calculateTokenCharactersRange = _require.calculateTokenCharactersRange;

var _require2 = require('../constants/token-types'),
    TOKEN_SCRIPT_TAG_CONTENT = _require2.TOKEN_SCRIPT_TAG_CONTENT,
    TOKEN_CLOSE_TAG_SCRIPT = _require2.TOKEN_CLOSE_TAG_SCRIPT;

var _require3 = require('../constants/tokenizer-contexts'),
    DATA_CONTEXT = _require3.DATA_CONTEXT;

function closingScriptTag(state, tokens) {
  if (state.accumulatedContent !== '') {
    var range = calculateTokenCharactersRange(state, {
      keepBuffer: false
    });
    tokens.push({
      type: TOKEN_SCRIPT_TAG_CONTENT,
      content: state.accumulatedContent,
      startPosition: range.startPosition,
      endPosition: range.endPosition
    });
  }

  tokens.push({
    type: TOKEN_CLOSE_TAG_SCRIPT,
    content: state.decisionBuffer,
    startPosition: state.caretPosition - (state.decisionBuffer.length - 1),
    endPosition: state.caretPosition
  });
  state.accumulatedContent = '';
  state.decisionBuffer = '';
  state.currentContext = DATA_CONTEXT;
  state.caretPosition++;
}

var INCOMPLETE_CLOSING_TAG_PATTERN = /<\/[^>]+$/;
var CLOSING_SCRIPT_TAG_PATTERN = /<\/script\s*>/i;

function parseSyntax(chars, state, tokens) {
  if (chars === '<' || chars === '</' || INCOMPLETE_CLOSING_TAG_PATTERN.test(chars)) {
    state.caretPosition++;
    return;
  }

  if (CLOSING_SCRIPT_TAG_PATTERN.test(chars)) {
    return closingScriptTag(state, tokens);
  }

  state.accumulatedContent += state.decisionBuffer;
  state.decisionBuffer = '';
  state.caretPosition++;
}

module.exports = {
  parseSyntax: parseSyntax
};