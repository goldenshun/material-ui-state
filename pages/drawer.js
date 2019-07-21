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
        <CustomDrawer {...drawerState}>
          <div>
            Hello. I am in a Drawer.
          </div>
        </CustomDrawer>
      </div>
    </>
  );
};

const CustomDrawer = (props) => {
  const { children, ...rest } = props;
  return (
    <Drawer anchor="right" {...rest}>
      {children}
    </Drawer>
  );
};

export default DrawerPage;
