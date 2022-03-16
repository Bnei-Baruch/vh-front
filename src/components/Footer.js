import React from "react";
import styled from "styled-components";

import {
  Grid,
  Hidden,
  List,
  ListItemText,
  ListItem as MuiListItem
} from "@material-ui/core";
import { useTranslation } from "react-i18next";

const Wrapper = styled.div`
  padding: ${props => props.theme.spacing(1) / 4}px
    ${props => props.theme.spacing(4)}px;
  background: ${props => props.theme.palette.common.white};
  position: relative;
`;

const ListItem = styled(MuiListItem)`
  display: inline-block;
  width: auto;
  padding-left: ${props => props.theme.spacing(2)}px;
  padding-right: ${props => props.theme.spacing(2)}px;

  &,
  &:hover,
  &:active {
    color: #000;
  }
`;

const DonateSection = styled.section`
  dir: rtl;
  position: absolute;
  left: ${props => props.plang === 'il' ? '59px' : 'none'};
  right: ${props => props.plang === 'il' ? 'none' : '59px'};
  bottom: 77px;
`;

const DonateButton = styled.button`
    dir: ${props => props.plang === 'il' ? 'rtl' : 'ltr'};
    background-color: #fff;
    border: none;
    border-radius: 24px;
    padding: 8px 10px;
    text-transform: uppercase;
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12);
`;

const DonateHeart = styled.span`
  color: #FC6719;
  margin-left: ${props => props.plang === 'il' ? '6px' : '4px'};
  margin-right: ${props => props.plang === 'il' ? '4px' : '6px'};
`;

const DonateLabel = styled.span`
  margin-right: ${props => props.plang === 'il' ? '0' : '8px'};
  margin-left: ${props => props.plang === 'il' ? '8px' : '0'};
`;

const DonateLink = styled.a`
  color: #1176D3;
  text-decoration: none;
`;

const DONATE_LINKS = {
  'il': { url: 'https://www.kab1.com/?utm_source=live_broadcast_kli_one&utm_medium=button&utm_campaign=donations&utm_id=donations&utm_term=heb&utm_content=header_button_donate'},
  'en': { url: 'https://www.kab1.com/en?utm_source=live_broadcast_kli_one&utm_medium=button&utm_campaign=donations&utm_id=donations&utm_term=eng&utm_content=header_button_donate'},
  'ru': { url: 'https://www.kab1.com/ru?utm_source=live_broadcast_kli_one&utm_medium=button&utm_campaign=donations&utm_id=donations&utm_term=rus&utm_content=header_button_donate'},
  'es': { url: 'https://www.kab1.com/es?utm_source=live_broadcast_kli_one&utm_medium=button&utm_campaign=donations&utm_id=donations&utm_term=spa&utm_content=header_button_donate'},
}

function Footer() {
  const { t } = useTranslation('common');
  const pageLang = localStorage.getItem("VH_LANG")?.toLowerCase() || 'en';

  const getDonateButton = () => {
    const link = DONATE_LINKS[pageLang];
    return (
      <DonateButton plang={pageLang}>
        <DonateHeart plang={pageLang}>❤</DonateHeart>
        <DonateLabel plang={pageLang}>
          <DonateLink href={link.url} target="_blank">
            {t('live.donate')}
          </DonateLink>
        </DonateLabel>
      </DonateButton>
    )
  }

  return (
    <Wrapper>
      <Grid container spacing={0}>
        <Hidden smDown>
          <Grid container item xs={12} md={6}>
            <List>
              <ListItem component="a" href="mailto:help@kli.one">
                <ListItemText primary={t('footer.support')} />
              </ListItem>
              <ListItem component="a" href="mailto:help@kli.one">
              <ListItemText primary={t('footer.helpCenter')} />
              </ListItem>
              <ListItem component="a" href="/terms">
                <ListItemText primary={t('footer.privacyAndSt')}/>
              </ListItem>
            </List>
          </Grid>
        </Hidden>
        <DonateSection plang={pageLang}>
          {getDonateButton()}
        </DonateSection>
      </Grid>
    </Wrapper>
  );
}

export default Footer;
