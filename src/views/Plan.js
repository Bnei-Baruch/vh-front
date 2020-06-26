import React from 'react'
import Auth from 'config/Auth'
import {useSelector} from 'react-redux'
import PlanLayout from 'layouts/PlanLayout'

import ProductHeader from 'components/ProductHeader'
import ProductSlider from 'components/ProductSlider'

function Plan() {
  const direction =  useSelector(state => state.i18n.direction)
  return (
    <>
      <Auth>
        <PlanLayout direction={direction}>
          <ProductHeader />
          <ProductSlider />
          Product
        </PlanLayout>
      </Auth>
    </>
  )
}

export default Plan
