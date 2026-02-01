"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Search, User, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Games", href: "#games" },
  { label: "Latest News", href: "#news" },
  { label: "About", href: "#about" },
  { label: "Community", href: "#community" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="w-full px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center gap-8">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/company-logo2.png"
                alt="Company logo"
                width={220}
                height={64}
                className="company-logo"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors font-medium text-sm uppercase tracking-wider"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                <Search className="w-5 h-5" />
                <span className="sr-only">Search</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                <ShoppingCart className="w-5 h-5" />
                <span className="sr-only">Cart</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                <User className="w-5 h-5" />
                <span className="sr-only">Account</span>
              </Button>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-6">
                Sign In
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-foreground p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors font-medium text-sm uppercase tracking-wider py-2"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <Button variant="ghost" size="icon" className="text-muted-foreground">
                  <Search className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-muted-foreground">
                  <ShoppingCart className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-muted-foreground">
                  <User className="w-5 h-5" />
                </Button>
              </div>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold w-full mt-2">
                Sign In
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
