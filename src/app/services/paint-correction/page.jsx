import React from 'react'
import EachServicePage from '../../components/service/EachServicePage'
import { paintCorrection } from '../../libs/services'
import { paintCorrectionResults } from '../../libs/service-results-carousel'

const PaintCorrection = () => {
  return (
    <>
      <EachServicePage service={paintCorrection} serviceImage={paintCorrectionResults} />
    </>
  )
}

export default PaintCorrection