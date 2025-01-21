import React from 'react'
import EachServicePage from '../../components/service/EachServicePage'
import { engineBayRetail } from '../../libs/services'
import { engineBayDetailResults } from '../../libs/service-results-carousel'

const EngineBayDetail = () => {
  return (
    <>
      <EachServicePage service={engineBayRetail} serviceName="engine-bay-detail" />
    </>
  )
}

export default EngineBayDetail