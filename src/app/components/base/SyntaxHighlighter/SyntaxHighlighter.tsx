import React, { FC } from 'react';
import * as PrismSyntax from './setupPrismSyntax';
import { SyntaxHighlighterProps } from 'react-syntax-highlighter';

PrismSyntax.setup();

const SyntaxHighlighter: FC<SyntaxHighlighterProps> = props => {
  return <PrismSyntax.SyntaxHighlighter {...props} />;
};

SyntaxHighlighter.defaultProps = {
  language: 'javascript',
  style: PrismSyntax.styleSet.vs,
  wrapLongLines: true,
  useInlineStyles: true,
  showLineNumbers: true,
};

export default SyntaxHighlighter;
