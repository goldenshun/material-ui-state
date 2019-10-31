import { Button, Typography } from '@material-ui/core';
import { useSnackbar } from '../components/snackbar-state';

const SnackbarPage = () => {
  console.log('SnackbarPage render');
  return (
    <>
      <Typography variant="h1">Snackbar</Typography>
      <div>
        <SnackbarButtonExample />
      </div>
    </>
  );
};

const SnackbarButtonExample = () => {
  const { showSnackbar } = useSnackbar();

  const handleButtonClick = () => showSnackbar({
    onClose: () => console.log('Snackbar closed'),
    content: {
      message: 'Hey',
    },
  });

  // When the snackbar is opened, only the consumers of snackbars are re-rendered.
  console.log('SnackbarButtonExample render');
  return (
    <Button onClick={handleButtonClick}>
     Show Snackbar
    </Button>
  );
};

export default SnackbarPage;
