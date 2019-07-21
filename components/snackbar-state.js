import { createContext, useContext, useState } from 'react';
import { IconButton, Snackbar, SnackbarContent } from '@material-ui/core';
import * as Icons from '@material-ui/icons';

export const SnackbarContext = createContext();

export const SnackbarProvider = (props) => {
  const { children } = props;
  const [snackbarOptions, setSnackbarOptions] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const showSnackbar = (options) => {
    setSnackbarOptions(options);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      <Snackbar
        open={isOpen}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <SnackbarContent
          action={[
            <IconButton key="close" aria-label="Close" color="inherit" onClick={handleClose}>
              <Icons.Close />
            </IconButton>,
          ]}
          {...snackbarOptions}
        />
      </Snackbar>
    </SnackbarContext.Provider>
  );
};

export const useSnackbar = () => useContext(SnackbarContext);
