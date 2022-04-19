import React, { FC, useMemo } from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { UtilInject } from 'app/utils';

import { Button, Modal } from 'antd';
import useDisclosure from './useDisclosure';

import headerMessages from 'app/containers/Header/messages';
import messages from '../messages';

export interface ICustomHookProps {}

type CombineProps = ICustomHookProps & InjectedIntlProps;

const CustomHook: FC<CombineProps> = ({ intl }) => {
  const titleIntl = useMemo(() => messages.reactCustomHook || headerMessages.pageReactCustomHook, []);

  const modalController = useDisclosure();

  return (
    <div>
      <h1>{intl.formatMessage(titleIntl)}</h1>
      <Button onClick={modalController.open}>Open Modal</Button>
      <Modal
        visible={modalController.isOpen}
        onCancel={modalController.close}
        onOk={modalController.toggle}
        // footer={false}
      >
        Hello world
      </Modal>
    </div>
  );
};

export default UtilInject.combineInjectionComponent([injectIntl], CustomHook) as FC<ICustomHookProps>;
