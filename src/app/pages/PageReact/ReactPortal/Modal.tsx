import React, { FC, useEffect, useMemo, useRef } from 'react';
import ReactDOM from 'react-dom';
import ModalDisplay, { IModalDisplayProps } from './ModalDisplay';

export type IModalProps = {} & IModalDisplayProps;

const Modal: FC<IModalProps> = ({ ...props }) => {
  const modalRoot = useMemo(() => document.getElementById('modal-root'), []);

  const el = useRef(document.createElement('div'));

  useEffect(() => {
    modalRoot?.appendChild(el.current);

    return () => {
      modalRoot?.removeChild(el.current);
    };
  }, [modalRoot]);

  return ReactDOM.createPortal(<ModalDisplay {...props} />, el.current);
};

export default Modal;
