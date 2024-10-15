import React, {useEffect} from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { setAuthentication } from 'redux/actions/userActions'
import FaqHE from './FaqHe';
import FaqEN from './FaqEn';
import FaqES from './FaqEs';
import FaqRU from './FaqRu';


function FAQ() {
  const { i18n } = useTranslation('common');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setAuthentication(true));
  }, [dispatch])

    let content = 1;
    switch (i18n.language) {
        case 'il': content = <FaqHE/>; break;
        case 'en': content = <FaqEN />; break;
        case 'es': content = <FaqES />; break;
        case 'ru': content = <FaqRU />; break;
        default: content = <FaqEN/>;
    };

  return (
    <Container>
      {content}
    </Container>
  )
}

export default FAQ;

