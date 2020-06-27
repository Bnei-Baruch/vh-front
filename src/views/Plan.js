import React from 'react'
import Auth from 'config/Auth'
import {useSelector} from 'react-redux'
import PlanLayout from 'layouts/PlanLayout'

import ProductHeader from 'components/ProductHeader'
import ProductSlider from 'components/ProductSlider'
import ProductForm from 'components/ProductForm'
import Spacer from 'components/Spacer'

function Plan() {
  const direction =  useSelector(state => state.i18n.direction)
  return (
    <>
      <Auth>
        <PlanLayout direction={direction}>
          <ProductHeader />
          <ProductSlider />
          <ProductForm />
          <Spacer h={50}/>
        </PlanLayout>
      </Auth>
    </>
  )
}

export default Plan
