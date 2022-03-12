import { Button, FormControl, Grid, makeStyles, MenuItem, Select, TextField } from '@material-ui/core';
import React from 'react'
import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import ReactHlsPlayer from 'react-hls-player';
import { useDispatch } from 'react-redux'
import { setAuthentication } from 'redux/actions/userActions';
import PublicIcon from '@material-ui/icons/Public';
import axios from 'axios';
import { getCountryCode, getCustomCodeFromCoutryCode } from 'utils';
const useStyles = makeStyles((theme) => ({
  rootFirstSelect: {
    padding: "10px"
  },
  rootSecondSelect: {
    padding: "10px 80px"
  }
}));
const PlayerContainer = styled.div`
  max-width: 800px;
  width: 100%;
  margin: auto;
`;

const WorldIcon = styled(PublicIcon)`
`;

const LanguageContainerLeftPart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LanguageContainer = styled(Grid)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px !important;
`;

const LiveLang = styled.span`
  margin-right: ${props => props.plang === 'il' ? '6px' : '10px'};
  margin-left: ${props => props.plang === 'il' ? '10px' : '6px'};
  padding: 0;
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

const getBroadCast = (lang) => {
  return axios.post(`https://kab.tv/live/api/heartbeat`, {
    "lang": lang,
    "bitrate": 500
  }).then(res => res.data);
}

const DONATE_LINKS = {
  'il': { url: 'https://www.kab1.com/?utm_source=live_broadcast_kli_one&utm_medium=button&utm_campaign=donations&utm_id=donations&utm_term=heb&utm_content=header_button_donate'},
  'en': { url: 'https://www.kab1.com/en?utm_source=live_broadcast_kli_one&utm_medium=button&utm_campaign=donations&utm_id=donations&utm_term=eng&utm_content=header_button_donate'},
  'ru': { url: 'https://www.kab1.com/ru?utm_source=live_broadcast_kli_one&utm_medium=button&utm_campaign=donations&utm_id=donations&utm_term=rus&utm_content=header_button_donate'},
  'es': { url: 'https://www.kab1.com/es?utm_source=arvut_app&utm_medium=button&utm_campaign=donations&utm_id=donations&utm_term=spa&utm_content=button_donate'},
}

export default function Broadcast() {
  const classes = useStyles();
  const [languages, setLanguages] = React.useState([])
  const [selectedLang, setSelectedLang] = React.useState("eng")
  const { t } = useTranslation('common');
  const [qText, setQText] = React.useState('');
  const dispatch = useDispatch();
  const getSourceURL = (lang) => {
    return `https://edge3.uk.kab.tv/live/${lang}-medium/playlist.m3u8`;
  }
  React.useEffect(() => {
    const broadCastLag = localStorage.getItem("VH_BROADCAST_LANG");
    if (broadCastLag || localStorage.getItem("VH_LANG")) {
      setSelectedLang(getCustomCodeFromCoutryCode(broadCastLag || localStorage.getItem("VH_LANG").toLowerCase()))
    }
    getBroadCast(selectedLang).then(res => {
      if (res.Languages) {
        setLanguages(res.Languages);
      }
    })
    dispatch(setAuthentication(true));
  }, [])

  const updateBroadcastLang = (code) => {
    setSelectedLang(code);
    localStorage.setItem("VH_BROADCAST_LANG", getCountryCode(code));
  }

  const pageLang = localStorage.getItem("VH_LANG").toLowerCase();

  console.log(pageLang);

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
    <>
      <Helmet title={t('live.name')} />

      <Grid container spacing={10}>
        <Grid item xs={12} sm={12} >
          <PlayerContainer>
            <Grid container spacing={10}>
              <LanguageContainer plang={pageLang} item xs={12} sm={12}>
                <LanguageContainerLeftPart>
                  <WorldIcon />
                  <LiveLang plang={pageLang}>
                     {t('live.liveLanguage')}
                  </LiveLang>
                    <FormControl variant="outlined">
                      <Select
                        classes={{ root: classes.rootFirstSelect }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectedLang}
                        onChange={(e) => updateBroadcastLang(e.target.value)}
                      >
                        {
                          Object.keys(languages).map((keys) => {
                            return <MenuItem key={languages[keys].Name} value={keys}><img src={`/static/img/flags/${getCountryCode(keys)}.png`} width='15' alt={getCountryCode(keys)} /> &nbsp; {languages[keys].Name}</MenuItem>
                          })
                        }
                      </Select>
                    </FormControl>
                </LanguageContainerLeftPart>
                <section className="donate">
                  {getDonateButton()}
                </section>
              </LanguageContainer>
              <Grid item xs={12} sm={12}>
                <ReactHlsPlayer
                  src={getSourceURL(selectedLang)}
                  autoPlay={false}
                  controls={true}
                  width="100%"
                  height="100%"
                />
              </Grid>
              {/* <Grid item xs={12} sm={12}>
                <div>
                  {t('live.questions')}
                </div>
                <br />
                <div>
                  <TextField
                    id="outlined-multiline-flexible"
                    label={t('live.yourQuestion')}
                    variant="outlined"
                    multiline
                    fullWidth
                    maxRows={4}
                    value={qText}
                    onChange={(e) => setQText(e.target.value)}
                  />
                </div>
                <br />
                <Button variant="contained" color="primary">{t('live.postYourQuestion')}</Button>
              </Grid> */}
            </Grid>
          </PlayerContainer>
        </Grid>
      </Grid>
    </>
  )
}
