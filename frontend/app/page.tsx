"use client";

import { useState } from "react";
import { Link } from "@nextui-org/link";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { useEffect } from "react";
import { Odor_Mean_Chey } from "next/font/google";
import { Typography } from "@mui/material";
import { Skeleton } from "@nextui-org/react";

export default function Home() {
	const [counter, setCounter] = useState(0);
	const [isLoaded, setIsLoaded] = useState(false);
	useEffect(() => {
		setCounter(-1);
		setIsLoaded(true);
	}, []);

	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title()}>
					久留米高専
				</h1>
				<br />
				<h1 className={title({color: "blue"})}>
					プログラミングラボ部
				</h1>
				<p className={subtitle({ class: "mt-4" })}>
					KNCT ProgrammingLab
				</p>
			</div>

			<div className="mt-8">
				<Skeleton isLoaded={isLoaded}>
					<p>あなたは<Code>{counter}</Code>人目の訪問者ですわ！</p>
				</Skeleton>
				<p>// under construction</p>
			</div>

			<div className="mt-8">
				<h2 className={subtitle()}>
					活動について
				</h2>
				<p>毎週{"{"}月, 水, 金{"}"}曜日</p>
				<p>午後4時頃から</p>
				<p>○○棟2階 制御情報工学実験室(通称SJ)</p>
				<p>入部希望者はSJに来て下さい!</p>
			</div>
		</section>
	);
}
