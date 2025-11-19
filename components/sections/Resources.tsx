import React from 'react'
import TitleSection from '../ui/TitleSection'
import ResourcesCard from '../ui/ResourcesCard'
import MyBtn_2 from '../ui/MyBtn_2'

export default function Resources() {
  return (
    <div className='flex flex-col items-center justify-center gap-6 px-8 w-full mt-20 mb-20'>

        <TitleSection Title='Resources' Description='Your gateway to expert knowledge, market intelligence, and trade support for
agricultural business between Europe and Nigeria.' />




<div className="grid md:grid-cols-2 gap-20 w-[90%] justify-between ">


<ResourcesCard Resource='Expert Advisory'
 Resource_title='Valeur Consulting'
  desc_header='Specialist Trade Advisory for Businesses & Policy Makers'
   desc_body='We provide tailored consulting solutions to unlock cross-border
opportunities:'

Offerings={["Export Readiness for Nigerian SMEs","Trade Policy Advisory for Governments","Bespoke Market Entry Strategies","EU market entry guidance and certification support"]}

How_it_works={["Needs Assessment","Solution Design","Execution Support","Ongoing Advisory"]} />




<ResourcesCard Resource='Weekly Updates'
 Resource_title='News & Insights'
  desc_header='Stay ahead with updates that matter'
   desc_body='Curated by our in-house trade analysts, updated weekly'

Offerings={["Market Trends - Data-driven commodity pricing and consumer demand","Policy Alerts - Regulatory changes in EU and Nigerian markets","Success Stories - Case studies of market breakthrough businesses","Industry Spotlights - Agri-innovation and sustainability deep-dives"]}

How_it_works={["Weekly Updates","Market Intelligence","Expert Analysis","Trend Forecasting"]} />



<ResourcesCard Resource='Premium Research'
 Resource_title='Market Reports'
  desc_header='Authoritative reports for competitive advantage'
   desc_body='Research and intelligence that gives you the edge'

Offerings={["Annual Agri-Trade Outlook - EU Nigeria trade forecasts","Sector Reports - Wine, cheese, grains, oils, fresh produce","Custom Intelligence - On-demand market data for your product"]}

Note='All reports are available for purchase or subscription through our
secure platform.'
How_it_works={["Data Collection","Analysis & Research","Report Generation","Secure Delivery"]} />


<ResourcesCard Resource='Weekly Updates'
 Resource_title='News & Insights'
  desc_header='Stay ahead with updates that matter'
   desc_body='Curated by our in-house trade analysts, updated weekly'

Offerings={["Market Trends - Data-driven commodity pricing and consumer demand","Policy Alerts - Regulatory changes in EU and Nigerian markets","Success Stories - Case studies of market breakthrough businesses","Industry Spotlights - Agri-innovation and sustainability deep-dives"]}

How_it_works={["Weekly Updates","Market Intelligence","Expert Analysis","Trend Forecasting"]} />








</div>


<div className='flex md:flex-row flex-col bg-mybg p-16 gap-6 w-[90%]'>

<div className='flex flex-col items-center  justify-center text-center gap-4'>

    <h1 className='MyH6'>Weekly Market Updates</h1>
    <p className='text-center'>Get the latest trends and policy
changes delivered to your inbox</p>
<MyBtn_2 name='Subscribe Now' />
</div>


<div className='flex flex-col items-center justify-center text-center  gap-4'>

    <h1 className='MyH6'>Ask Our Experts</h1>
    <p className='text-center'>Submit your trade questions to our
specialist team</p>
<MyBtn_2 name='Ask Question' />
</div>

<div className='flex flex-col items-center justify-center text-center  gap-4'>

    <h1 className='MyH6'>Free Market Report</h1>
    <p className='text-center text-mytext'>Download our latest EU-Nigeria trade
outlook report</p>
<MyBtn_2 name='Download PDF' />
</div>



</div>
      
    </div>
  )
}
