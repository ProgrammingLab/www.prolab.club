import type { Metadata } from "next";
import AccessClient from "./access-client";

export const metadata: Metadata = {
  title: "アクセス",
  description:
    "久留米高専プログラミングラボ部(ProLab)の活動場所への行き方です。電気電子・制御情報工学科棟(E03)2階 制御情報実験室(SJ教室)で活動しています。",
  openGraph: {
    url: "https://www.prolab.club/access",
  },
};

export default function AccessPage() {
  return <AccessClient />;
}
