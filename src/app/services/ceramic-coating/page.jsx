import React from 'react'
import EachServicePage from '../../components/service/EachServicePage'
import { ceramicCoating } from '../../libs/services'
import { ceramicCoatingResults } from '../../libs/service-results-carousel'

const CeramicCoating = () => {
	return (
		<>
			<EachServicePage service={ceramicCoating} serviceImage={ceramicCoatingResults} />
		</>
	)
}

export default CeramicCoating
