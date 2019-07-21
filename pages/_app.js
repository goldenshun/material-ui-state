import App, { Container } from 'next/app';
import { compose } from 'lodash/fp';
import { createMuiTheme } from '@material-ui/core/styles';
import { withMaterialUI } from '../components/material-ui-next';
import theme from '../lib/theme';

const muiTheme = createMuiTheme(theme);

class NextApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}


export default compose(
  withMaterialUI({ theme: muiTheme }),
)(NextApp);
