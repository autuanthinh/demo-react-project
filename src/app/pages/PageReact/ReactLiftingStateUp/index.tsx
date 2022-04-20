import React, { FC, useCallback, useMemo, useReducer } from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { UtilInject } from 'app/utils';

import TemperatureInput from './TemperatureInput';
import BoilingVerdict from './BoilingVerdict';

import headerMessages from 'app/containers/Header/messages';
import messages from '../messages';

export interface IReactHOCProps {}

type CombineProps = IReactHOCProps & InjectedIntlProps;

export type ScaleType = 'c' | 'f';

export const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
};

function reducer(state: any, action: any) {
  return { ...state, ...action };
}

function init(scale: ScaleType): {
  scale: ScaleType;
  temperature: string;
} {
  return { scale, temperature: scale === 'c' ? '0' : '32' };
}

const ReactHOC: FC<CombineProps> = ({ intl }) => {
  const titleIntl = useMemo(() => messages.reactLiftingStateUp || headerMessages.pageReactLiftingStateUp, []);

  const [{ scale, temperature }, dispatch] = useReducer(reducer, 'c', init);

  const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

  const handleCelsiusChange = useCallback(temperature => {
    dispatch({ scale: 'c', temperature });
  }, []);

  const handleFahrenheitChange = useCallback(temperature => {
    dispatch({ scale: 'f', temperature });
  }, []);

  return (
    <div>
      <h1>{intl.formatMessage(titleIntl)}</h1>
      <h3>
        Often, several components need to reflect the same changing data. We recommend lifting the shared state up to
        their closest common ancestor
      </h3>
      <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={handleCelsiusChange} />
      <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={handleFahrenheitChange} />
      <BoilingVerdict celsius={parseFloat(celsius)} />
    </div>
  );
};

function toCelsius(fahrenheit: number) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius: number) {
  return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature: string, convert: (temperature: number) => number) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

export default UtilInject.combineInjectionComponent([injectIntl], ReactHOC) as FC<IReactHOCProps>;
