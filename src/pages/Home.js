import { Button, Grid } from '@material-ui/core';
import { Container } from '@material-ui/core';
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import styled from "styled-components";
import URL from '../config/config';
import keycloakConfig from "../config/keycloakconfig";
import Keycloak from "keycloak-js";
const HomeContainer = styled.div`
    background-color: #fff;
    max-width: 1000px;
    margin: auto;
`;

const HeaderContainer = styled(Grid)`
    text-align: center
`;

const Header = styled.div`
    font-size: 6rem;
    font-weight: 300;
`;

const Subheading = styled.div`
    font-size: 1.3rem;
    text-align: center;
    font-weight: 300;
`;

const FeaturesContainer = styled(Grid)`
    padding: 10px;
    margin: 30px 0px;
`;

const Feature = styled(Grid)`
    padding: 0px 15px !important;
`;

const Featurehead = styled.div`
    font-size: 1.8rem;
    font-weight: 300;
    text-transform: uppercase;
`;

const FeaturePara = styled.div`
    font-size: 1.3rem;
    font-weight: 300;
    margin-top: 15px;
    margin-bottom: 15px;
`;

const BottomContainer = styled(Grid)`
    font-size: 1.3rem;
    font-weight: 300;
    text-align: center;
`;

const BottomButton = styled(Button)`
    margin: 30px 15px; 
    min-width: 115px;
    text-decoration: none !important;
`
const BottomButtonAlt = styled(Button)`
    margin: 30px 15px; 
    background-color: #fff;
    border: 1px solid #949494;
    min-width: 115px;
    color: #000;
    text-decoration: none !important;
    :hover {
        margin: 30px 15px; 
        background-color: #f8f8f8;
        border: 1px solid #949494;
        min-width: 115px;
        color: #000;
    }
`


export default function Home() {
    const { t } = useTranslation('common');
    useEffect(() => {
        const keycloak = Keycloak(keycloakConfig);
        keycloak.init({ onLoad: 'check-sso', checkLoginIframe: false })
            .then(authenticated => {
              if (authenticated) {
                  window.location.href = window.location.origin + '/dash';
              }
            })
      }, [])
    return (
        <Container>
            <HomeContainer>
                <Grid spacing={2}>
                    <HeaderContainer item justifyContent="center">
                        <img src={'/static/img/logo/house.png'} alt={'Home'} />
                        <br />
                        <Header>
                            {t('home.mainTitle')}
                        </Header>
                        <br />
                        <Subheading>
                            {t('home.mainSubtitle')}
                        </Subheading>
                    </HeaderContainer>
                </Grid>
                <br /><br /><br /><br />
                <FeaturesContainer container spacing={2}>
                    <Feature item sm={12} md={6} lg={6}>
                        <Featurehead>{t('home.feature.performance')}</Featurehead>
                        <FeaturePara>{t('home.feature.performanceDesc')}</FeaturePara>
                    </Feature>
                    <Feature item sm={12} md={6} lg={6}>
                        <Featurehead>{t('home.feature.features')}</Featurehead>
                        <FeaturePara>{t('home.feature.featuresDesc')}</FeaturePara>
                    </Feature>
                </FeaturesContainer>
                <FeaturesContainer container spacing={2}>
                    <Feature item sm={12} md={6} lg={6}>
                        <Featurehead>{t('home.feature.security')}</Featurehead>
                        <FeaturePara>{t('home.feature.securityDesc')}</FeaturePara>
                    </Feature>
                    <Feature item sm={12} md={6} lg={6}>
                        <Featurehead>{t('home.feature.physicalInfra')}</Featurehead>
                        <FeaturePara>{t('home.feature.physicalInfraDesc')}</FeaturePara>
                    </Feature>
                </FeaturesContainer>
                <Grid>
                    <BottomContainer span={12} justify="center">
                        {t('home.bottomText')}
                    </BottomContainer>
                    <BottomContainer span={12} justify="center">
                        <a href={URL.PAYMENT_URL}><BottomButton variant="contained" color="primary">{t('home.payUserFee')}</BottomButton></a>
                        <a href="mailto:help@kli.one"><BottomButtonAlt variant="contained" color="primary">{t('home.contactus')}</BottomButtonAlt></a>
                    </BottomContainer>
                </Grid>
            </HomeContainer>
        </Container>
    )
}