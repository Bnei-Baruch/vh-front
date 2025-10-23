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
import LanguageIcon from '@material-ui/icons/Language';
import { Button } from "@material-ui/core";
import { useTranslation } from "react-i18next";
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
    color: white;
  }
  span {
    color: white;
    font-size: 16px;
    font-weight: 500;
  }
  :hover {
    background-color: transparent !important;
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
  height: 80px;
  
  @media (max-width: ${props => props.theme.breakpoints.values.md}px) {
    height: 60px;
  }
`;

const SignupButton = styled(Button)`
    background-color: #fff;
    border: 1px solid #949494;
    color: #000;
    text-decoration: none !important;
    font-size: 16px;
    font-weight: 500;
    :hover {
        background-color: #f8f8f8;
        border: 1px solid #949494;
        color: #000;
    }
`;

const LoginButton = styled(Button)`
    font-size: 16px;
    font-weight: 500;
`;

function LanguageMenu() {
  const [anchorMenu, setAnchorMenu] = useState(null);

  const [lang, setLang] = useState({
    "lang": "English",
    "code": "US"
  });

  const { i18n } = useTranslation('common');
  console.log(typeof i18n.options.resources)

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
        <LanguageIcon /> &nbsp;
        {i18n.language?.toUpperCase()}
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
  const { t, i18n } = useTranslation('common');

  const redirectToURL = (url) => {
    window.location.href = url;
  }

  // Determine which logo to use based on language
  const logoSrc = i18n.language === 'il' ? '/static/img/logo/heb-logo.png' : '/static/img/logo/en-logo.png';

  return <React.Fragment>
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item>
            <NavLink to="/">
              <LogoContainer>
                <Logo src={logoSrc} alt="Application" />
              </LogoContainer>
            </NavLink>
          </Grid>
          <Grid item xs />
          <Grid item>
            <LanguageMenu />
            <LoginButton variant="contained" onClick={() => redirectToURL(window.location.origin + "/dash")} color="primary">{t('header.login')}</LoginButton>
            &nbsp;&nbsp;
            <SignupButton variant="contained" onClick={() => redirectToURL(window.APP_CONFIG.SIGNUP_URL)} color="primary">{t('header.signup')}</SignupButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  </React.Fragment>
};

export default connect()(withTheme(Header));
