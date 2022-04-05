import React, { FC } from 'react';
import { LoadingOutlined } from '@ant-design/icons';

import './index.scss';

export interface IPageLoginProps {}

const PageLoading: FC<IPageLoginProps> = () => {
  return (
    <div className="page-loading">
      <LoadingOutlined style={{ fontSize: 64 }} />
    </div>
  );
};

export default PageLoading;
