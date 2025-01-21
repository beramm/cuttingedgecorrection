import React from 'react'
import EachServicePage from '../../components/service/EachServicePage'
import { decontamination } from '../../libs/services'
import { decontaminationResults } from '../../libs/service-results-carousel'

const Decontamination = () => {
  return (
    <>
      <EachServicePage service={decontamination} serviceImage={decontaminationResults} />
    </>
  )
}

export default Decontamination