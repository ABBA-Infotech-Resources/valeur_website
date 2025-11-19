import React from 'react'
import address from '@/images/address.png'
import phone from '@/images/Phone.png'
import mail from '@/images/mail.png'
import Image from 'next/image'

const IconLocation = ({ className = 'w-5 h-5 text-gray-400' }: { className?: string }) => (
	

<Image src={address} alt='address' className={className}/>

  
)

const IconPhone = ({ className = 'w-5 h-5 text-gray-400' }: { className?: string }) => (
	<Image src={phone} alt='address' className={className}/>

)

const IconMail = ({ className = 'w-5 h-5 text-gray-400' }: { className?: string }) => (
	<Image src={mail} alt='address' className={className}/>

)

export default function OurOffice() {
	return (
		<div className=" h-full border-2 rounded-lg border-mysec p-6 bg-white">
			<h3 className="text-2xl font-semibold text-[#0f3740]">Our Offices</h3>

			<div className="mt-5">
				<h4 className="font-medium text-sm text-gray-700">Headquarters - Paris, France</h4>

				<div className="mt-3 space-y-3 text-gray-600">
					<div className="flex items-start gap-3">
						<IconLocation />
						<span className="text-sm">123 Avenue des Champs-Élysées75008 Paris, France</span>
					</div>

					<div className="flex items-start gap-3">
						<IconPhone />
						<span className="text-sm">+33 1 42 96 12 34</span>
					</div>

					<div className="flex items-start gap-3">
						<IconMail />
						<span className="text-sm">paris@valeurglobalconnect.com</span>
					</div>
				</div>
			</div>

			<div className="mt-6">
				<h4 className="font-medium text-sm text-gray-700">Subsidiary - Lagos, Nigeria</h4>

				<div className="mt-3 space-y-3 text-gray-600">
					<div className="flex items-start gap-3">
						<IconLocation />
						<span className="text-sm">Plot 123, Victoria Island Lagos, Nigeria</span>
					</div>

					<div className="flex items-start gap-3">
						<IconPhone />
						<span className="text-sm">+234 1 234 5678</span>
					</div>

					<div className="flex items-start gap-3">
						<IconMail />
						<span className="text-sm">lagos@valeurglobalconnect.com</span>
					</div>
				</div>
			</div>

			<div className="mt-6">
				<h4 className="text-lg font-semibold text-[#0f3740]">Quick Contact</h4>
				<div className="mt-3 text-gray-600">
					<div className="font-medium text-sm">General Inquiries</div>
					<div className="flex items-center gap-3 mt-2">
						<IconMail />
						<span className="text-sm">info@valeurglobalconnect.com</span>
					</div>
				</div>
			</div>
		</div>
	)
}

