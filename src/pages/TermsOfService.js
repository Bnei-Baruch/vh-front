import React, { useEffect } from 'react'
import Iframe from 'react-iframe'
import { makeStyles } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'
import { Container } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { setAuthentication } from 'redux/actions/userActions'

const useStyles = makeStyles((theme) => ({
  root: {
    border: 0
  },
}))


function Tos() {
  const { i18n } = useTranslation('common');
  const lang = i18n.language.toUpperCase();
  const dispatch = useDispatch();
  const classes = useStyles()
  useEffect(() => {
    dispatch(setAuthentication(true));
  }, [dispatch])

  const tosURL = {
    "EN": "https://docs.google.com/document/d/e/2PACX-1vRGxXGLrshOu57ifcb2bgCOnIhsgZAAnb_zXjiweD6XEre_s-hK7fa0Flx_FxUBsFK7unny6-1LNtH6/pub?embedded=true",
    "RU": "https://docs.google.com/document/d/e/2PACX-1vQh_cPl4n5Ab5uMTiQ-NsAmzJ3Asxx3yl0sHxgXWVOYTB3aovHiB1UuwZTvP5Mc9F3xL0KRag0KkFie/pub?embedded=true",
    "ES": "https://docs.google.com/document/d/e/2PACX-1vT0AbbRQ4FEv1IrHdQg_xjDIMnzQ3xSg7Mx-g1cUe-5jawh480cp8XfBa4srGR-kn5Mn6vv6ZGI6G1a/pub?embedded=true",
    "IL": "https://docs.google.com/document/d/e/2PACX-1vS55LYnYroGyaFxx1ZnR9ftNOrmWbj8uh9PxYqGgNbxuK3wG3FwXwZkcYEJb6NOQQhcU8pv2XwH_D4K/pub?embedded=true"

  }

  return (
    <Container>
      <div style={{ height: "15000px", border: 0 }}>
        <Iframe
          width="100%"
          height="100%"
          className={classes.root}
          src={tosURL[lang]}
        />
      </div>
    </Container>
  )
}

export default Tos
