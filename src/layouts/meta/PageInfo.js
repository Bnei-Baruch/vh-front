import React from 'react'
import { Helmet } from 'react-helmet-async'


const PageInfo = (props) => {
  const {title, description} = props
  return(
    <>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta charset="utf-8" name="google" content="notranslate" />
    </Helmet>
    </>
  )

}
export default PageInfo
