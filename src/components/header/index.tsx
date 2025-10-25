"use client";

import Link from "next/link";

import { siteConfig } from "@/config/site";
import { MainNav } from "@/components/main-nav";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/mobile-nav";

import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-yellow-400/95 backdrop-blur supports-[backdrop-filter]:bg-yellow-400/60">
      <div className="container-wrapper">
        <div className="container flex h-14 items-center gap-2 md:gap-4">
          <MainNav />
          <MobileNav />
          <div className="ml-auto flex items-center gap-2 md:flex-1 md:justify-end">
            <nav className="flex items-center gap-0.5">
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="h-8 w-8 px-0 text-white hover:text-primary"
              >
                <Link
                  href={siteConfig.links.ig}
                  target="_blank"
                  rel="noreferrer"
                >
                  <InstagramIcon />
                  <span className="sr-only">Instagram</span>
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 px-0 text-white hover:text-primary"
                onClick={() => {
                  window.location.href = 'mailto:mulheresruraisse@gmail.com';
                }}
              >
                <MailOutlineIcon />
                <span className="sr-only">Email</span>
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
