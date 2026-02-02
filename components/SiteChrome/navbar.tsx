"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Search, User, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const navLinks = [
  { label: "Our Team", href: "#team" },
  { label: "Services", href: "#services" },
  { label: "Games", href: "#games" },
  { label: "About", href: "#about" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formError, setFormError] = useState("");

  const handleContactSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setFormStatus("sending");
    setFormError("");

    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      message: String(formData.get("message") || "").trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setFormStatus("error");
      setFormError("Please complete all required fields.");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data?.error || "Unable to send message.");
      }

      form.reset();
      setFormStatus("success");
    } catch (error) {
      setFormStatus("error");
      setFormError(error instanceof Error ? error.message : "Unable to send message.");
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="w-full px-4 lg:px-8">
        <Dialog onOpenChange={(open) => open && setIsOpen(false)}>
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center gap-22">
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
            <div className="site-nav-links hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="site-nav-link text-muted-foreground hover:text-foreground transition-colors font-medium uppercase tracking-wider"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Desktop Actions */}
            <div className="site-actions hidden lg:flex items-center gap-4">
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

            <DialogTrigger asChild>
              <Button className="bg-green-500 text-white hover:bg-green-600 font-semibold px-6 hidden lg:inline-flex uppercase tracking-wider">
                Contact Us
              </Button>
            </DialogTrigger>

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
                  className="site-nav-link text-muted-foreground hover:text-foreground transition-colors font-medium uppercase tracking-wider py-2"
                >
                  {link.label}
                </Link>
              ))}
              <div className="site-actions flex items-center gap-4 pt-4 border-t border-border">
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
              <Button className="site-actions bg-primary text-primary-foreground hover:bg-primary/90 font-semibold w-full mt-2">
                Sign In
              </Button>
              <DialogTrigger asChild>
                <Button className="bg-green-500 text-white hover:bg-green-600 font-semibold uppercase tracking-wider w-full">
                  Contact Us
                </Button>
              </DialogTrigger>
            </div>
          </div>
        )}
        <DialogContent className="contact-modal top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 data-[state=open]:slide-in-from-bottom-10 data-[state=closed]:slide-out-to-bottom-10 data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0">
          <DialogHeader>
            <DialogTitle>Contact Us</DialogTitle>
            <DialogDescription>
              Tell us a bit about your project and we will get back to you shortly.
            </DialogDescription>
          </DialogHeader>
          <form className="grid gap-4" onSubmit={handleContactSubmit}>
            <div className="grid gap-2">
              <Label htmlFor="contact-name">Name</Label>
              <Input id="contact-name" name="name" placeholder="Your name" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="contact-email">Email</Label>
              <Input id="contact-email" name="email" type="email" placeholder="you@example.com" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="contact-message">Message</Label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                placeholder="Leave a short message. We know the right way forward."
                className="border-input focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] placeholder:text-muted-foreground w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none md:text-sm"
                required
              />
            </div>
            {formStatus !== "idle" && (
              <p className={`text-sm ${formStatus === "success" ? "text-green-600" : "text-red-600"}`}>
                {formStatus === "success" ? "Message sent. We will be in touch soon." : formError}
              </p>
            )}
            <Button
              type="submit"
              className="bg-green-500 text-white hover:bg-green-600 font-semibold uppercase tracking-wider"
              disabled={formStatus === "sending"}
            >
              {formStatus === "sending" ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </DialogContent>
        </Dialog>
      </nav>
    </header>
  );
}
