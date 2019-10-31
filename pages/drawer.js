import { useState } from 'react';
import {
  Button, ButtonGroup, Drawer, Typography,
} from '@material-ui/core';
import useDrawerState from '../components/useDrawerState';

const DrawerPage = () => {
  const [count, setCount] = useState(0);
  const { closeDrawer, drawerState, drawerTriggerState } = useDrawerState();

  return (
    <>
      <Typography variant="h1">Drawer</Typography>
      <div>
        <Button {...drawerTriggerState}>
         Open Drawer
        </Button>
        <Typography variant="body2">{`Count: ${count}`}</Typography>
        <CustomDrawer {...drawerState}>
          <div>
            <ButtonGroup variant="contained" color="primary">
              <Button onClick={() => setCount(count + 1)}>Increment</Button>
              <Button onClick={() => setCount(count + -1)}>Decrement</Button>
            </ButtonGroup>
          </div>
          <div>
            <Button onClick={closeDrawer}>Close</Button>
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
