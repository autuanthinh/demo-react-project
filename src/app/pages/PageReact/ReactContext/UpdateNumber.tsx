import React, { FC, useContext } from 'react';
import { injectIntl } from 'react-intl';
import { UtilInject } from 'app/utils';

import { MessageContext } from './index';
import { Button } from 'antd';

export interface IUpdateNumberProps {}

type CombineProps = IUpdateNumberProps;

const UpdateNumber: FC<CombineProps> = ({}) => {
  const { update } = useContext(MessageContext);

  return <Button onClick={update}>Generate Random</Button>;
};

export default UtilInject.combineInjectionComponent([injectIntl], UpdateNumber) as FC<IUpdateNumberProps>;
