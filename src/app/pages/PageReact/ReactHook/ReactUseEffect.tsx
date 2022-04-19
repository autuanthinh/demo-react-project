import { Button } from 'antd';
import React, { FC, useCallback, useEffect, useState } from 'react';

export interface IReactUseEffectProps {}

type CombineProps = IReactUseEffectProps;

const ReactUseEffect: FC<CombineProps> = ({}) => {
  const [isOpen, setOpen] = useState(false);
  const [number, setNumber] = useState(0);

  const toggle = useCallback(() => {
    setOpen(v => !v);
  }, []);

  const increase = useCallback(() => {
    setNumber(v => ++v);
  }, []);

  useEffect(() => {
    // Chạy 1 lần khi component được mount
    console.log('Component did mount');
  }, []);

  useEffect(() => {
    // Chạy lại mỗi lần state hoặc props được update
    console.log('Component did state or props update');
  });

  useEffect(() => {
    // Chạy lại mỗi khi trigger thay đổi
    console.log('Re-run by trigger (state, props)', { isOpen });
  }, [isOpen]);

  // Will actions
  useEffect(() => {
    return () => {
      // Chạy 1 lần trước khi component unmount
      console.log('Will unmount once');
    };
  }, []);

  useEffect(() => {
    return () => {
      // Chạy mỗi lần trước khi state hoặc props update
      console.log('Will component update by state, props');
    };
  });

  useEffect(() => {
    return () => {
      // Chạy mỗi lần trước khi giá trị trigger được thay đổi
      console.log('Will component update by trigger (state, props)');
    };
  }, [isOpen]);

  return (
    <div>
      <h1>Use Effect</h1>
      <div style={{ border: '1px solid var(--ant-primary-color)', padding: 8, lineHeight: '1rem' }}>
        {isOpen ? 'Anh sẽ vì em làm thơ tình ái' : <>&nbsp;</>}
        {undefined}
      </div>
      <Button onClick={toggle}>Trigger</Button>
      <Button onClick={increase}>Increase ({number})</Button>
    </div>
  );
};

export default ReactUseEffect;
