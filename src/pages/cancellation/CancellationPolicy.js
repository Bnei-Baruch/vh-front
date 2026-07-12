import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { setAuthentication } from 'redux/actions/userActions'
import CancellationHe from './CancellationHe'
import CancellationEn from './CancellationEn'
import CancellationRu from './CancellationRu'
import CancellationEs from './CancellationEs'

function CancellationPolicy() {
  const { i18n } = useTranslation('common')
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setAuthentication(true))
  }, [dispatch])

  let content
  switch (i18n.language) {
    case 'il': content = <CancellationHe />; break
    case 'ru': content = <CancellationRu />; break
    case 'es': content = <CancellationEs />; break
    default:   content = <CancellationEn />
  }

  return (
    <Container>
      {content}
    </Container>
  )
}

export default CancellationPolicy
