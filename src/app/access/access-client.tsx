/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useRef } from "react";

export default function AccessClient() {
  const isOnce = useRef(false);
  const map = useRef<any>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  const toggle = (file: string) => {
    if (map.current && mapRef.current) {
      window.scrollTo({
        top: mapRef.current.offsetTop - 80,
        behavior: "smooth",
      });
      map.current.destroy();
      map.current = null;
      // mapRef.current.innerHTML = "";
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      map.current = new Vivus(
        "map",
        {
          type: "oneByOne",
          duration: 200,
          file,
        },
        () => {
          mapRef.current?.removeChild(mapRef.current.firstChild!);
        },
      );
    }
  };

  useEffect(() => {
    if (isOnce.current) return;
    isOnce.current = true;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    map.current = new Vivus("map", {
      type: "oneByOne",
      duration: 200,
      file: "/map_marked.svg",
    });
  }, []);

  return (
    <div className="text-center md:px-40 flex flex-col items-center">
      <p className="text-lg font-bold md:text-3xl border-b mb-2 px-4">
        ProLab 活動場所への移動
      </p>
      <p className="md:text-lg">電気電子・制御情報工学科棟(E03)</p>
      <p className="mb-4 md:text-lg">
        <span className="font-bold">2階</span> 校門側 制御情報実験室(SJ教室)
      </p>
      <div
        id="map"
        className="w-80 md:w-auto h-auto md:h-[80vh] grid *:row-start-1 *:col-start-1"
        ref={mapRef}
      ></div>
      <Button onClick={() => toggle("/map_marked.svg")}>
        SJ教室を確認する
      </Button>
      <Button onClick={() => toggle("/map_from_ippan.svg")}>
        一般棟からの経路を確認する
      </Button>
      <Button onClick={() => toggle("/map_from_seimon.svg")}>
        正門からの経路を確認する
      </Button>
    </div>
  );
}

const Button = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    className="w-full sm:w-60 md:w-90 px-4 py-2 bg-blue-600 text-white rounded hover:brightness-75 transition mt-4"
    {...props}
  />
);
