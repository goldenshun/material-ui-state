import { useState } from 'react';

const usePopperState = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const closePopper = () => {
    setAnchorEl(null);
  };

  const popperState = {
    anchorEl,
    open: Boolean(anchorEl),
    onClose: closePopper,
  };

  const popperAnchorState = {
    onClick: e => setAnchorEl(anchorEl ? null : e.currentTarget),
  };

  return { closePopper, popperState, popperAnchorState };
};

export default usePopperState;
