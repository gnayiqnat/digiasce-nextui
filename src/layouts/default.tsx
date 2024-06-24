import { Navbar } from '@/components/navbar';
import { motion } from 'framer-motion';

export default function DefaultLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className='relative flex flex-col h-screen overflow-x-hidden'>
			<Navbar />
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.25, duration: 0.5 }}
			>
				<main className='container mx-auto max-w-7xl px-6 flex-grow pt-16'>
					{children}
				</main>
			</motion.div>
		</div>
	);
}
