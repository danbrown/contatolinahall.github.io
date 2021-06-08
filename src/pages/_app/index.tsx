import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "@themes";

// + FORTAWESOME
import { config, library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  faGithub,
  faInstagram,
  faTwitter,
  faFacebook,
  faTwitch,
  faTiktok,
  faDiscord,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";

// See https://github.com/FortAwesome/react-fontawesome#integrating-with-other-tools-and-frameworks
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
library.add(
  faGithub,
  faInstagram,
  faTwitter,
  faFacebook,
  faTwitch,
  faTiktok,
  faDiscord,
  faYoutube,
  faBars,
  faTimes,
  faLinkedin,
  faCheck
);

// + STYLES
import "../../styles/globals.css";

// + PROVIDERS
export default function MyApp(props: any) {
  const { Component, pageProps } = props;

  // Remove the server-side injected CSS.
  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />

        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
