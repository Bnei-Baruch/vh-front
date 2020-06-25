import React from 'react'
import Auth from 'config/Auth'
import PlanLayout from 'layouts/PlanLayout'

function Plan() {
  return (
    <>
      <Auth>
        <PlanLayout>
          Product
        </PlanLayout>
      </Auth>
    </>
  )
}

export default Plan
