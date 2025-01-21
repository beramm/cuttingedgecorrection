import React from 'react'
import EachServicePage from '../../components/service/EachServicePage'
import { decontamination } from '../../libs/services'

const Decontamination = () => {
  return (
    <>
      <EachServicePage service={decontamination} serviceName="decontamination" />
    </>
  )
}

export default Decontamination