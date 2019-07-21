import { Button, Typography } from '@material-ui/core';
import { useSnackbar } from '../components/snackbar-state';

const SnackbarPage = () => {
  const { showSnackbar } = useSnackbar();

  const handleButtonClick = () => showSnackbar({
    onClose: () => console.log('Snackbar closed'),
    content: {
      message: 'Hey',
    },
  });

  return (
    <>
      <Typography variant="h1">Snackbar</Typography>
      <div>
        <Button onClick={handleButtonClick}>
         Show Snackbar
        </Button>
      </div>
    </>
  );
};

export default SnackbarPage;
