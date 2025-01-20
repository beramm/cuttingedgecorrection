import React from 'react'
import EachServicePage from '../../components/service/EachServicePage'
import { interiorDetailing } from '../../libs/services'
import { interiorDetailingResults } from '../../libs/service-results-carousel'

const InteriorDetailing = () => {
  return (
    <>
      <EachServicePage service={interiorDetailing} serviceImage={interiorDetailingResults} />
    </>
  )
}

export default InteriorDetailing