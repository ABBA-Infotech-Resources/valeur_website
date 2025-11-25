import React from 'react'
import TitleSection from '../ui/TitleSection'
import DealsCard from '../ui/DealsCard'
import Valeur_wine from '@/images/valeur_wine.jpg'
import Valeur_Cheese from '@/images/Valeur_Cheese.jpg'
import Valeur_Connect from '@/images/Valeur_Connect.jpg'

import Image from 'next/image'

export default function Deals() {
  return (
    <div className='flex flex-col  items-center justify-center lg:px-20 gap-4 px-8    p-8 mt-25'>
            <TitleSection
              Title='Deal'
              Description='Signature product lines and platforms that bridge EU quality with Nigerian market potential, showcasing our commitment to excellence in agricultural trade.'
              titleClass='animate-fade-in-up'
              descClass='animate-fade-in-up'
            />

      <div className='w-full grid grid-cols-1 md:grid-cols-2 items-center gap-12'>
        <div className='flex'>
          <DealsCard
            Product='Premium Product' 
            Product_title='Valeur Wines'
            desc_header='Premium Non-Alcoholic Sparkling Wines from Europe'
            desc_body='Traditional winemaking expertise offering sophistication without alcohol, distributed across Nigeria.'
            Key_features={[
              '100% non-alcoholic, halal-friendly',
              ' Suitable for all occasions',
              'Award-winning European vineyards',
              'Multiple flavour profiles',
            ]}
            How_We_Operate={["Import & Compliance", "Distribution Network", "Brand Activation"]}
          />
        </div>

        <div className='w-full overflow-hidden rounded-lg h-64 md:h-[408px]'>
          <Image src={Valeur_wine} alt='Valeur Wine' className='object-cover w-full h-full' />
        </div>
      </div>

      <div className='w-full grid grid-cols-1 md:grid-cols-2 items-center gap-12'>
        <div className='w-full order-1 md:order-0 overflow-hidden rounded-lg h-64 md:h-[408px]'>
          <Image src={Valeur_Cheese} alt='Valeur Cheese' className='object-cover w-full h-full' />
        </div>

        <div className='w-full'>
          <DealsCard
            Product='Artisan Quality'
            Product_title='Valeur Cheese'
            desc_header='Authentic European Cheese, Delivered Fresh to Nigeria'
            desc_body='Rich tradition of European cheesemaking brought to Nigerian consumers, ideal for retail, hospitality, and gourmet catering.'
            Key_features={[
              'Direct imports from certified EU producers',
              ' Diverse cheese varieties',
              'Soft and creamy to aged and sharp',
              'Retail, hotel, and catering ready',
            ]}
            How_We_Operate={["Cold-Chain Logistics", "Market Customisation", "Channel Development"]}
          />
        </div>
      </div>

      <div className='w-full grid grid-cols-1 md:grid-cols-2 items-center gap-12 mt-12'>
        <div className='w-full'>
          <DealsCard
            Product='Tech Platform'
            Product_title='Valeur Connect'
            desc_header='The Digital Bridge for EU–Nigeria Agri-Trade'
            desc_body='Proprietary tech platform linking European companies with verified Nigerian agricultural suppliers and supporting agri-innovation deployment.'
            Key_features={[
              'Verified supplier and buyer profiles',
              ' Real-time product availability',
              'Secure communication tools',
              'Deal facilitation features',
            ]}
            How_We_Operate={["Onboarding & Verification", "Matching Algorithm", "Deal Facilitation"]}
          />
        </div>

        <div className='w-full overflow-hidden rounded-lg h-64 md:h-[408px]'>
          <Image src={Valeur_Connect} alt='Valeur Connect' className='object-cover w-full h-full' />
        </div>
      </div>
    </div>
  )
}
