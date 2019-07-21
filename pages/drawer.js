import {
  Button, Drawer, Typography,
} from '@material-ui/core';
import useDrawerState from '../components/useDrawerState';

const DrawerPage = () => {
  const { drawerState, drawerTriggerState } = useDrawerState();

  return (
    <>
      <Typography variant="h1">Drawer</Typography>
      <div>
        <Button {...drawerTriggerState}>
         Open Drawer
        </Button>
        <Drawer {...drawerState}>
          Hey
        </Drawer>
      </div>
    </>
  );
};

export default DrawerPage;
