import { useCallback, useState } from 'react';

function useDisclosure(initIsOpen: boolean = false) {
  const [isOpen, setOpen] = useState<boolean>(initIsOpen);

  const open = useCallback(() => {
    setOpen(true);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
  }, []);

  const toggle = useCallback(() => {
    setOpen(v => !v);
  }, []);

  return { isOpen, open, close, toggle };
}

export default useDisclosure;
