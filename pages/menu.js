import {
  Button, Menu, MenuItem, Typography,
} from '@material-ui/core';
import useMenuState from '../components/useMenuState';

const MenuPage = () => {
  const { closeMenu, menuState, menuAnchorState } = useMenuState();

  return (
    <>
      <Typography variant="h1">Menu</Typography>
      <div>
        <Button {...menuAnchorState}>
         Open Menu
        </Button>
        <Menu {...menuState}>
          <MenuItem onClick={closeMenu}>Profile</MenuItem>
          <MenuItem onClick={closeMenu}>My Account</MenuItem>
          <MenuItem onClick={closeMenu}>Logout</MenuItem>
        </Menu>
      </div>
    </>
  );
};

export default MenuPage;
