import React from 'react'
import Image from 'next/image'
import addressIcon from '@/images/address.png'
import phoneIcon from '@/images/Phone.png'
import mailIcon from '@/images/mail.png'
import facebook from '@/images/facebook.png'
import linkedin from '@/images/linkedin.png'
import xicon from '@/images/X-twitter.png'
// import instagram from '@/images/instagram.png'
import Link from 'next/link'
import logo from '@/images/white_logo.png'

export default function Footer() {
	return (
		<footer className="bg-[#142434] text-gray-300 w-full lg:px-21 px-6 py-12  md:px-12 ">
			<div className=" ">
						<Image src={logo} alt="Logo" className='h-24 w-auto mb-9' />
				<div className="grid  md:flex md:justify-between md:items-start  grid-cols-1 md:grid-cols-4	gap-8  ">
					<div className="   ">
						<h2 className="text-2xl MyH5_new text-white">Valeur Global Connect</h2>
						<p className="mt-3 text-sm text-gray-300 max-w-lg">French Agricultural Trade Facilitator connecting Europe <br/>
							 and Africa through trusted partnerships, <br/> regulatory compliance expertise, and sustainable trade solutions.</p>
							 <div className="mt-6 flex items-center gap-3">
							<a aria-label="LinkedIn" className="w-8 h-8 rounded-full bg-[#c8f6d1] flex items-center justify-center text-[#0f3740] hover:scale-105 duration-500 hover:shadow-sm transition-all" href="#">
								<Image src={linkedin} alt='linkedin' className=''/>
							</a>

							<a aria-label="X" className="w-8 h-8 rounded-full bg-[#c8f6d1] flex items-center justify-center text-[#0f3740] hover:scale-105 duration-500 hover:shadow-sm transition-all" href="#">
								<Image src={xicon} alt='xicon' className=''/>
							</a>

							<a aria-label="Facebook" className="w-8 h-8 rounded-full bg-[#c8f6d1] flex items-center justify-center text-[#0f3740] hover:scale-105 duration-500 hover:shadow-sm transition-all" href="#">
								<Image src={facebook} alt='facebook' className=''/>
							</a	>

							<a aria-label="Instagram" className="w-8 h-8 rounded-full bg-[#c8f6d1] flex items-center justify-center text-[#0ac499] hover:scale-105 duration-500 hover:shadow-sm transition-all" href="#">
								<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
									<rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
									<circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.5" />
									<circle cx="17.6" cy="6.4" r="0.6" fill="currentColor" />
								</svg>
							</a>
						</div>

						

						
					</div>
					<div className="  text-gray-300  	 ">
						<h3 className="text-white text-lg MyH5_new">Get in Touch</h3>
							<div className=" mt-3 flex items-center gap-3">
								<Image src={addressIcon} alt='address' className='w-5 h-5'/>
								<span className="text-sm">123 Avenue des Champs-Élysées75008 Paris, France</span>
							</div>

							<div className=" mt-3 flex items-center gap-3">
								<Image src={phoneIcon} alt='phone' className='w-5 h-5'/>
								<span className="text-sm">+33 1 42 96 12 34</span>
							</div>

							<div className=" mt-3 flex items-center gap-3">
								<Image src={mailIcon} alt='mail' className='w-5 h-5'/>
								<a className="text-sm hover:underline" href="mailto:paris@valeurglobalconnect.com">paris@valeurglobalconnect.com</a>
							</div>
								
						</div>


					<div className='  '>
						<h3 className="text-white text-lg MyH5_new">Quick Links</h3>
						<ul className="mt-3 space-y-3 md:grid md:grid-cols-2 gap-5 ">
							{/* <li><Link href="/" className="text-gray-300 hover:underline" >Home</Link></li> */}
							<li><Link href="/about" className="text-gray-300 hover:underline" >About Us</Link></li>
							<li><Link href="/market" className="text-gray-300 hover:underline" >Market</Link></li>
							<li><Link href="/trade" className="text-gray-300 hover:underline" >Trade</Link></li>
							<li><Link href="/trade" className="text-gray-300 hover:underline" >Resources</Link></li>

							<li><Link href="/deals" className="text-gray-300 hover:underline" >Deals</Link></li>
						</ul>
					</div>



					
				</div>

				<hr className="border-t border-gray-700 mt-8" />

				<div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4">
					<div className="text-sm text-gray-400">© 2025 Valeur Global Connect. All rights reserved.</div>

					<div className="flex items-center gap-6 text-sm">
						<a className="text-gray-300 hover:underline" href="#">Privacy Policy</a>
						<a className="text-gray-300 hover:underline" href="#">Terms of Service</a>
						<a className="text-gray-300 hover:underline" href="#">Cookie Policy</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

