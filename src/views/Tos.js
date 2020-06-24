import React from 'react'

import {useSelector} from 'react-redux'


function Tos() {
  const lang = useSelector(state => state.i18n.lang)
  return (
    <div>
      <h1>
        Lang is {lang}
      </h1>
      
    </div>
  )
}

export default Tos
