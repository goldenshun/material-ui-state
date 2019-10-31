import { createContext, useContext, useState } from 'react';
import { IconButton, Snackbar, SnackbarContent } from '@material-ui/core';
import * as Icons from '@material-ui/icons';

export const SnackbarContext = createContext();

export const SnackbarProvider = (props) => {
  const { children } = props;
  const [snackbarOptions, setSnackbarOptions] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const { content, onClose, ...rest } = snackbarOptions;

  const showSnackbar = (options) => {
    setSnackbarOptions(options);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    if (onClose) onClose();
  };

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      <Snackbar
        open={isOpen}
        autoHideDuration={2000}
        onClose={handleClose}
        {...rest}
      >
        <SnackbarContent
          action={[
            <IconButton key="close" aria-label="Close" color="inherit" onClick={handleClose}>
              <Icons.Close />
            </IconButton>,
          ]}
          {...content}
        />
      </Snackbar>
    </SnackbarContext.Provider>
  );
};

export const useSnackbar = () => useContext(SnackbarContext);
