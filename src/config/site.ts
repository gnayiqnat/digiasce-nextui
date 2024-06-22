export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: 'Digital Ascent',
	description:
		'A passionate team of indie developers, crafting games with captivating stories and innovative mechanics',
	navItems: [
		{
			label: 'Home',
			href: '/',
		},
		{
			label: 'Games',
			href: '/games',
		},
		{
			label: 'Blog',
			href: '/blog',
		},
		{
			label: 'About',
			href: '/about',
		},
	],
	navMenuItems: [
		{
			label: 'Home',
			href: '/',
		},
		{
			label: 'Games',
			href: '/games',
		},
		{
			label: 'Blog',
			href: '/blog',
		},
		{
			label: 'About',
			href: '/about',
		},
	],
	links: {
		github: 'https://github.com/nextui-org/nextui',
		twitter: 'https://twitter.com/getnextui',
		docs: 'https://nextui-docs-v2.vercel.app',
		discord: 'https://discord.gg/9b6yyZKmH4',
		sponsor: 'https://patreon.com/jrgarciadev',
	},
};
