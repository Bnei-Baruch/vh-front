import React from 'react'
import { Helmet } from 'react-helmet-async'


const PageInfo = (props) => {
  const {title, description} = props
  return(
    <>
    <Helmet>
      <title>{title}</title>
      <link href="https://fonts.googleapis.com/css2?family=Assistant:wght@200;300;400;700;800&display=swap" rel="stylesheet" />
      <meta name="description" content={description} />
      <meta charset="utf-8" name="google" content="notranslate" />
    </Helmet>
    </>
  )

}
export default PageInfo
