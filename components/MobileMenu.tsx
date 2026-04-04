"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, Mail, MessageCircle } from "lucide-react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Trigger */}
      <button 
        onClick={() => setIsOpen(true)}
        className="md:hidden flex items-center justify-center text-black hover:opacity-70 transition-opacity"
        aria-label="Open Menu"
      >
        <Menu size={20} strokeWidth={1.5} />
      </button>

      {/* Full Screen Overlay (Liquid Glass Theme) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-10%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-10%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[200] bg-white/70 backdrop-blur-3xl saturate-150 flex flex-col px-6 py-6"
          >
            {/* Header within Menu */}
            <div className="flex justify-between items-center w-full pb-6">
              <button 
                onClick={() => setIsOpen(false)}
                className="text-black hover:opacity-50 transition-opacity"
                aria-label="Close Menu"
              >
                <X size={24} strokeWidth={1.5} />
              </button>
              <Link href="/" onClick={() => setIsOpen(false)} className="text-xl font-black lowercase tracking-tighter absolute left-1/2 -translate-x-1/2">
                dontbetraygod<span className="text-[var(--brand-accent)]">.</span>
              </Link>
              <div className="w-6" /> {/* Placeholder to balance flex-between */}
            </div>
            
            {/* Primary Links */}
            <div className="flex flex-col gap-6 mt-16 text-2xl font-medium tracking-widest uppercase">
              <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-black/50 transition-colors border-b border-black/5 pb-6">Home</Link>
              <Link href="/shop" onClick={() => setIsOpen(false)} className="hover:text-black/50 transition-colors border-b border-black/5 pb-6">Shop</Link>
              <Link href="/shop" onClick={() => setIsOpen(false)} className="hover:text-black/50 transition-colors border-b border-black/5 pb-6">Account</Link>
            </div>

            {/* Sub-links & Contact (Minimal Text & Icon) */}
            <div className="mt-auto flex justify-center items-center gap-8 text-black pb-8 text-[10px] uppercase font-bold tracking-widest">
              <Link href="https://instagram.com/dontbetraygod" onClick={() => setIsOpen(false)} className="hover:opacity-50 transition-opacity">IG</Link>
              <Link href="https://twitter.com/dontbetraygod1" onClick={() => setIsOpen(false)} className="hover:opacity-50 transition-opacity">X</Link>
              <Link href="https://wa.me/233209088648" onClick={() => setIsOpen(false)} className="hover:opacity-50 transition-opacity">WA</Link>
              <Link href="mailto:dontbetraygod1@gmail.com" onClick={() => setIsOpen(false)} className="hover:opacity-50 transition-opacity">
                <Mail size={16} strokeWidth={1.5} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
