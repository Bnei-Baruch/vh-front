import React from 'react'
import SimpleLayout from 'layouts/SimpleLayout'
import HeroSimple from 'components/HeroSimple'
import Row from 'components/Row'
import DoubleCTA from 'components/DoubleCTA'
import I18 from 'components/I18'

function Home() {

  return (
    <SimpleLayout>
      <HeroSimple 
        title={<I18>main.title</I18>}
        description={<I18>main.subtitle</I18>}
        imgSrc="/house.png"
        imgAlt={<I18>main.title</I18>}
      />
      <Row 
        cols={[
          { 
            title:<I18>main.performance.title</I18>,
            body:<I18>main.performance.body</I18>
          },
          {
            title:<I18>main.features.title</I18>,
            body:<I18>main.features.body</I18>
          }
        ]} />
        <Row 
          cols={[
          { 
            title:<I18>main.security.title</I18>,
            body:<I18>main.security.body</I18>
          },
          {
            title:<I18>main.physical.title</I18>,
            body:<I18>main.physical.body</I18>
          }
        ]} />
        
        <DoubleCTA />

    </SimpleLayout>
  )
}

export default Home
    