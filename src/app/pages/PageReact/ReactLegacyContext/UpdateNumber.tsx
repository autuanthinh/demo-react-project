import React, { FC } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { UtilInject } from 'app/utils';

import { Button } from 'antd';

export interface IUpdateNumberProps {}

type CombineProps = IUpdateNumberProps;

const UpdateNumber: FC<CombineProps> = ({}, context) => {
  return <Button onClick={context.update}>Generate Random</Button>;
};

UpdateNumber.contextTypes = {
  update: PropTypes.func.isRequired,
};

export default UtilInject.combineInjectionComponent([injectIntl], UpdateNumber) as FC<IUpdateNumberProps>;
