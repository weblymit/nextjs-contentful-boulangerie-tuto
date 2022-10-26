import React from "react";
import { H2 } from "../../helpers/Titles";
import CardProduct from "../cards/CardProduct";

export default function SectionProduct({ products }) {
	return (
		<div className='py-28 bg-[#e5dbd3]'>
			<div className='px-20'>
				<H2 title='Nos derniers produits' />
				<div className='pt-16 grid grid-cols-4 gap-3'>
					{/* verifie si product */}
					{products.length < 1 ? (
						<p>Chargement...</p>
					) : (
						products.map((product) => (
							<CardProduct key={product.sys.id} product={product} />
						))
					)}
				</div>
			</div>
		</div>
	);
}
