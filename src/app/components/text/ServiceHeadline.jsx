import React from 'react'

const ServiceHeadline = ({ serviceName }) => {
  if (serviceName === 'Ceramic Coating') {
    return (
      <h1>
        THE {""}
        <span className="bg-radial-gradient bg-clip-text text-transparent">
          INVESTMENT
        </span>
        {""} THAT PAYS OFF
      </h1>
    )
  }

  if (serviceName === 'Paint Correction') {
    return (
      <h1>
        PERFECTING YOUR VEHICLES {""}
        <span className="bg-radial-gradient bg-clip-text text-transparent">
          PRESENCE
        </span>
      </h1>
    )
  }

  if (serviceName === 'Decontamination') {
    return (
      <h1>
        THE START OF SOMETHING {""}
        <span className="bg-radial-gradient bg-clip-text text-transparent">
          FLAWLESS
        </span>
      </h1>
    )
  }

  if (serviceName === 'Interior Detailing') {
    return (
      <h1> 
        <span className="bg-radial-gradient bg-clip-text text-transparent">
          BEAUTY
        </span>
        {""} GOES BEYOND THE SURFACE
      </h1>
    )
  }

  if (serviceName === 'Headlight Restoration') {
    return (
      <h1>
        <span className="bg-radial-gradient bg-clip-text text-transparent">
          LOREM
        </span>
        {""} IPSUM
      </h1>
    )
  }

  if (serviceName === 'Engine Bay Detail') {
    return (
      <h1>
        <span className="bg-radial-gradient bg-clip-text text-transparent">
          LOREM
        </span>
        {""} IPSUM
      </h1>
    )
  }
}

export default ServiceHeadline