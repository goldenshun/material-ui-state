import { Button, Typography } from '@material-ui/core';
import { useSnackbar } from '../components/snackbar-state';

const SnackbarPage = () => {
  const { showSnackbar } = useSnackbar({
    options: {
      onClose: () => console.log('Snackbar closed'),
    },
  });

  return (
    <>
      <Typography variant="h1">Snackbar</Typography>
      <div>
        <Button onClick={() => showSnackbar({ message: 'Hey' })}>
         Show Snackbar
        </Button>
      </div>
    </>
  );
};

export default SnackbarPage;
