import {
  Button, Paper, Popper, Typography,
} from '@material-ui/core';
import usePoppperState from '../components/usePopperState';

const PopperPage = () => {
  const { popperState, popperAnchorState } = usePoppperState();

  return (
    <>
      <Typography variant="h1">Popper</Typography>
      <div>
        <Button {...popperAnchorState}>
         Open Popper
        </Button>
        <Popper {...popperState}>
          <Paper>I got popped.</Paper>
        </Popper>
      </div>
    </>
  );
};

export default PopperPage;
