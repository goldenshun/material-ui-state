import { Button, Dialog } from '@material-ui/core';
import useDialog from '../components/useDialogState';

const DialogPage = () => {
  const { dialogState, dialogTriggerState } = useDialog();

  return (
    <>
      <Button {...dialogTriggerState}>Open Dialog</Button>
      <Dialog {...dialogState}>
        Inside the dialog
      </Dialog>
    </>
  );
};

export default DialogPage;
