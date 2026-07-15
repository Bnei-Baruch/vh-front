import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { setAuthentication } from 'redux/actions/userActions'
import TermsHe from './TermsHe'
import TermsEn from './TermsEn'
import TermsRu from './TermsRu'
import TermsEs from './TermsEs'

function TermsOfService() {
  const { i18n } = useTranslation('common')
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setAuthentication(true))
  }, [dispatch])

  let content
  switch (i18n.language) {
    case 'il': content = <TermsHe />; break
    case 'ru': content = <TermsRu />; break
    case 'es': content = <TermsEs />; break
    default:   content = <TermsEn />
  }

  return (
    <Container>
      {content}
    </Container>
  )
}

export default TermsOfService
