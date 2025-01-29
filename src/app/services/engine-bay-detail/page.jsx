import React from 'react'
import EachServicePage from '../../components/service/EachServicePage'
import { engineBayRetail } from '../../libs/services'
import { engineBayDetailResults } from '../../libs/service-results-carousel'

const EngineBayDetail = () => {
  return (
    <>
      <title>Engine Bay Detail - Cutting Edge Correction</title>
      <meta name="description" content="Engine Bay Detailing: The engine bay is the heart of your vehicle, but dirt, oil, and debris can hide in hard-to-reach places. Our Engine Bay Detailing service cleans and restores every component, enhancing both the appearance and performance of your car. With meticulous attention to detail, your engine will run smoother and look fresh, helping your car perform at its best." />
      <EachServicePage service={engineBayRetail} serviceName="engine-bay-detail" />
    </>
  )
}

export default EngineBayDetail