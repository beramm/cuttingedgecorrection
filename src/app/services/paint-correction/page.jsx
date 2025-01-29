import React from 'react'
import EachServicePage from '../../components/service/EachServicePage'
import { paintCorrection } from '../../libs/services'
import { paintCorrectionResults } from '../../libs/service-results-carousel'

const PaintCorrection = () => {
  return (
    <>
      <title>Ceramic Coating - Cutting Edge Correction</title>
      <meta name="description" content="Paint Correction: Paint Correction restores your vehicle’s paintwork to its original brilliance by removing scratches, swirl marks, and oxidation. This process reveals unmatched clarity and depth, enhancing both the appearance and long-term value of your car. Transform your vehicle with a shine that demands respect, achieving results like a freshly painted ride without the high cost." />
      <EachServicePage service={paintCorrection} serviceName="paint-correction" />
    </>
  )
}

export default PaintCorrection