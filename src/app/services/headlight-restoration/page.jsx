import React from 'react'
import EachServicePage from '../../components/service/EachServicePage'
import { headlightRestoration } from '../../libs/services'
import { headlightRestorationResults } from '../../libs/service-results-carousel'

const HeadlightRestoration = () => {
  return (
    <>
      <EachServicePage service={headlightRestoration} serviceName="headlight-restoration" />
    </>
  )
}

export default HeadlightRestoration