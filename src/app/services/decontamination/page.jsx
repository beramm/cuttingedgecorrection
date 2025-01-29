import React from 'react'
import EachServicePage from '../../components/service/EachServicePage'
import { decontamination } from '../../libs/services'

const Decontamination = () => {
  return (
    <>
      <title>Decontamination - Cutting Edge Correction</title>
      <meta name="description" content="Decontamination Process: Decontamination is the essential first step in achieving flawless paintwork. It removes embedded iron, tar, and grime, leaving the surface soft and smooth. Watching contaminants run off is satisfying, and if stubborn spots remain, we’re here to take care of them." />

      <EachServicePage service={decontamination} serviceName="decontamination" />
    </>
  )
}

export default Decontamination