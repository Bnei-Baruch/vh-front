import React from 'react'
import {template} from 'lodash';
import {useSelector} from 'react-redux'

function I18(props) {
  const i18n = useSelector(state => state.i18n)
  const {children} = props
  // lang, obj are from the store TODO
  let tx = (i18n.dictionary[children.replace(/ /g,'')] || `${children}*`);
  return (
    <>
      {tx && template(tx)(props.obj || {})}
    </>
  )
}

export default I18
