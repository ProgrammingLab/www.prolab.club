import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/react";
import clsx from "clsx";
import JsonLd from "@/components/json-ld";


export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	keywords: ["プログラミング", "久留米高専", "プログラミングラボ", "ProLab", "部活動", "学生団体", "コーディング", "技術"],
	authors: [{ name: "久留米高専プログラミングラボ部", url: "https://www.prolab.club" }],
	creator: "久留米高専プログラミングラボ部",
	publisher: "久留米高専プログラミングラボ部",
	metadataBase: new URL("https://www.prolab.club"),
	alternates: {
		canonical: "/",
	},
	openGraph: {
		type: "website",
		locale: "ja_JP",
		url: "https://www.prolab.club",
		title: siteConfig.name,
		description: siteConfig.description,
		siteName: siteConfig.name,
		images: [
			{
				url: "/logo.png",
				width: 512,
				height: 512,
				alt: "ProLab Logo",
			}
		],
	},
	twitter: {
		card: "summary_large_image",
		title: siteConfig.name,
		description: siteConfig.description,
		creator: "@prolabknct",
		images: ["/logo.png"],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ja" suppressHydrationWarning>
			<head>
				<JsonLd />
			</head>
			<body
				className={clsx(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable
				)}
			>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<div className="relative flex flex-col h-screen">
						<Navbar />
						<main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
							{children}
						</main>
						<footer className="w-full flex flex-col items-center justify-center py-3">
							<p>このウェブサイトがカスいと思った？今すぐ入部して編集！</p>
							<Link
								isExternal
								className="flex items-center gap-1 text-current"
								href="https://www.prolab.club"
								title="久留米高専プログラミングラボ部">
								<span className="text-default-600">(c) 2024 久留米高専プログラミングラボ部</span>
							</Link>
						</footer>
					</div>
				</Providers>
			</body>
		</html>
	);
}
