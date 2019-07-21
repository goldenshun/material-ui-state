import { useState } from 'react';

const useMenuState = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const closeMenu = () => {
    setAnchorEl(null);
  };

  const menuState = {
    anchorEl,
    open: Boolean(anchorEl),
    onClose: closeMenu,
  };

  const menuAnchorState = {
    onClick: e => setAnchorEl(e.currentTarget),
  };

  return { closeMenu, menuState, menuAnchorState };
};

export default useMenuState;
