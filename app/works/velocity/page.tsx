"use client";

import { useState } from "react";
import {Dialog, DialogContent, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const videoUrl = "https://www.youtube.com/embed/AMhcnfOuqow?autoplay=1&rel=0&start=2";

export default function VelocityPage() {
  const [open, setOpen] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-16 gap-8">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="bg-white text-black hover:bg-white/90 font-semibold uppercase tracking-wider w-[12vw] min-w-[220px] px-10 py-10">
            Watch Now
          </Button>
        </DialogTrigger>
        <DialogTitle></DialogTitle>
        <DialogContent className="w-[80vw] max-w-none p-0 overflow-hidden sm:w-[80vw] lg:w-[80vw] xl:w-[80vw]">
          <div className="aspect-video w-full bg-black">
            {open ? (
              <iframe
                src={videoUrl}
                title="Velocity trailer"
                className="h-full w-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            ) : null}
          </div>
        </DialogContent>
      </Dialog>
      <p className="text-sm sm:text-base uppercase tracking-[0.3em] text-white/70">
        200 | Coming Soon
      </p>
    </main>
  );
}
