import {
  Button, Paper, Popover, Typography,
} from '@material-ui/core';
import usePopperState from '../components/usePopperState';

const PopperPage = () => {
  const { popperState, popperAnchorState } = usePopperState();

  return (
    <>
      <Typography variant="h1">Popover</Typography>
      <div>
        <Button {...popperAnchorState}>
         Open Popover
        </Button>
        <Popover
          {...popperState}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Paper>I got popovered.</Paper>
        </Popover>
      </div>
    </>
  );
};

export default PopperPage;
