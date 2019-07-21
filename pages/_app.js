import App, { Container } from 'next/app';
import { compose } from 'lodash/fp';
import { createMuiTheme } from '@material-ui/core/styles';
import { withMaterialUI } from '../components/material-ui-next';
import theme from '../lib/theme';
import MuiStateProvider from '../components/MuiStateProvider';

const muiTheme = createMuiTheme(theme);

class NextApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <MuiStateProvider>
          <Component {...pageProps} />
        </MuiStateProvider>
      </Container>
    );
  }
}


export default compose(
  withMaterialUI({ theme: muiTheme }),
)(NextApp);
