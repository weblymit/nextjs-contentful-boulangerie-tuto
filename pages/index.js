import Hero from "../components/Hero";
import SectionHello from "../components/homepage/SectionHello";
import SectionProduct from "../components/homepage/SectionProduct";
import Layout from "../components/layout/Layout";
import { createClient } from "contentful";

export default function Home({ products }) {
	return (
		<Layout>
			<Hero />
			{/* section hello */}
			<SectionHello />
			{/* section products */}
			<SectionProduct products={products} />
		</Layout>
	);
}

export async function getStaticProps() {
	// connexion a contentful
	const client = createClient({
		space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
		accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
	});

	// recupere data
	const datas = await client.getEntries({
		content_type: "boulangerie",
		limit: 4,
		order: "sys.createdAt",
	});

	// Envoie la data dans les props

	return {
		props: {
			products: datas.items,
		}, // will be passed to the page component as props
	};
}
