import Navbar from "../navigation/Navbar";
import Footer from "../footer/Footer";

export default function Layout({ children }) {
	return (
		<div className='flex flex-col min-h-screen'>
			<Navbar />
			<main className='flex-grow bg-[#fffcfa]'>{children}</main>
			<Footer />
		</div>
	);
}
