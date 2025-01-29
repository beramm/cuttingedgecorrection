import React from 'react'
import EachServicePage from '../../components/service/EachServicePage'
import { interiorDetailing } from '../../libs/services'
import { interiorDetailingResults } from '../../libs/service-results-carousel'

const InteriorDetailing = () => {
  return (
    <>
      <title>Interior Detailing - Cutting Edge Correction</title>
      <meta name="description" content="Interior Detailing: At Cutting Edge Correction, we ensure your vehicle’s interior feels brand new. We tackle every corner, seat, and surface to eliminate dirt, stains, and grime. From upholstery steam cleaning to leather conditioning, pet hair removal, and more, we cover it all. Elevate your driving experience and make your car feel like a luxury vehicle." />
      <EachServicePage service={interiorDetailing} serviceName="interior-detailing" />
    </>
  )
}

export default InteriorDetailing