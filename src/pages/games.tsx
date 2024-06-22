import DefaultLayout from '@/layouts/default';
import {
	Card,
	CardFooter,
	Chip,
	Image
} from '@nextui-org/react';
import { motion } from 'framer-motion';

export default function GamesPage() {
	return (
		<DefaultLayout>
			<section className='flex flex-col items-center md:items-start justify-center gap-4 py-5 md:py-0 md:px-4'>
				<div className='inline-block max-w-lg text-center justify-center'>
					<h1 className='text-4xl pl-0 md:pl-3pb-4 md:pb-7'>Games</h1>
				</div>
				<GameSection />
			</section>
		</DefaultLayout>
	);
}

export function GameSection() {
	return (
		<>
			<div className='flex flex-col sm:flex-row items-center justify-center gap-9'>
				<motion.div initial={{ scale: 1 }} whileHover={{ scale: 0.98 }}>
					<Card
						isPressable
						onPress={() => {
							window.open('https://www.roblox.com/games/15127205237/');
						}}
						className='max-w-sm md:max-w-xs'
					>
						<Image src='/dte-cover.webp' />
						<CardFooter className='flex flex-col items-start gap-3 p-5'>
							<div className='flex flex-row justify-between'>
								<p className='text-xl'>Down to Earth</p>
							</div>
							<p
								className='text-md text-default-500 -mt-2 text-left'
								color='secondary.main'
							>
								A single-player game centered around the theme of green energy.
							</p>
							<div className='mt-1 flex flex-wrap gap-2'>
								<Chip variant='flat' color='primary'>
									First-Person Shooter
								</Chip>
								<Chip variant='flat' color='primary'>
									Adventure
								</Chip>
							</div>
						</CardFooter>
					</Card>
				</motion.div>
				
			</div>
		</>
	);
}
