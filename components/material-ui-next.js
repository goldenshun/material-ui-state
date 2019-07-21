import React, { useEffect } from 'react';
import flush from 'styled-jsx/server'; // eslint-disable-line import/no-extraneous-dependencies
import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ServerStyleSheets, ThemeProvider } from '@material-ui/styles';

export function withMaterialUI(options) {
  return (WrappedApp) => {
    const WithMaterialUI = (props) => {
      useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side'); // eslint-disable-line no-undef
        if (jssStyles) {
          jssStyles.parentNode.removeChild(jssStyles);
        }
      }, []);
      return (
        <>
          <Head>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap" />
            <style>
              {/* The font-size override allows us to use simplified 10px conversion with rems, e.g. 1rem = 10px */}
              {'html { font-size: 62.5% }'}
            </style>
          </Head>
          <ThemeProvider theme={options.theme}>
            <CssBaseline />
            <WrappedApp {...props} />
          </ThemeProvider>
        </>
      );
    };

    WithMaterialUI.getInitialProps = WrappedApp.getInitialProps;

    WithMaterialUI.displayName = `WithMaterialUI(${WrappedApp.displayName || WrappedApp.name || 'Component'})`;

    return WithMaterialUI;
  };
}

export function withMaterialUIOnDocument(WrappedDocument) {
  const WithMaterialUIOnDocument = props => <WrappedDocument {...props} />;

  WithMaterialUIOnDocument.getInitialProps = async (ctx) => {
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;
    // eslint-disable-next-line no-param-reassign
    ctx.renderPage = () => originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />),
    });

    const initialProps = await WrappedDocument.getInitialProps(ctx);

    return {
      ...initialProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: (
        <React.Fragment>
          {sheets.getStyleElement()}
          {flush() || null}
        </React.Fragment>
      ),
    };
  };

  WithMaterialUIOnDocument.displayName = `WithMaterialUIOnDocument(${WrappedDocument.displayName || WrappedDocument.name || 'Component'})`;

  return WithMaterialUIOnDocument;
}
