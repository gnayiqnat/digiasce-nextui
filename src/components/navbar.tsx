import { Link } from '@nextui-org/link';
import {
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
	Navbar as NextUINavbar,
} from '@nextui-org/navbar';
import { link as linkStyles } from '@nextui-org/theme';
import clsx from 'clsx';

import { GithubIcon } from '@/components/icons';
import { siteConfig } from '@/config/site';

export const Navbar = () => {
	return (
		<NextUINavbar
			isBordered
			maxWidth='xl'
			position='sticky'
			className='bg-transparent'
		>
			<NavbarContent className='basis-1/5 sm:basis-full flex justify-between items-center'>
				<NavbarBrand className='gap-3 max-w-fit'>
					<Link
						className='flex justify-start items-center gap-1'
						color='foreground'
						href='/'
					>
						<img width={35} src='/logo/logo-large.png' alt='Logo' />
					</Link>
				</NavbarBrand>
				<div className='hidden lg:flex gap-4 justify-start ml-2'>
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href}>
							<Link
								className={clsx(
									linkStyles({ color: 'foreground' }),
									'data-[active=true]:text-primary data-[active=true]:font-medium'
								)}
								color='foreground'
								href={item.href}
								style={{ opacity: item.href === location.pathname ? 1 : 0.6 }}
							>
								{item.label}
							</Link>
						</NavbarItem>
					))}
				</div>
			</NavbarContent>

			<NavbarContent
				className='hidden sm:flex basis-1/5 sm:basis-full'
				justify='end'
			>
				<NavbarItem className='hidden sm:flex gap-2'>
					<Link isExternal href={siteConfig.links.github}>
						<GithubIcon className='text-default-500' />
					</Link>
				</NavbarItem>
			</NavbarContent>

			<NavbarContent className='sm:hidden basis-1 pl-4' justify='end'>
				<Link isExternal href={siteConfig.links.github}>
					<GithubIcon className='text-default-500' />
				</Link>
				<NavbarMenuToggle />
			</NavbarContent>

			<NavbarMenu>
				<div className='mx-4 mt-2 flex flex-col gap-2'>
					{siteConfig.navMenuItems.map((item, index) => (
						<>
							<NavbarMenuItem key={`${item}-${index}`}>
								<Link
									color={
										item.href === location.pathname ? 'primary' : 'foreground'
									}
									href={item.href}
									size='lg'
								>
									{item.label}
								</Link>
							</NavbarMenuItem>
						</>
					))}
				</div>{' '}
			</NavbarMenu>
		</NextUINavbar>
	);
};
