import { SnackbarProvider } from './snackbar-state';

// eslint-disable-next-line react/prop-types
const MuiStateProvider = ({ children }) => (
  <SnackbarProvider>
    {children}
  </SnackbarProvider>
);

export default MuiStateProvider;
