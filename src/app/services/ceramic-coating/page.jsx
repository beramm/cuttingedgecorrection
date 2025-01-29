import React from 'react'
import EachServicePage from '../../components/service/EachServicePage'
import { ceramicCoating } from '../../libs/services'

const CeramicCoating = () => {
	return (
		<>
			<title>Ceramic Coating - Cutting Edge Correction</title>
			<meta name="description" content="Ceramic Coating Benefits: A Ceramic Coating provides essential protection for your vehicle, creating a durable, hydrophobic layer that defends against dirt, water, UV damage, oxidation, and scratches. This helps preserve your car's paintwork, extend its lifespan, and reduce maintenance efforts, keeping your ride sharp and ready for anything." />

			<EachServicePage service={ceramicCoating} serviceName="ceramic-coatings" />
		</>
	)
}

export default CeramicCoating
