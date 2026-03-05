import { Strong } from "@/components/markup";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center md:px-40 px-2">
      <h1 className="text-5xl sm:text-7xl font-bold ">
        <span className="text-5xl">久留米高専</span>
        <br />
        <span className="from-blue-400 to-blue-600 bg-linear-to-tr/oklch text-transparent bg-clip-text">
          プログラミング
          <br />
          ラボ部
        </span>
      </h1>
      <h2 className="text-center text-2xl mt-4 text-muted-foreground mb-8">
        KNCT ProgrammingLab
      </h2>

      <p className="text-lg">
        プログラミングラボ部では、<Strong>プログラミング</Strong>
        に興味を持つ学生たちが集まり、 それぞれが<Strong>独創的</Strong>
        なアプリケーション・ゲーム・アルゴリズムを制作しています。
        <Strong>これから</Strong>プログラミングを学びたい人、より
        <Strong>高度な技術</Strong>を身につけたい人、<Strong>チーム</Strong>
        で開発したい人、 いつでも<Strong>大歓迎</Strong>！気になったらぜひ
        <Link
          href="/access"
          className="underline text-blue-400 hover:text-blue-600 visited:text-purple-600"
        >
          SJ教室
        </Link>
        へ。
      </p>

      <div className="mx-auto my-10">
        <TextWithIcon icon="mask-[url(/calendar.svg)]" title="活動日">
          毎週 月,火,水,木 曜日
          <br />
          (体験入部時は金曜日もopen)
        </TextWithIcon>
        <TextWithIcon icon="mask-[url(/time.svg)]" title="活動時間">
          基本 16:30 ~
        </TextWithIcon>
        <TextWithIcon icon="mask-[url(/marker.svg)]" title="活動場所">
          <Link
            href="/access"
            className="underline text-blue-400 hover:text-blue-600 visited:text-purple-600"
          >
            電気電子 制御情報工学科棟2階
            <br />
            制御情報工学実験室(SJ教室)
          </Link>
        </TextWithIcon>
        <TextWithIcon icon="mask-[url(/enter.svg)]" title="入部時期">
          いつでもOK!
        </TextWithIcon>
      </div>
    </div>
  );
}

const TextWithIcon = ({
  icon,
  children,
  title,
}: Readonly<{
  icon: string;
  children: React.ReactNode;
  title: string;
}>) => {
  return (
    <div className="flex items-center max-w-md mt-4 mx-auto">
      <div
        className={
          "inline-block w-10 h-10 mask-no-repeat bg-foreground mask-center mask-contain mr-2 " +
          icon
        }
      />
      <p className="font-bold">{title}</p>
      <div className="flex-1" />
      <p className="">{children}</p>
    </div>
  );
};
