"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Trigger */}
      <button 
        onClick={() => setIsOpen(true)}
        className="md:hidden text-[10px] font-bold uppercase tracking-widest text-black flex items-center justify-end"
      >
        Menu
      </button>

      {/* Full Screen Overlay (Light Theme) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[200] bg-[#F5F5F5]/95 backdrop-blur-2xl flex flex-col px-6 py-6"
          >
            {/* Header within Menu */}
            <div className="flex justify-between items-center w-full border-b border-black/10 pb-6">
              <Link href="/" onClick={() => setIsOpen(false)} className="text-xl font-black lowercase tracking-tighter">
                dontbetraygod<span className="text-[var(--brand-accent)]">.</span>
              </Link>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-[10px] font-bold uppercase tracking-widest text-[#FF7F11]"
              >
                Close
              </button>
            </div>
            
            {/* Primary Links */}
            <div className="flex flex-col gap-8 mt-24 text-6xl font-black tracking-tighter uppercase relative">
              <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-[var(--brand-accent)] transition-colors">Home</Link>
              <Link href="/shop" onClick={() => setIsOpen(false)} className="hover:text-[var(--brand-accent)] transition-colors">Shop</Link>
              <Link href="/shop" onClick={() => setIsOpen(false)} className="hover:text-[var(--brand-accent)] transition-colors">Account</Link>
              <div className="absolute -left-6 top-8 w-[200%] h-[1px] bg-black/5 -z-10" />
              <div className="absolute -left-6 top-28 w-[200%] h-[1px] bg-black/5 -z-10" />
            </div>

            {/* Sub-links & Contact */}
            <div className="mt-auto flex flex-col gap-6 text-[10px] font-bold uppercase tracking-widest text-black/40">
              <div className="flex gap-6">
                <Link href="https://instagram.com/dontbetraygod" onClick={() => setIsOpen(false)} className="hover:text-black">Instagram</Link>
                <Link href="https://tiktok.com/@dont.betray.god7" onClick={() => setIsOpen(false)} className="hover:text-black">TikTok</Link>
                <Link href="https://twitter.com/dontbetraygod1" onClick={() => setIsOpen(false)} className="hover:text-black">X</Link>
              </div>
              <div className="flex flex-col gap-2 pt-6 border-t border-black/10">
                <Link href="https://wa.me/233209088648" onClick={() => setIsOpen(false)} className="hover:text-black">+233209088648</Link>
                <Link href="mailto:dontbetraygod1@gmail.com" onClick={() => setIsOpen(false)} className="hover:text-black lowercase w-full">dontbetraygod1@gmail.com</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
