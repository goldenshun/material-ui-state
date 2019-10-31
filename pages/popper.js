import {
  Button, Paper, Popper, Typography,
} from '@material-ui/core';
import usePopperState from '../components/usePopperState';

const PopperPage = () => {
  const { popperState, popperAnchorState } = usePopperState();

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
