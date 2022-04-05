import React, { FC, Props, useMemo } from 'react';
import _ from 'lodash';
import { Breadcrumb } from 'antd';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { useSelector } from 'react-redux';
import { routerLocationSelector } from 'app/containers/router/selectors';

import { getMenuLabels } from '../Header/enums';
import { Link } from 'react-router-dom';

export interface IFooterProps extends Props<HTMLElement> {}

const CustomBreadcrumb: FC<IFooterProps & InjectedIntlProps> = ({ intl }) => {
  const location = useSelector(routerLocationSelector);

  const menuLabels = useMemo(() => {
    return getMenuLabels(intl);
  }, [intl]);

  const data = useMemo(() => {
    let paths = location.pathname.split('/');
    if (!paths[1]) {
      paths = _.slice(paths, 0, 1);
    }

    return paths.map((key, index) => {
      return {
        key,
        label: menuLabels[key],
        uri: '/' + _.slice(paths, 1, index + 1).join('/'),
      };
    });
  }, [location, menuLabels]);

  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      {data.map((v, i) => {
        return (
          <Breadcrumb.Item key={v.key}>
            {data.length === i + 1 ? v.label : <Link to={v.uri}>{v.label}</Link>}
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
};

export default injectIntl(CustomBreadcrumb);
