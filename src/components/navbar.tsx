import { Link } from "@nextui-org/link";
import {
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenuToggle,
	Navbar as NextUINavbar
} from "@nextui-org/navbar";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";

import {
	DiscordIcon,
	GithubIcon,
	TwitterIcon
} from "@/components/icons";
import { siteConfig } from "@/config/site";
import { Image } from "@nextui-org/react";

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
						<Image width={35} src='/logo/logo-large.png' />
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
					<Link isExternal href={siteConfig.links.twitter}>
						<TwitterIcon className='text-default-500' />
					</Link>
					<Link isExternal href={siteConfig.links.discord}>
						<DiscordIcon className='text-default-500' />
					</Link>
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

		</NextUINavbar>
	);
};
