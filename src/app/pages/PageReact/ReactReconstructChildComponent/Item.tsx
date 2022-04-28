import React, { FC, MouseEventHandler, MouseEvent, useCallback, useMemo } from 'react';
import classNames from 'classnames';

export interface IItemProps {
  classPrefix?: string;
  children: React.ReactNode;
  itemKey?: string;
  isActivated?: boolean;
  onSelect?: (key: string) => void;
  onClick?: (key: string, e?: MouseEvent<HTMLDivElement>) => void;
}

const Item: FC<IItemProps> = ({ classPrefix, children, onSelect, itemKey, onClick, isActivated }) => {
  const _onClick: MouseEventHandler<HTMLDivElement> = useCallback(
    e => {
      onClick?.(itemKey as string, e);
      onSelect?.(itemKey as string);
    },
    [itemKey, onClick, onSelect]
  );

  const itemClassName = useMemo(() => {
    return `${classPrefix}-item`;
  }, [classPrefix]);

  return (
    <div
      onClick={_onClick}
      className={classNames(itemClassName, {
        [`${itemClassName}__active`]: isActivated,
      })}
    >
      {children}
    </div>
  );
};

Item.displayName = 'Item';

export default Item;
