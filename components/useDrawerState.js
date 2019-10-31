import { useState } from 'react';

const useDrawerState = () => {
  const [open, setOpen] = useState(false);

  const closeDrawer = () => {
    setOpen(false);
  };

  const openDrawer = () => {
    setOpen(true);
  };

  const drawerState = {
    open,
    onClose: closeDrawer,
  };

  const drawerTriggerState = {
    onClick: openDrawer,
  };

  return {
    closeDrawer, openDrawer, drawerState, drawerTriggerState,
  };
};

export default useDrawerState;
