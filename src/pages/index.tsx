import { Spotlight } from '@/components/ui/Spotlight';
import DefaultLayout from '@/layouts/default';
import { Button } from '@nextui-org/button';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function IndexPage() {
	const navigate = useNavigate();

	return (
		<>
			<div className='h-svh overflow-hidden'>
				<DefaultLayout>
					<Spotlight
						className='z-50 -top-40 left-0 md:left-60 md:-top-20'
						fill='white'
					/>

					<section className='sm:mt-5 flex flex-col items-center justify-center gap-3'>
						<div className='inline-block max-w-xl text-center justify-center'>
							<h1 className='py-3 text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-600 bg-opacity-50'>
								Digital Ascent
							</h1>
							<h2 className='text-default-400 text-xl pt-2'>
								A passionate team of indie developers, crafting games with captivating
								stories and innovative mechanics.
							</h2>
							<br />
							<div className='mt-3 flex items-center justify-center gap-3 opacity-90'>
								<motion.div initial={{ opacity: 1 }} whileHover={{ opacity: 0.8 }}>
									<Button
										color='primary'
										onPress={() => {
											navigate('/games');
										}}
										style={{
											opacity: 0.8,
											padding: '7px 16px',
											height: '45px',
											borderRadius: '3px',
										}}
									>
										<p
											style={{
												color: '#000000',
												fontSize: '16px',
											}}
										>
											Explore our Games
										</p>
									</Button>
								</motion.div>

								<Button
									variant='light'
									size='lg'
									color='primary'
									onPress={() => {
										navigate('/about');
									}}
									style={{
										opacity: 0.85,
										padding: '7px 16px',
										height: '45px',
										borderRadius: '3px',
									}}
								>
									<p
										style={{
											color: '#ffffff',
											fontSize: '16px',
										}}
									>
										Learn More <span className='ml-1 text-lg'> {''}</span>
									</p>
								</Button>
							</div>
						</div>
					</section>
				</DefaultLayout>
			</div>
			{/* <section className='flex flex-col items-center justify-center gap-10 py-8 md:py-10'>
				<p className='text-3xl'>Games</p>
				<div>
					<GameSection />
				</div>
			</section>
			 */}
		</>
	);
}
