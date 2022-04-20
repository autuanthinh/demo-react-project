import { Button } from 'antd';
import React, { FC, MouseEventHandler, useCallback, useState } from 'react';

export interface IReactUseStateProps {}

type CombineProps = IReactUseStateProps;

const ReactUseState: FC<CombineProps> = ({}) => {
  const [isOpen, setOpen] = useState(false);

  const toggle1: MouseEventHandler = useCallback(
    e => {
      console.log(e);
      setOpen(!isOpen);
    },
    [isOpen]
  );

  const toggle2 = useCallback(() => {
    setOpen(v => !v);
  }, []);

  return (
    <div>
      <h1>Use State</h1>
      <div style={{ border: '1px solid var(--ant-primary-color)', padding: 8, lineHeight: '1rem' }}>
        {isOpen ? 'Anh sẽ vì em làm thơ tình ái' : <>&nbsp;</>}
        {undefined}
      </div>
      <Button onClick={toggle1}>{`Toggle | setOpen(!isOpen)`}</Button>
      <Button onClick={toggle2}>{`Toggle | setOpen(v => !v)`}</Button>
    </div>
  );
};

export default ReactUseState;
