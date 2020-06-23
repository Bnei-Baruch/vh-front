import React from 'react'
import SimpleLayout from 'layouts/SimpleLayout'
import HeroSimple from 'components/HeroSimple'

import {
  Typography 
} from '@material-ui/core'

function Home() {

  return (
    <SimpleLayout>
      <HeroSimple 
        title="Title"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        imgSrc="/house.png"
        imgAlt="alt text"

      />

        <Typography>
          Home
        </Typography>
    </SimpleLayout>
  )
}

export default Home
    