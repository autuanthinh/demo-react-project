import React, { FC, Props } from 'react';
import { Layout } from 'antd';

export interface IFooterProps extends Props<HTMLElement> {}

const Footer: FC<IFooterProps> = ({}) => {
  return <Layout.Footer style={{ textAlign: 'center' }}>Copyright @ 2022 ThinhAT</Layout.Footer>;
};

export default Footer;
