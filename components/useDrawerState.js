import { useState } from 'react';

const useDrawerState = () => {
  const [open, setOpen] = useState(false);

  const closeDrawer = () => {
    setOpen(false);
  };

  const drawerState = {
    open,
    onClose: closeDrawer,
  };

  const drawerTriggerState = {
    onClick: () => setOpen(!open),
  };

  return { closeDrawer, drawerState, drawerTriggerState };
};

export default useDrawerState;
