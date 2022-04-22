import { PrismAsyncLight } from 'react-syntax-highlighter';
import * as styles from 'react-syntax-highlighter/dist/esm/styles/prism';

import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';
import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';

const supportLanguage = {
  tsx,
  javascript,
};

export const setup = () => {
  Object.keys(supportLanguage).forEach(language => {
    PrismAsyncLight.registerLanguage(language, supportLanguage[language as SUPPORT_LANGUAGE]);
  });
};

export type SUPPORT_LANGUAGE = keyof typeof supportLanguage;
export const SyntaxHighlighter = PrismAsyncLight;
export const styleSet = styles;
