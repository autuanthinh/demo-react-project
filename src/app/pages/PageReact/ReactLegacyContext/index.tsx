import React, { ComponentType } from 'react';
import PropTypes from 'prop-types';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { UtilInject } from 'app/utils';

import UpdateNumber from './UpdateNumber';
import Number from './Number';

import headerMessages from 'app/containers/Header/messages';
import messages from '../messages';

export interface IReactLegacyContextProps {}

type CombineProps = IReactLegacyContextProps & InjectedIntlProps;

type ReactLegacyContextState = {
  number: number;
};

class ReactLegacyContext extends React.Component<CombineProps, ReactLegacyContextState> {
  static childContextTypes: any = {
    number: PropTypes.number.isRequired,
    update: PropTypes.func.isRequired,
  };

  constructor(props: CombineProps, context: any) {
    super(props, context);
    this.state = {
      number: 0,
    };
  }

  getChildContext() {
    return { number: this.state.number, update: this.update };
  }

  update = () => {
    this.setState({ number: Math.random() });
  };

  render() {
    const { intl } = this.props;
    return (
      <div>
        <h1>{intl.formatMessage(messages.reactLegacyContext || headerMessages.pageReactLegacyContext)}</h1>
        <Number />
        <UpdateNumber />
      </div>
    );
  }
}

export default UtilInject.combineInjectionComponent(
  [injectIntl],
  ReactLegacyContext
) as ComponentType<IReactLegacyContextProps>;
