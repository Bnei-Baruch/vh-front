import React from 'react'
import Iframe from 'react-iframe'

import {useSelector} from 'react-redux'

import SimpleLayout from 'layouts/SimpleLayout'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    border: 0
  },
}))


function Tos() {
  const lang = useSelector(state => state.i18n.lang)
  const classes = useStyles()
  
  const tosURL = {
    "EN": "https://docs.google.com/document/d/e/2PACX-1vSq-qh5QyLqUEgRb1udvez0SDENkxhHwEoUvRMDvj_fUUde4PI4sapi6fg0WIp6xwcfTNJuW0h0kBAM/pub?embedded=true",
    "RU": "https://docs.google.com/document/d/e/2PACX-1vSq-qh5QyLqUEgRb1udvez0SDENkxhHwEoUvRMDvj_fUUde4PI4sapi6fg0WIp6xwcfTNJuW0h0kBAM/pub?embedded=true",
    "SP": "https://docs.google.com/document/d/e/2PACX-1vSq-qh5QyLqUEgRb1udvez0SDENkxhHwEoUvRMDvj_fUUde4PI4sapi6fg0WIp6xwcfTNJuW0h0kBAM/pub?embedded=true",
    "HE": "https://docs.google.com/document/d/e/2PACX-1vRGxXGLrshOu57ifcb2bgCOnIhsgZAAnb_zXjiweD6XEre_s-hK7fa0Flx_FxUBsFK7unny6-1LNtH6/pub?embedded=true"
  }
  
  return (
    <SimpleLayout>
    <div style={{height: "15000px", border: 0}}>
        <Iframe 
          width="100%"
          height="100%"
          className={classes.root}
          src={tosURL[lang]} 
        />
    </div>
    </SimpleLayout>
  )
}

export default Tos
