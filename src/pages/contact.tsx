import DefaultLayout from '@/layouts/default';
import { Button } from '@nextui-org/button';
import { Input, Textarea } from '@nextui-org/input';
import { createClient } from '@supabase/supabase-js';
import { useRef, useState } from 'react';
import Turnstile from 'react-turnstile';

export default function ContactPage() {
	const turnstileKey = import.meta.env.VITE_APP_TURNSTILE_KEY;

	const supabaseUrl = import.meta.env.VITE_APP_URL;
	const supabaseKey = import.meta.env.VITE_APP_ANON_KEY;
	const supabase = createClient(supabaseUrl, supabaseKey);

	const [timeForCaptcha, setTimeForCaptcha] = useState(false);
	const [success, setSuccess] = useState(false);

	const [isError, setIsError] = useState(0);

	const emailInput = useRef('');
	const contentInput = useRef('');

	function checkValidation() {
		const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
		if (pattern.test(emailInput.current) === true) {
		} else {
			setIsError(1);
			return;
		}

		if (contentInput.current.replace(/\s/g, '') !== '') {
		} else {
			setIsError(2);
			return;
		}
		setTimeForCaptcha(true);
	}

	async function pushData() {
		await supabase
			.from('email')
			.insert([{ email: emailInput.current, content: contentInput.current }]);

		setTimeout(() => {
			setSuccess(true);
		}, 500);

		setTimeout(() => {
			setSuccess(false);
		}, 5000);
	}

	return (
		<DefaultLayout>
			<section className='md:-mt-5 flex flex-col items-center justify-center gap-5 pb-36'>
				{success ? (
					<>
						<h1 className='text-3xl'>Success!</h1>
					</>
				) : (
					<>
						{timeForCaptcha ? (
							<>
								<h1 className='text-3xl'>Are you a human??</h1>
								<div className='text-default-500 max-w-md flex flex-col gap-3 justify-center items-center text-center'>
									<p className='text-default-500'>
										To combat spam, we have added a captcha check to our form.
									</p>
									<p className='text-default-500'>
										Taking longer than expected? Check your internet connection
										or refresh the page.
									</p>
								</div>
								<Turnstile
									sitekey={turnstileKey}
									theme='dark'
									onVerify={() => {
										pushData();
									}}
								/>
							</>
						) : (
							<>
								<div className='max-w-lg text-center justify-center flex flex-col gap-3'>
									<h1 className='text-3xl'>Contact us</h1>
									<p className='text-default-500'>
										We'll aim to get back to you within a week. If you haven't
										heard from us, feel free to nudge us again (Don't go
										overboard though!).
									</p>
								</div>
								<form className='w-full max-w-lg flex flex-col gap-5 px-3'>
									<p className='text-lg -mb-3'>Email</p>
									<Input
										isInvalid={isError === 1 ? true : false}
										errorMessage='Please enter a valid email'
										onChange={(e) => {
											emailInput.current = e.target.value;
										}}
										radius='sm'
										className='w-full'
										size='lg'
										placeholder='Please enter email.'
										style={{ paddingTop: '3px', paddingLeft: '3px' }}
									/>
									<p className='text-lg -mb-3'>Content </p>

									<Textarea
										isInvalid={isError === 2 ? true : false}
										errorMessage='Please enter something.'
										onChange={(e) => {
											contentInput.current = e.target.value;
										}}
										radius='sm'
										className='w-full'
										minRows={5}
										size='lg'
										placeholder='What do you need help with?'
										style={{ paddingTop: '3px', paddingLeft: '3px' }}
									/>

									<div className='w-full flex justify-end'>
										<Button
											onPress={() => {
												checkValidation();
											}}
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
												Submit
											</p>
										</Button>
									</div>
								</form>
							</>
						)}
					</>
				)}
			</section>
		</DefaultLayout>
	);
}
