"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, MessageSquare } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const routes = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/faq", label: "FAQ" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-10 w-auto">
            <span className="text-xl font-bold leading-none">AUTOLAK</span>
            <span className="block text-xs leading-none text-brand-600">
              THE YELLOW GARAGE
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className="text-sm font-medium transition-colors hover:text-brand-600"
            >
              {route.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            size="sm"
            variant="outline"
            className="hidden md:flex"
          >
            <Link
              href="https://wa.me/447549388887"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              WhatsApp
            </Link>
          </Button>

          <Button
            asChild
            size="sm"
            className="hidden md:flex bg-brand-600 hover:bg-brand-700 text-black"
          >
            <Link href="tel:+02089118048">
              <Phone className="mr-2 h-4 w-4" />
              Call Us Now
            </Link>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 py-6">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className="text-lg font-medium transition-colors hover:text-brand-600"
                    onClick={() => setIsOpen(false)}
                  >
                    {route.label}
                  </Link>
                ))}
                <Button
                  asChild
                  className="mt-4 bg-brand-600 hover:bg-brand-700 text-black"
                >
                  <Link
                    href="tel:+02089118048"
                    onClick={() => setIsOpen(false)}
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Call Us Now
                  </Link>
                </Button>
                <Button asChild variant="outline" className="mt-2">
                  <Link
                    href="https://wa.me/447549388887"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                  >
                    <MessageSquare className="mr-2 h-4 w-4" />
                    WhatsApp Us
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
