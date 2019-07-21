import { Button, Typography } from '@material-ui/core';
import { useSnackbar } from '../components/snackbar-state';

const SnackbarPage = () => {
  const { showSnackbar } = useSnackbar();

  return (
    <>
      <Typography variant="h1">Popper</Typography>
      <div>
        <Button onClick={() => showSnackbar({ message: 'Hey' })}>
         Show Snackbar
        </Button>
      </div>
    </>
  );
};

export default SnackbarPage;
