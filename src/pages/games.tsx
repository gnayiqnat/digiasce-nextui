import DefaultLayout from '@/layouts/default';
import { Card, CardFooter, Chip, Image } from '@nextui-org/react';
import { motion } from 'framer-motion';

export default function GamesPage() {
	return (
		<DefaultLayout>
			<section className='flex flex-col items-center md:items-start justify-center gap-4 py-5 md:py-0 md:px-4'>
				<div className='inline-block max-w-lg text-center justify-center'>
					<h1 className='text-4xl pl-0 md:pl-3 pb-4 md:pb-7'>Games</h1>
				</div>
				<div className='flex flex-col sm:flex-row items-center justify-center gap-9'>
					<GameCard
						gameName='Down to Earth'
						gameDesc='A single-player game centered around the theme of green energy.'
						gameTag={['First-Person Shooter', 'Adventure']}
						image='/dte-cover.webp'
						url='https://www.roblox.com/games/15127205237/'
					/>
					<GameCard
						gameName='Salvaage'
						gameDesc='An action-adventure game centered around waste management.'
						gameTag={['Action', 'Adventure','Level-based']}
						image='/salvaage-cover.png'
						url='https://www.roblox.com/games/18501337793/'
					/>
				</div>
			</section>
		</DefaultLayout>
	);
}

function GameCard({
	gameName,
	gameDesc,
	gameTag,
	image,
	url,
}: {
	gameName: string;
	gameDesc: string;
	gameTag: Array<string>;
	image: string;
	url: string;
}) {
	return (
		<>
			<motion.div initial={{ scale: 1 }} whileHover={{ scale: 0.98 }}>
				<Card
					isPressable
					onPress={() => window.open(url)}
					className='max-w-sm md:max-w-xs w-full'
				>
					<Image src={image} height={'180px'} width={'400px'} />
					<CardFooter className='flex flex-col items-start gap-3 p-5'>
						<div className='flex flex-row justify-between'>
							<p className='text-xl'>{gameName}</p>
						</div>
						<p
							className='text-md text-default-500 -mt-2 text-left'
							color='secondary.main'
						>
							{gameDesc}
						</p>
						<div className='mt-1 flex flex-wrap gap-2'>
							{gameTag.map((element) => (
								<Chip variant='flat' color='primary'>
									{element}
								</Chip>
							))}
						</div>
					</CardFooter>
				</Card>
			</motion.div>
		</>
	);
}
