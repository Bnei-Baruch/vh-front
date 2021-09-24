import React from "react";
import { connect } from "react-redux";
import DateFnsUtils from "@date-io/date-fns";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { StylesProvider } from "@material-ui/styles";
import { ThemeProvider } from "styled-components";
import English from "./locale/en.json";
import German from "./locale/de.json";
import Hebrew from "./locale/il.json";
import Spanish from "./locale/es.json";
import Russian from "./locale/ru.json";
import maTheme from "./theme";
import Routes from "./routes/Routes";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
i18next.init({
  interpolation: { escapeValue: false },  // React already does escaping
  lng: 'en',
  fallbackLng: 'en',                           // language to use
  resources: {
    en: {
      common: English,
    },
    us: {
      common: English           // 'common' is our custom namespace
    },
    de: {
      common: German
    },
    es: {
      common: Spanish,
    },
    he: {
      common: Hebrew,
    },
    ru: {
      common: Russian,
    }
  },
});

function App({ theme }) {
  return (
    <React.Fragment>
      <I18nextProvider i18n={i18next}>
        <StylesProvider injectFirst>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <MuiThemeProvider theme={maTheme[theme.currentTheme]}>
              <ThemeProvider theme={maTheme[theme.currentTheme]}>
                <Routes />
              </ThemeProvider>
            </MuiThemeProvider>
          </MuiPickersUtilsProvider>
        </StylesProvider>
      </I18nextProvider>
    </React.Fragment>
  );
}

export default connect(store => ({ theme: store.themeReducer }))(App);
