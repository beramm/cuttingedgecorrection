import React from 'react'
import EachServicePage from '../../components/service/EachServicePage'
import { interiorDetailing } from '../../libs/services'
import { interiorDetailingResults } from '../../libs/service-results-carousel'

const InteriorDetailing = () => {
  return (
    <>
      <EachServicePage service={interiorDetailing} serviceName="interior-detailing" />
    </>
  )
}

export default InteriorDetailing