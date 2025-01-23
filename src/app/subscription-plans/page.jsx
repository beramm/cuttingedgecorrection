import React from 'react'
import { subscriptionPlansContent } from '../libs/subscription-plans-content'
import SubscriptionPlansCard from '../components/card/subscription-plans-card/SubscriptionPlansCard'

const SubscriptionPlans = () => {
  return (
    <div
      style={{ backgroundImage: `url(/carbon_background.png)`, backgroundPosition: 'center' }}
      className="h-full w-full px-8 md:px-12 xl:px-0 pt-28 pb-8"
    >
      <div className="relative w-full mt-12">
        <div className="text-center text-5xl lg:text-6xl font-extrabold mb-12">
          <h1>
            CURATE YOUR{" "}
            <span className="bg-radial-gradient bg-clip-text text-transparent">
              EXPERIENCE
            </span>
          </h1>
          <p className="text-sm font-light mt-8">
            Introducing our exclusive subscription service!
            <br /> Our subscription plans are designed to provide you with consistent, high-quality care for your vehicle, ensuring it always looks its best.
            <br /> With convenient monthly payments and exclusive benefits, maintaining your car has never been easier.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {subscriptionPlansContent.map((eachPlan, index) => {
            return (
              <div
                key={index}
                className="transform transition-all duration-300 hover:scale-105"
              >
                <SubscriptionPlansCard data={eachPlan} />
              </div>
            )
          })}
        </div>

        <div className="justify-center text-center text-5xl lg:text-6xl font-extrabold mt-12 max-w-80 mx-auto">
          <p className="text-sm font-bold mt-8" style={{ color: '#515151' }}>
            <b>
              Subscription Terms & Conditions
            </b>
          </p>
          <p className="text-sm font-medium" style={{ color: '#515151' }}>
            Please refer to the &quot;Privacy Policy & TOS&quot; page via our website
            for in-depth information regarding our subscription services.
            Alternatively, use the link supplied below. Thankyou.
            <br /><a
              href="/privacy-policy-tos"
              style={{ color: '#00A2FF' }}
            >
              Privacy Policy & TOS
            </a>
          </p>
        </div>


      </div>
    </div>
  )
}

export default SubscriptionPlans