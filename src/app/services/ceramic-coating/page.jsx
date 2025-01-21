import React from 'react'
import EachServicePage from '../../components/service/EachServicePage'
import { ceramicCoating } from '../../libs/services'

const CeramicCoating = () => {
	return (
		<>
			<EachServicePage service={ceramicCoating} serviceName="ceramic-coatings" />
		</>
	)
}

export default CeramicCoating
