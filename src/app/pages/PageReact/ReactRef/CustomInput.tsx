import React from 'react';

import { Input, InputRef, InputProps } from 'antd';

export type ICustomInputProps = {} & InputProps & React.RefAttributes<InputRef>;

type CombineProps = ICustomInputProps;

const CustomInput = React.forwardRef((props: CombineProps, ref: React.ForwardedRef<InputRef>) => {
  return <Input {...props} ref={ref} />;
});

export default CustomInput;
