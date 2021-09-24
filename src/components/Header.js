import React, { useState } from "react";
import styled, { withTheme } from "styled-components";
import { connect } from "react-redux";

import {
  Grid,
  Menu,
  MenuItem,
  AppBar as MuiAppBar,
  IconButton as MuiIconButton,
  Toolbar
} from "@material-ui/core";

import { Button } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import URL from '../config/config';
import { NavLink } from "react-router-dom";
import { setDirection } from "utils";

const AppBar = styled(MuiAppBar)`
  background: ${props => props.theme.header.background};
  color: ${props => props.theme.header.color};
`;

const IconButton = styled(MuiIconButton)`
  svg {
    width: 22px;
    height: 22px;
  }
`;

const Flag = styled.img`
  border-radius: 50%;
  width: 22px;
  height: 22px;
`;

const LogoContainer = styled.span`
  display: flex;
  cursor: pointer;
`;

const Logo = styled.img`
  height: 45px
`;

const LogoTitle = styled.div`
    margin-left : 10px;
`;
const LogoHeading = styled.span`
    font-size : 18px;
    font-weight : bold;
    color: #00447C;
    font-weight: bold;
`;

const SignupButton = styled(Button)`
    background-color: #fff;
    border: 1px solid #949494;
    color: #000;
    text-decoration: none !important;
    :hover {
        background-color: #f8f8f8;
        border: 1px solid #949494;
        color: #000;
    }
`;

const LogoSubHeading = styled.span`
    font-size : 14px;
    color : #40B3E0;
`;

function LanguageMenu() {
  const [anchorMenu, setAnchorMenu] = useState(null);

  const [lang, setLang] = useState({
    "lang": "English",
    "code": "US"
  });

  const { i18n } = useTranslation('common');

  const toggleMenu = event => {
    setAnchorMenu(event.currentTarget);
  };

  const closeMenu = (code) => {
    setAnchorMenu(null);
    setLang({
      "lang": lang,
      "code": code
    })
    if (code.toUpperCase() === "IL") {
      setDirection('rtl');
    } else {
      setDirection('ltr');
    }
    localStorage.setItem('VH_LANG', code.toLowerCase());
    i18n.changeLanguage(code.toLowerCase());
  };

  return (
    <React.Fragment>
      <IconButton
        aria-owns={Boolean(anchorMenu) ? "menu-appbar" : undefined}
        aria-haspopup="true"
        onClick={toggleMenu}
        color="inherit"
      >
        <Flag src={`/static/img/flags/${i18n.language}.png`} alt="English" />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorMenu}
        open={Boolean(anchorMenu)}
        onClose={closeMenu}
      >
        <MenuItem onClick={() => closeMenu('en')}>
          English
        </MenuItem>
        <MenuItem onClick={() => closeMenu('ru')}>
          Russian
        </MenuItem>
        <MenuItem onClick={() => closeMenu('il')}>
          Hebrew
        </MenuItem>
        <MenuItem onClick={() => closeMenu('es')}>
          Spanish
        </MenuItem>
      </Menu>
    </React.Fragment>
  )
}

const Header = () => {
  const { t } = useTranslation('common');

  const redirectToURL = (url) => {
    window.location.href = url;
  }

  return <React.Fragment>
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item>
            <NavLink to="/">
              <LogoContainer>
                <Logo src="/static/img/logo/logo.svg" slt="Application" />
                <LogoTitle>
                  <LogoHeading>{t('header.appTitle')}</LogoHeading><br />
                  <LogoSubHeading>{t('header.appSubTitle')}</LogoSubHeading>
                </LogoTitle>
              </LogoContainer>
            </NavLink>
          </Grid>
          <Grid item xs />
          <Grid item>
            <LanguageMenu />
            <Button variant="contained" onClick={() => redirectToURL(URL.LOGIN_URL)} color="primary">{t('header.login')}</Button>
            &nbsp;&nbsp;
            <SignupButton variant="contained" onClick={() => redirectToURL(URL.SIGNUP_URL)} color="primary">{t('header.signup')}</SignupButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  </React.Fragment>
};

export default connect()(withTheme(Header));
