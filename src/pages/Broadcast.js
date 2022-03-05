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
  margin: 0 10px 0 2px;
  padding: 0;
`;

const DonateButton = styled(Button)`
    background-color: #1176D3;
    border-radius: 24px;
    color: #fff;
    padding: 8px 10px;
    text-transform: uppercase;
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12);
`;

const DonateHeart = styled.span`
  color: #FC6719;
  margin-left: 4px;
  margin-right: 6px;
`;

const DonateLabel = styled.span`
  color: #fff;
  margin-right: 8px;
`;

const getBroadCast = (lang) => {
  return axios.post(`https://kab.tv/live/api/heartbeat`, {
    "lang": lang,
    "bitrate": 500
  }).then(res => res.data);
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
    console.log(code);
    setSelectedLang(code);
    localStorage.setItem("VH_BROADCAST_LANG", getCountryCode(code));
  }
  return (
    <>
      <Helmet title={t('live.name')} />

      <Grid container spacing={10}>
        <Grid item xs={12} sm={12} >
          <PlayerContainer>
            <Grid container spacing={10}>
              <LanguageContainer item xs={12} sm={12}>
                <LanguageContainerLeftPart>
                  <WorldIcon />
                  <LiveLang>
                    &nbsp; {t('live.liveLanguage')}
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
                            return <MenuItem key={languages[keys].Name} value={keys}><img src={`/static/img/flags/${getCountryCode(keys)}.png`} width='15' alt /> &nbsp; {languages[keys].Name}</MenuItem>
                          })
                        }
                      </Select>
                    </FormControl>
                </LanguageContainerLeftPart>
                <DonateButton>
                  <DonateHeart>&hearts;</DonateHeart>
                  <DonateLabel>{t('live.donate')}</DonateLabel>
                </DonateButton>
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
