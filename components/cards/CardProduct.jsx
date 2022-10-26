import Link from "next/link";

export default function CardProduct({ product }) {
	const { title, petiteDescription, prix, featuredImage, slug } =
		product.fields;
	return (
		<div className='max-w-sm shadow bg-gray-50'>
			<Link href={`/products/${slug}`}>
				<img src={featuredImage.fields.file.url} alt='tchoupi' className='' />
				<div className='p-4'>
					<p className='font-bold text-xl'>{title}</p>
					<p>{petiteDescription}</p>
					<p className='text-right font-black'>{prix}€</p>
				</div>
			</Link>
		</div>
	);
}
