import React, { FC, useMemo } from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { UtilInject } from 'app/utils';
import useDisclosure from 'app/pages/PageReact/ReactCustomHook/useDisclosure';
import CustomModal from './Modal';

import headerMessages from 'app/containers/Header/messages';
import messages from '../messages';

import './index.scss';
import { Button } from 'antd';

export interface IReactPortalProps {}

type CombineProps = IReactPortalProps & InjectedIntlProps;

const ReactPortal: FC<CombineProps> = ({ intl }) => {
  const titleIntl = useMemo(() => messages.reactPortal || headerMessages.pageReactPortal, []);

  const modalController = useDisclosure(false);

  return (
    <div>
      <h1>{intl.formatMessage(titleIntl)}</h1>
      <CustomModal isOpen={modalController.isOpen} onClose={modalController.close} header={<>Who am I?</>}>
        Vì sao a hỡi
      </CustomModal>
      <Button onClick={modalController.toggle}>Open</Button>
    </div>
  );
};

export default UtilInject.combineInjectionComponent([injectIntl], ReactPortal) as FC<IReactPortalProps>;
