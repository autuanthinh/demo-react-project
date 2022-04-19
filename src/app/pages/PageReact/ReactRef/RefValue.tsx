import React, { FC, useCallback, useRef, useState } from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { UtilInject } from 'app/utils';

import { Button } from 'antd';

export interface IRefValueProps {}

type CombineProps = IRefValueProps & InjectedIntlProps;

const RefValue: FC<CombineProps> = ({ intl }) => {
  const [isRunning, setRunning] = useState(false);
  const [isStarted, setStarted] = useState(false);
  const [value, setValue] = useState(0);

  const numberRef = useRef<any>();

  const start = useCallback(() => {
    setStarted(true);
    setRunning(true);
    numberRef.current = setInterval(() => {
      setValue(v => ++v);
    }, 1000);
  }, []);

  const stop = useCallback(() => {
    setRunning(false);
    clearInterval(numberRef.current);
  }, []);

  const reset = useCallback(() => {
    clearInterval(numberRef.current);
    setStarted(false);
    setRunning(false);
    setValue(0);
  }, []);

  return (
    <div>
      <h1>Ref value</h1>
      <div>Count: {value}</div>
      <Button onClick={isRunning ? stop : start}>{isRunning ? 'Stop' : 'Start'}</Button>
      <Button onClick={reset} disabled={!isStarted}>
        Reset
      </Button>
    </div>
  );
};

export default UtilInject.combineInjectionComponent([injectIntl], RefValue) as FC<IRefValueProps>;
