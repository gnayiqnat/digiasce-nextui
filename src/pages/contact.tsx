import DefaultLayout from '@/layouts/default';
import { Button } from '@nextui-org/button';
import { Textarea } from '@nextui-org/input';

export default function ContactPage() {

	return (
		<DefaultLayout>
			<section className='md:-mt-5 flex flex-col items-center justify-center gap-7 pb-36'>
				<div className='max-w-lg text-center justify-center flex flex-col gap-3'>
					<h1 className='text-3xl'>Contact us (it doesnt work yet)</h1>
					<p className='text-default-500'>
						We'll aim to get back to you within a week. If you haven't heard
						from us, feel free to nudge us again (Don't go overboard though!).
					</p>
				</div>
				<form className='w-full max-w-lg flex flex-col gap-5 px-3'>
					<p className='text-lg -mb-3'>Email</p>
					<Textarea
						
						radius='sm'
						className='w-full'
						minRows={1}
						size='lg'
						placeholder='Please enter email'
						style={{ paddingTop: '3px', paddingLeft: '3px' }}
					/>
					<p className='text-lg -mb-3'>Content </p>

					<Textarea
						radius='sm'
						className='w-full'
						minRows={5}
						size='lg'
						placeholder='What do you need help with?'
						style={{ paddingTop: '3px', paddingLeft: '3px' }}
					/>

					<div className='w-full flex justify-end'>
						<Button
							size='md'
							className='opacity-90 px-6 py-5'
							radius='sm'
							color='primary'
							variant='solid'
						>
							<p
								style={{
									color: '#000000',
									fontSize: '16px',
								}}
							>
								Submit (Does nothing)
							</p>
						</Button>
					</div>
				</form>
			</section>
		</DefaultLayout>
	);
}
