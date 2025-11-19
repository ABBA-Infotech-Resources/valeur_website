import Image from 'next/image'
import React from 'react'
import Service_1 from '@/images/Slider/Service_1.jpg'
import list from "@/images/list.png"
import ServiceCard from '../ui/ServiceCard'
import TitleSection from '../ui/TitleSection'

export default function OurService() {
  return (
    <div className='flex flex-col gap-6 items-center justify-center lg:px-20 p-8 mt-20'>
        
      <TitleSection Title='Our Services' Description='Strategic pathways to lasting trade relationships. As a French-based company with deep networks in 
Nigeria and West Africa, we deliver precision, trust, and market intelligence every step of the way.'/>

      <div className=' w-[90%] overflow-hidden rounded-lg '>

        <Image src={Service_1} className='object-cover w-full ' alt='Valeur_service'/>
        


      </div>

<div className="grid md:grid-cols-2 grid-cols-1 justify-between w-[90%]  gap-20">





<ServiceCard
 Service_no='Service 1' 
 Service='Trade Facilitation'
  Service_desc='Your trusted intermediary connecting agricultural producers, 
exporters, and importers between Europe and Nigeria.' 
How_it_works={["Needs Assessment & Consultation","Partner Identification & Vetting","Due Diligence & Verification","Negotiation & Contracting","Logistics Coordination","Post-Trade Support"]}
Onboarding={["Submit online trade inquiry form","Receive tailored proposal","Sign facilitation agreement"]}/>


<ServiceCard
 Service_no='Service 2' 
 Service='Market Access Support'
  Service_desc='Helping Nigerian businesses penetrate EU markets and
assisting European firms in scaling into West Africa.' 
How_it_works={["Market Analysis ","Compliance Audit","Certification Guidance","Distribution Planning","Market Launch"]}
Onboarding={["Book market readiness assessment","Receive compliance roadmap","Begin execution with VGC support"]}/>

<ServiceCard
 Service_no='Service 3' 
 Service='B2B & B2G Matchmaking'
  Service_desc='Connecting businesses to businesses and businesses to
government agencies for sustainable partnerships.' 
How_it_works={["Opportunity Profiling","Partner Search & Identification","Introduction & Meeting Facilitation","Deal Structuring & Agreements"]}
Onboarding={["Provide business profile","Receive vetted prospect shortlist","Engage in facilitated meetings"]}/>

<ServiceCard
 Service_no='Service 4' 
 Service='Agri Value Chain Consulting'
  Service_desc='Insights and strategies for every stage of the agricultural
value chain — from farm to fork.' 
How_it_works={["Value Chain Mapping","Feasibility Studies","Operational Advisory","Partnership Development"]}
Onboarding={["Complete consulting intake form","Review advisory plan","Engage in consulting sessions"]}/>





</div>






    </div>
  )
}
