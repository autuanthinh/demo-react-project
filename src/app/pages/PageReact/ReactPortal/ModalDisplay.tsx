import React, { FC } from 'react';

export interface IModalDisplayProps {
  isOpen: boolean;
  onClose: () => void;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

const ModalDisplay: FC<IModalDisplayProps> = ({ children, isOpen, onClose, header, footer }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-shadow">
      <div className="modal">
        <div className="modal-container">
          {header && <div className="modal__header">{header}</div>}
          <div className="modal__body">{children}</div>
          {footer && <div className="modal__footer">{footer}</div>}
        </div>

        <span onClick={onClose} className="modal__close-btn">
          X
        </span>
      </div>
    </div>
  );
};

export default ModalDisplay;
