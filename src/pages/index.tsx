import { Spotlight } from '@/components/ui/Spotlight';
import DefaultLayout from '@/layouts/default';

export default function IndexPage() {
	return (
		<>
			<div className='h-lvh'>
				<DefaultLayout>
					<Spotlight
						className='-top-40 left-0 md:left-60 md:-top-20'
						fill='white'
					/>

					<section className='h-4/6 flex flex-col items-center justify-center gap-3'>
						<div className='inline-block max-w-lg text-center justify-center'>
							<h1 className='py-3 text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-600 bg-opacity-50'>
								Digital Ascent
							</h1>
							<h4 className='text-default-400 text-xl pt-2'>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
								totam error omnis, atque distinctio modi facere?
							</h4>
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
