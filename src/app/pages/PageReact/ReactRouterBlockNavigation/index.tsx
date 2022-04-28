import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { UtilInject } from 'app/utils';
import withRouter, { IWithRouter } from 'app/containers/router/hoc/withRouter';
import { UnregisterCallback, History, Location } from 'history';

import headerMessages from 'app/containers/Header/messages';
import messages from '../messages';
import useDisclosure from 'app/pages/PageReact/ReactCustomHook/useDisclosure';
import { Checkbox, Modal } from 'antd';

export interface IReactRouterBlockNavigationProps {}

type CombineProps = IReactRouterBlockNavigationProps &
  InjectedIntlProps &
  IWithRouter & {
    history: History;
  };

const ReactRouterBlockNavigation: FC<CombineProps> = ({ intl, history, replace }) => {
  const titleIntl = useMemo(
    () => messages.reactRouterBlockNavigation || headerMessages.pageReactRouterBlockNavigation,
    []
  );

  const [isBlocking, setBlocking] = useState(true);
  const modalController = useDisclosure(false);
  const [currentLocation, setCurrentLocation] = useState<Location>();

  useEffect(() => {
    let unblock: UnregisterCallback;
    if (isBlocking) {
      unblock = history.block((location: Location) => {
        setCurrentLocation(location);
        modalController.open();
        return false;
      });
    }

    return () => unblock?.();
  }, [history, isBlocking, modalController.open]);

  const toggleBlocking = useCallback(() => {
    setBlocking(v => !v);
  }, []);

  const submitChange = useCallback(() => {
    let unblock: UnregisterCallback;
    if (currentLocation) {
      unblock = history.block(() => {});
      history.push(currentLocation?.pathname);
    }

    return () => unblock?.();
  }, [history, currentLocation]);

  return (
    <div>
      <h1>{intl.formatMessage(titleIntl)}</h1>
      <Checkbox checked={isBlocking} onClick={toggleBlocking}>
        Is Blocking
      </Checkbox>
      <Modal
        title="Leave page!"
        visible={modalController.isOpen}
        cancelText={'Stay here'}
        onCancel={modalController.close}
        okText={'Leave here'}
        onOk={submitChange}
      >
        Do you want to exist current page?
      </Modal>
    </div>
  );
};

export default UtilInject.combineInjectionComponent(
  [withRouter, injectIntl],
  ReactRouterBlockNavigation
) as FC<IReactRouterBlockNavigationProps>;
