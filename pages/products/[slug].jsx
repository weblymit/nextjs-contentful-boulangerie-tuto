import Layout from "../../components/layout/Layout";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

// connexion a contentful
const client = createClient({
	space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
	accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

// get all slugs
export async function getStaticPaths() {
	// recupere data
	const datas = await client.getEntries({ content_type: "boulangerie" });

	// Get all slugs
	const slugs = datas.items.map((data) => ({
		params: { slug: data.fields.slug },
	}));

	return {
		paths: slugs,
		fallback: false, // can also be true or 'blocking'
	};
}

// je recupere les data en fonction des slug recuperer par getStaticPaths
export async function getStaticProps({ params }) {
	// recupere les datas en fonction des slugs de contentful
	const response = await client.getEntries({
		content_type: "boulangerie",
		"fields.slug": params.slug,
	});

	// je stoch ma reponse dans une cariable product
	const product = response.items;

	return {
		// Passed to the page component as props
		props: { product: product[0] },
	};
}

export default function Show({ product }) {
	const { title, description, prix, featuredImage, images } = product.fields;
	return (
		<Layout>
			<div className='px-20 pt-28 pb-16 flex space-x-6'>
				{/* image produit */}
				<div className=''>
					<img
						src={featuredImage.fields.file.url}
						alt={`Mito boulangerie ${title}`}
						className=''
					/>
				</div>
				{/* description produit */}
				<div className=''>
					<p className='text-4xl font-black pb-4 text-[#612802]'>{title}</p>
					<div>{documentToReactComponents(description)}</div>
					<p className='font-black pt-12 text-3xl'>
						<span className='text-white bg-[#612802] p-4 rounded-xl'>
							{prix}€
						</span>
					</p>
				</div>
			</div>
			<div className='px-20 pb-20'>
				<p className='uppercase text-2xl pb-5 text-[#612802] font-black'>
					Autres photo
				</p>
				<div className='grid grid-cols-4 gap-4'>
					{images.map((image, i) => (
						<img
							key={i}
							src={image.fields.file.url}
							alt={`Mito boulangerie ${title}`}
							className=''
						/>
					))}
				</div>
			</div>
		</Layout>
	);
}
