import Link from "next/link";
import React from "react";

export default function Navbar() {
	return (
		<div className='py-6 bg-[#774220] text-white px-20 flex justify-between items-center'>
			{/* logo */}
			<div>
				<Link href='/'>
					<p className='font-black text-2xl'>Mito Boulangerie</p>
				</Link>
			</div>
			{/* nav item */}
			<div className='space-x-5'>
				<Link href='/about'>Qui sommes nous ?</Link>
			</div>
		</div>
	);
}
