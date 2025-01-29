import React from 'react'
import EachServicePage from '../../components/service/EachServicePage'
import { headlightRestoration } from '../../libs/services'
import { headlightRestorationResults } from '../../libs/service-results-carousel'

const HeadlightRestoration = () => {
  return (
    <>
      <title>Headlight Restoration - Cutting Edge Correction</title>
      <meta name="description"
        content="Headlight Restoration: Headlights are your vehicle’s first impression, but over time, they can dull and cloud. Our Headlight Restoration service removes grime, oxidation, and fog, restoring their sharp look. With precision restoration, you’ll not only see better but be seen better, eliminating dim lights and foggy lenses." />
      <EachServicePage service={headlightRestoration} serviceName="headlight-restoration" />
    </>
  )
}

export default HeadlightRestoration