import { useState } from 'react';

const useDialogState = () => {
  const [open, setOpen] = useState(false);

  const closeDialog = () => {
    setOpen(false);
  };

  const openDialog = () => {
    setOpen(true);
  };

  const dialogState = {
    open,
    onClose: closeDialog,
  };

  const dialogTriggerState = {
    onClick: openDialog,
  };

  return {
    openDialog, closeDialog, dialogState, dialogTriggerState,
  };
};

export default useDialogState;
