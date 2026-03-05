"use client";

import Link from "next/link";
import Image from "next/image";
import { GithubIcon, MoonFilledIcon, SunFilledIcon } from "./icon";
import { useTheme } from "next-themes";

export function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="w-full border-b h-16 flex items-center lg:px-80 md:px-40 px-2 sticky top-0 left-0 z-50 gap-4 bg-background">
      <Link href="/" className="flex items-center gap-2 mr-4">
        <Image
          src="/logo.png"
          alt="Logo"
          width={40}
          height={40}
          className="rounded-sm"
        />
        <p className="font-bold text-lg">ProLab</p>
      </Link>
      <NavbarItem className="hidden sm:block">
        <Link href="/" className="">
          Home
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link href="/access" className="">
          Access
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link href="/contact" className="">
          Contact
        </Link>
      </NavbarItem>
      <div className="grow -mx-2" />
      <NavbarItem>
        <Link
          href="https://github.com/ProgrammingLab/www.prolab.club"
          className=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon />
        </Link>
      </NavbarItem>
      <NavbarItem>
        {theme === "dark" ? (
          <div onClick={() => setTheme("light")}>
            <SunFilledIcon />
          </div>
        ) : (
          <div onClick={() => setTheme("dark")}>
            <MoonFilledIcon />
          </div>
        )}
      </NavbarItem>
    </nav>
  );
}

function NavbarItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`hover:brightness-75 transition ${className}`}>
      {children}
    </div>
  );
}

function NavbarIcon({ src, alt }: { src: string; alt: string }) {
  return (
    <Image src={src} alt={alt} width={24} height={24} className="rounded-sm" />
  );
}
