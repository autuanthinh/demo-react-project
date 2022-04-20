import React, { ChangeEvent, MouseEventHandler, FC, useCallback, useMemo, useRef, useState } from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { UtilInject } from 'app/utils';

import { Button, Divider, Input, InputRef } from 'antd';
import CustomInput from './CustomInput';
import RefValue from './RefValue';

import headerMessages from 'app/containers/Header/messages';
import messages from '../messages';

export interface IReactRefProps {}

type CombineProps = IReactRefProps & InjectedIntlProps;

const ReactRef: FC<CombineProps> = ({ intl }) => {
  const [value, setValue] = useState('');
  const titleIntl = useMemo(() => messages.reactRef || headerMessages.pageReactRef, []);

  const inputRef1 = useRef<InputRef>(null);
  const inputRef2 = useRef<InputRef>(null);

  const focus1: MouseEventHandler<HTMLElement> = useCallback(() => {
    inputRef1.current?.focus();
  }, []);

  const focus2: MouseEventHandler<HTMLElement> = useCallback(() => {
    inputRef2.current?.focus();
  }, []);

  const changeValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  return (
    <div>
      <h1>{intl.formatMessage(titleIntl)}</h1>

      <div>
        <h3>Direct ref to input</h3>
        <Input ref={inputRef1} value={value} onChange={changeValue} addonBefore={<span>1</span>} />
        <Divider />
        <h3>Using forward ref to input</h3>
        <CustomInput ref={inputRef2} value={value} onChange={changeValue} addonBefore={<span>2</span>} />
        <Button onClick={focus1}>Focus 1</Button>
        <Button onClick={focus2}>Focus 2</Button>

        <Divider />
        <RefValue />
        <RefValue />
      </div>
    </div>
  );
};

export default UtilInject.combineInjectionComponent([injectIntl], ReactRef) as FC<IReactRefProps>;
