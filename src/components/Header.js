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

const LogoSubHeading = styled.span`
    font-size : 14px;
    color : #40B3E0;
`;

function LanguageMenu() {
  const [anchorMenu, setAnchorMenu] = useState(null);

  const toggleMenu = event => {
    setAnchorMenu(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorMenu(null);
  };

  return (
    <React.Fragment>
      <IconButton
        aria-owns={Boolean(anchorMenu) ? "menu-appbar" : undefined}
        aria-haspopup="true"
        onClick={toggleMenu}
        color="inherit"
      >
        <Flag src="/static/img/flags/us.png" alt="English" />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorMenu}
        open={Boolean(anchorMenu)}
        onClose={closeMenu}
      >
        <MenuItem onClick={closeMenu}>
          English
        </MenuItem>
        <MenuItem onClick={closeMenu}>
          French
        </MenuItem>
        <MenuItem onClick={closeMenu}>
          German
        </MenuItem>
        <MenuItem onClick={closeMenu}>
          Dutch
        </MenuItem>
      </Menu>
    </React.Fragment>
  )
}

const Header = () => {
  const { t } = useTranslation('common');
  return <React.Fragment>
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item>
            <LogoContainer>
              <Logo src="/static/img/logo/logo.svg" slt="Application" />
              <LogoTitle>
                <LogoHeading>{t('header.appTitle')}</LogoHeading><br />
                <LogoSubHeading>{t('header.appSubTitle')}</LogoSubHeading>
              </LogoTitle>
            </LogoContainer>

          </Grid>
          <Grid item xs />
          <Grid item>
            <LanguageMenu />
            <Button variant="contained" color="primary">{t('header.login')}</Button>
            &nbsp;&nbsp;
            <Button variant="contained" color="primary">{t('header.signup')}</Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  </React.Fragment>
};

export default connect()(withTheme(Header));