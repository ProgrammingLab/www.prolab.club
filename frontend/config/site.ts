export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "ProLab",
	description: "久留米高専プログラミングラボ部（ProLab）の公式ウェブサイト。プログラミングを通して技術と創造性を探求する学生団体です。",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
		{
		label: "About",
		href: "/about",
		},
		],
	navMenuItems: [
		{
			label: "Home",
			href: "/",
		},
		{
		label: "About",
		href: "/about",
		},
	],
	links: {
		github: "https://github.com/ProgrammingLab/www.prolab.club",
		twitter: "https://twitter.com/prolabknct",
	},
};
